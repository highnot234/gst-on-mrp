/** FAQ content. Answers are original, natural-language and SEO-friendly.
 * The same data drives both the rendered accordion and the FAQPage JSON-LD. */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What is GST on MRP?",
    answer:
      "MRP (Maximum Retail Price) is the highest price at which a product can be sold to a consumer in India, and by law it already includes all applicable taxes such as GST. So when you buy something at its MRP, the GST is baked into that figure rather than added at the counter. To find how much of the MRP is actually tax, you work backwards from the total using a reverse GST calculation.",
  },
  {
    question: "How do I calculate the base price from an MRP that includes GST?",
    answer:
      "Divide the MRP by one plus the GST rate expressed as a decimal. The formula is Base Price = MRP / (1 + GST/100). For example, on an MRP of ₹1,180 with 18% GST, the base price is 1180 / 1.18 = ₹1,000, which means ₹180 is GST. This is exactly what the reverse GST calculator on this page does for you instantly.",
  },
  {
    question: "What is reverse GST calculation?",
    answer:
      "Reverse GST calculation is the process of separating the tax portion out of a GST-inclusive price. Instead of adding tax to a base amount, you already have the final price and want to know the pre-tax value and the GST that it contains. It is commonly used to read the true product value from an MRP or from a tax-inclusive invoice total.",
  },
  {
    question: "How do I add GST to a base price?",
    answer:
      "Multiply the base price by the GST rate as a decimal to get the GST amount, then add it back. The formula is GST Amount = Base Price × GST/100 and Final Price = Base Price + GST Amount. For a ₹1,000 base price at 18%, the GST is ₹180 and the final price becomes ₹1,180. Use the Add GST tab of the calculator for an instant result.",
  },
  {
    question: "What is the difference between GST-inclusive and GST-exclusive prices?",
    answer:
      "A GST-inclusive price already contains the tax, so nothing extra is charged on top — MRP is the classic example. A GST-exclusive price is the base value before tax, and GST is added separately, which is common on business quotes and B2B invoices. The reverse calculator handles inclusive prices, while the add calculator handles exclusive prices.",
  },
  {
    question: "What are CGST, SGST and IGST?",
    answer:
      "GST in India is split depending on where the buyer and seller are located. For a sale within the same state, the tax is divided equally into CGST (Central GST) and SGST (State GST). For a sale between two different states, a single IGST (Integrated GST) is charged instead, equal to the full GST amount. The calculator shows all three so you can use whichever applies.",
  },
  {
    question: "How are CGST and SGST calculated?",
    answer:
      "For intra-state transactions, the total GST is shared equally between the centre and the state, so CGST = GST Amount / 2 and SGST = GST Amount / 2. On ₹180 of total GST, that means ₹90 CGST and ₹90 SGST. The combined rate still equals the headline GST rate — an 18% slab becomes 9% CGST plus 9% SGST.",
  },
  {
    question: "When is IGST charged instead of CGST and SGST?",
    answer:
      "IGST applies to inter-state supplies, meaning the seller and the place of supply are in different states or union territories, and also to imports. In these cases the entire GST amount is collected as a single IGST figure rather than being split. The centre later apportions the state's share, but for your calculation IGST simply equals the total GST.",
  },
  {
    question: "What are the current GST rate slabs in India?",
    answer:
      "Most goods and services fall into one of the main GST slabs: 5%, 12%, 18% and 28%. There are also special rates such as 0% for many essentials, 0.25% for rough diamonds and 3% for gold and precious metals. The calculator lets you pick any of these common rates or type a custom percentage if your item uses a different one.",
  },
  {
    question: "Which GST rate should I use for my product?",
    answer:
      "The correct slab depends on the product or service category as notified by the GST Council. Everyday packaged foods often sit at 5% or 12%, most standard goods and services are 18%, and luxury or sin goods like aerated drinks are 28%. If you are unsure, check the official HSN or SAC classification for your item, then enter that rate into the calculator.",
  },
  {
    question: "Does MRP always include GST?",
    answer:
      "Yes. Under Indian consumer law the MRP printed on a packaged product is the all-inclusive ceiling price, so it already accounts for GST and any other applicable levies. A retailer cannot legally charge more than the MRP by adding GST on top. To see the tax component, use the reverse GST calculation rather than adding GST again.",
  },
  {
    question: "Can a shop charge GST over and above the MRP?",
    answer:
      "No. Since MRP is defined as the maximum inclusive price, charging GST on top of it would push the amount above the MRP, which is not permitted. If a seller does this, the extra tax is being charged incorrectly. The lawful approach is to treat the MRP as the final price and derive the GST from within it.",
  },
  {
    question: "How do I find how much GST I paid on a purchase?",
    answer:
      "Take the MRP or final paid amount, enter it into the reverse GST calculator with the item's GST rate, and read the GST Amount field. It computes GST Amount = MRP − (MRP / (1 + GST/100)). This tells you the exact rupee value of tax contained in the price you paid.",
  },
  {
    question: "Is this GST calculator free to use?",
    answer:
      "Yes, the calculator is completely free and runs entirely in your browser. There is no sign-up, no limit on the number of calculations and nothing to install. Both the reverse GST and add GST modes are available at no cost, and your inputs are processed locally on your device.",
  },
  {
    question: "How accurate are the results?",
    answer:
      "The calculator uses the standard GST formulas and rounds each figure to two decimal places, which matches typical invoicing practice. Results are accurate for everyday price and tax checks. For official filings or legal invoices, always cross-check against your accounting software and the applicable rules, since rounding conventions can differ slightly.",
  },
  {
    question: "Why does rounding sometimes make the split look off by a paisa?",
    answer:
      "When a GST amount is an odd number of paise, splitting it equally into CGST and SGST can leave a one-paisa difference after rounding each half to two decimals. This is normal and expected. The calculator rounds each value independently to stay consistent with how tax amounts are usually displayed on invoices.",
  },
  {
    question: "Can I use this calculator for invoices and billing?",
    answer:
      "You can use it to quickly work out base values, GST amounts and CGST/SGST/IGST splits while preparing an estimate or checking an invoice. It is a helpful reference tool, but it is not a full billing system, so for formal GST invoices you should still use compliant accounting software that records HSN codes, GSTINs and other required details.",
  },
  {
    question: "What is the formula to remove GST from a total amount?",
    answer:
      "To remove GST from a tax-inclusive total, divide by one plus the rate as a decimal: Base = Total / (1 + GST/100). The GST removed is then Total − Base. For an 18% inclusive total of ₹2,360, the base is ₹2,000 and the GST removed is ₹360. This is the reverse GST operation.",
  },
  {
    question: "Does the calculator work on mobile devices?",
    answer:
      "Yes. The interface is mobile-first and fully responsive, so it adapts to phones, tablets and desktops. Inputs use numeric-friendly keyboards on mobile, results update instantly as you type, and you can copy the full breakdown with a single tap to share or paste elsewhere.",
  },
  {
    question: "Do I need an internet connection after the page loads?",
    answer:
      "No. All calculations happen locally in your browser using lightweight JavaScript, so once the page has loaded you can keep calculating even if your connection drops. Nothing you type is sent to a server, which also means your amounts stay private on your own device.",
  },
];
