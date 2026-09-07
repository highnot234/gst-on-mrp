/** Central site metadata used for SEO, headers and footers. */
export const site = {
  name: "GST on MRP",
  shortName: "GST on MRP",
  url: "https://gstonmrp.com",
  title: "GST on MRP — Free Reverse GST & Add GST Calculator (India)",
  description:
    "Free, fast and accurate GST calculator for India. Extract the base price from an MRP that includes GST, or add GST on top of a price. Get instant CGST, SGST and IGST breakdowns.",
  locale: "en_IN",
  themeColor: "#0a0a0a",
  ogImage: "/og-image.svg",
  twitter: "@gstonmrp",
  author: "GST on MRP",
} as const;

export type NavLink = { label: string; href: string };

/**
 * Primary nav. Anchor targets are prefixed with "/" so they resolve to the
 * homepage section from any page in this multi-page site, plus links to the
 * standalone company pages.
 */
export const primaryNav: NavLink[] = [
  { label: "Calculator", href: "/#calculator" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Formulas", href: "/#formulas" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Standalone pages — used for footer links, sitemap and cross-linking. */
export const companyPages: NavLink[] = [
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms & conditions", href: "/terms-and-conditions" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Calculators",
    links: [
      { label: "Reverse GST (from MRP)", href: "/#calculator" },
      { label: "Add GST (to base price)", href: "/#calculator" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "What is GST on MRP", href: "/#what-is-gst" },
      { label: "Reverse GST calculation", href: "/#reverse-gst" },
      { label: "Add GST calculation", href: "/#add-gst" },
      { label: "GST formulas", href: "/#formulas" },
    ],
  },
  {
    title: "Company",
    links: companyPages,
  },
];
