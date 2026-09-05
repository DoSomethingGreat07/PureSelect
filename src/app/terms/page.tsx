import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pure Select",
  alternates: { canonical: "/terms" },
  description: "Terms for using the Pure Select website, submitting product enquiries, and visiting third-party shopping platforms."
};

const sections: LegalSection[] = [
  {
    id: "about-this-website",
    title: "About This Website",
    paragraphs: [
      "Welcome to Pure Select. These terms govern your use of the website operated by Pure Select Enterprises LLP. By using this website, you agree to these terms.",
      "Our website introduces our grocery products and business supply services. You can browse products, explore recipe ideas, and contact us about your requirements."
    ],
    bullets: [
      "Browsing does not require an account or user registration.",
      "This website does not offer checkout or process payments.",
      "Shopping links take you to third-party platforms such as Blinkit."
    ]
  },
  {
    id: "enquiries",
    title: "Product & Business Enquiries",
    paragraphs: [
      "Submitting an enquiry is a request for information, not an order or a confirmed supply agreement. An automatic email confirmation acknowledges receipt of your enquiry only.",
      "Product availability, quantities, prices, delivery arrangements, and any business supply terms must be confirmed separately with our team before a purchase or supply arrangement is agreed."
    ],
    closing: "Please provide accurate contact and requirement details, and submit information on behalf of a business only if you are authorized to do so."
  },
  {
    id: "third-party-platforms",
    title: "Third-Party Platforms",
    paragraphs: [
      "When you follow a shopping or contact link, you may leave this website. External platforms operate under their own terms and privacy policies, which you should review before using their services.",
      "Prices, stock, payment processing, delivery, cancellations, and refunds for marketplace purchases are handled according to the relevant seller’s and platform’s terms. Pure Select does not control those platforms."
    ],
    closing: "For an order issue, contact the platform where you purchased. You may also contact Pure Select about our products. Nothing in these terms removes responsibilities or consumer rights that apply under law."
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      "The Pure Select name, logo, packaging visuals, designs, text, and other website materials belong to Pure Select or their respective owners or licensors.",
      "You may view this website for personal use or to evaluate our products for your business. Commercial copying, republication, modification, or use of our branding requires permission unless permitted by applicable law."
    ]
  },
  {
    id: "product-information",
    title: "Product Information",
    paragraphs: ["We aim to keep product descriptions and images accurate. Product information can change, so please check the current listing and packaging before purchasing or using a product."],
    bullets: [
      "Packaging designs, pack sizes, and product availability may vary over time and by location or platform.",
      "Check the seller’s current listing for prices and purchase terms.",
      "Follow the product label for ingredients, allergen information, storage, and preparation instructions. Recipe ideas are general suggestions."
    ]
  },
  {
    id: "responsible-use",
    title: "Responsible Use",
    paragraphs: ["Please use this website lawfully and respect other visitors and our services."],
    bullets: [
      "Do not submit spam, misleading enquiries, or another person’s details without authorization.",
      "Do not attempt to bypass security checks, gain unauthorized access, or disrupt the website.",
      "Do not upload or send malicious code through the enquiry form."
    ]
  },
  {
    id: "availability-and-liability",
    title: "Website Availability & Liability",
    paragraphs: [
      "The website may be temporarily unavailable or contain errors. We do not guarantee uninterrupted access, and website information should not replace a confirmed quotation or the details on a product’s current label.",
      "To the extent permitted by applicable law, Pure Select is not responsible for indirect or consequential losses arising from use of this website or interruptions to it.",
      "Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited, or restricts your applicable consumer rights."
    ]
  },
  {
    id: "privacy",
    title: "Privacy",
    paragraphs: ["Our Privacy Policy explains what information is collected through enquiries, how it is handled, and how you can contact us about it."],
    link: { label: "Read our Privacy Policy", href: "/privacy" }
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    paragraphs: [
      "We may update these terms as the website and our services change. The latest version will appear here with an updated date. Please review this page when using the website.",
      "Updates to these website terms do not change a separately agreed order or supply arrangement."
    ]
  }
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      eyebrow="Terms"
      introduction="Welcome to Pure Select."
      description="A clear guide to using our website, making product enquiries, and shopping through our partner platforms."
      sections={sections}
      contactDescription="For questions about these terms, our products, or a business enquiry, contact Pure Select Enterprises LLP:"
      contactEmail={siteConfig.email}
    />
  );
}
