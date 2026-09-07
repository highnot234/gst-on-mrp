/**
 * GST calculation library for "GST on MRP".
 *
 * Two modes:
 *  - "reverse" (GST-inclusive): extract the base price out of an MRP that
 *    already includes GST.
 *  - "add" (GST-exclusive): add GST on top of a base price.
 *
 * All monetary values are rounded to 2 decimal places using half-up rounding.
 * Formatting uses the Indian numbering system (en-IN) with the ₹ symbol.
 */

export type GstMode = "reverse" | "add";

/** Common GST slab rates in India (%). */
export const GST_RATES = [0, 0.25, 3, 5, 12, 18, 28] as const;
export type GstRate = (typeof GST_RATES)[number];

export interface GstBreakdown {
  /** Price excluding GST. */
  basePrice: number;
  /** Total price including GST (MRP in reverse mode, final price in add mode). */
  grossPrice: number;
  /** Total GST amount. */
  gstAmount: number;
  /** Central GST (half of gstAmount, intra-state). */
  cgst: number;
  /** State GST (half of gstAmount, intra-state). */
  sgst: number;
  /** Integrated GST (full gstAmount, inter-state). */
  igst: number;
  /** The GST rate used (%). */
  rate: number;
}

export interface ValidationResult {
  valid: boolean;
  /** Field-keyed error messages. */
  errors: {
    amount?: string;
    rate?: string;
  };
}

/** Round a number to `decimals` places using half-up rounding, avoiding
 * common floating-point artefacts (e.g. 1.005 -> 1.01). */
export function roundTo(value: number, decimals = 2): number {
  if (!Number.isFinite(value)) return 0;
  const factor = 10 ** decimals;
  // epsilon nudge guards against representation errors like 1.005 * 100 = 100.49999
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

/**
 * Validate the raw user inputs.
 * @param amount  The primary amount (MRP for reverse, base price for add).
 * @param rate    The GST rate (%).
 */
export function validateInput(
  amount: number | null,
  rate: number | null,
): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  if (amount === null || Number.isNaN(amount)) {
    errors.amount = "Enter an amount to calculate.";
  } else if (amount < 0) {
    errors.amount = "Amount cannot be negative.";
  } else if (amount > 1_000_000_000) {
    errors.amount = "Amount is too large.";
  }

  if (rate === null || Number.isNaN(rate)) {
    errors.rate = "Select a GST rate.";
  } else if (rate < 0 || rate > 100) {
    errors.rate = "GST rate must be between 0 and 100.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

/**
 * Reverse (GST-inclusive) calculation.
 *   Base Price = MRP / (1 + GST/100)
 *   GST Amount = MRP - Base Price
 */
export function calcReverse(mrp: number, rate: number): GstBreakdown {
  const basePrice = roundTo(mrp / (1 + rate / 100));
  const gstAmount = roundTo(mrp - basePrice);
  return {
    basePrice,
    grossPrice: roundTo(mrp),
    gstAmount,
    cgst: roundTo(gstAmount / 2),
    sgst: roundTo(gstAmount / 2),
    igst: gstAmount,
    rate,
  };
}

/**
 * Add (GST-exclusive) calculation.
 *   GST Amount  = Base Price × GST/100
 *   Final Price = Base Price + GST Amount
 */
export function calcAdd(basePrice: number, rate: number): GstBreakdown {
  const gstAmount = roundTo(basePrice * (rate / 100));
  const grossPrice = roundTo(basePrice + gstAmount);
  return {
    basePrice: roundTo(basePrice),
    grossPrice,
    gstAmount,
    cgst: roundTo(gstAmount / 2),
    sgst: roundTo(gstAmount / 2),
    igst: gstAmount,
    rate,
  };
}

/** Dispatch to the correct formula based on mode. */
export function calculate(
  mode: GstMode,
  amount: number,
  rate: number,
): GstBreakdown {
  return mode === "reverse"
    ? calcReverse(amount, rate)
    : calcAdd(amount, rate);
}

const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const inrPlainFormatter = new Intl.NumberFormat("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** Format a number as Indian Rupees, e.g. 1234567.5 -> "₹12,34,567.50". */
export function formatINR(value: number): string {
  return inrFormatter.format(roundTo(value));
}

/** Format a number in the Indian numbering system without the currency symbol. */
export function formatNumber(value: number): string {
  return inrPlainFormatter.format(roundTo(value));
}

/** Parse a possibly-formatted string ("1,23,456.50") into a number or null. */
export function parseAmount(raw: string): number | null {
  const cleaned = raw.replace(/[₹,\s]/g, "").trim();
  if (cleaned === "") return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

/** Build a human-readable, copy-friendly summary of a breakdown. */
export function breakdownToText(
  mode: GstMode,
  b: GstBreakdown,
): string {
  const title =
    mode === "reverse"
      ? "GST on MRP — Reverse GST (GST-inclusive)"
      : "GST on MRP — Add GST (GST-exclusive)";
  const lines = [
    title,
    "--------------------------------",
    `GST Rate:     ${b.rate}%`,
    `Base Price:   ${formatINR(b.basePrice)}`,
    `GST Amount:   ${formatINR(b.gstAmount)}`,
    `CGST:         ${formatINR(b.cgst)}`,
    `SGST:         ${formatINR(b.sgst)}`,
    `IGST:         ${formatINR(b.igst)}`,
    mode === "reverse"
      ? `MRP (Total):  ${formatINR(b.grossPrice)}`
      : `Final Price:  ${formatINR(b.grossPrice)}`,
  ];
  return lines.join("\n");
}
