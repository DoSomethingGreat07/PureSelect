import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Pure Select",
  alternates: { canonical: "/privacy" },
  description: "Read Pure Select's privacy policy, including technical data, third-party links, cookies, and privacy contact information."
};

const sections: LegalSection[] = [
  {
    id: "information",
    title: "Information You Share",
    paragraphs: [
      "This policy explains how Pure Select Enterprises LLP handles information when you browse this website or contact us about our products and supply services.",
      "You can browse our products without creating an account. If you submit an enquiry, we collect the details you provide:"
    ],
    bullets: [
      "Your name, business or organization name, mobile number, and email address.",
      "Your state, city or town, address, and any optional village or locality details.",
      "Your business type, product requirement, estimated quantity, and any additional notes, including products entered under ‘Other’."
    ],
    closing: "Please share only information relevant to your enquiry. Do not include passwords, payment card details, or identity documents in the form. This website does not process payments."
  },
  {
    id: "how-we-use-information",
    title: "How Your Enquiry Is Used",
    paragraphs: ["The information you submit helps us understand and respond to your request."],
    bullets: [
      "Review your product and supply requirements and contact you about your enquiry.",
      "Send your enquiry to the Pure Select team by email and send a confirmation with the submitted details to your email address.",
      "Check submissions for spam and protect the enquiry service from automated abuse."
    ]
  },
  {
    id: "service-providers",
    title: "Service Providers & Technical Data",
    paragraphs: [
      "Our website hosting and email providers process information needed to deliver the website and enquiry emails. Enquiry details are transmitted through our email service and may remain in email records and related correspondence.",
      "Hosting and security services may process technical information such as IP addresses, browser details, request times, and pages requested to operate and protect their services.",
      "When enabled, Cloudflare Turnstile checks whether a form submission comes from a person rather than an automated bot. Cloudflare processes technical signals for this check under its own privacy terms."
    ],
    link: { label: "Cloudflare Turnstile Privacy Addendum", href: "https://www.cloudflare.com/turnstile-privacy-policy/" }
  },
  {
    id: "third-party-links",
    title: "Shopping & External Links",
    paragraphs: [
      "Links to Blinkit, WhatsApp, and other external platforms take you to services operated by third parties.",
      "If you place an order, make a payment, or send a message through those services, their privacy policies apply to information you share with them. Review their policies before providing personal or payment details."
    ]
  },
  {
    id: "cookies",
    title: "Cookies & Browser Settings",
    paragraphs: [
      "The enquiry form does not save your entries in browser cookies or local storage. Hosting or security services may use cookies or similar technologies depending on their configuration.",
      "You can manage cookies and site permissions in your browser. Blocking security scripts or related site features may prevent the enquiry form from being submitted."
    ]
  },
  {
    id: "your-choices",
    title: "Your Choices & Privacy Requests",
    paragraphs: [
      "Submitting an enquiry is optional. Required fields are marked with an asterisk; optional notes and locality details can be left blank.",
      "You can contact us to ask about information you have shared, request a correction or deletion, or ask us to stop following up on an enquiry. Include enough detail to identify the relevant request without sending unnecessary sensitive information.",
      "Some enquiry information may remain in email records, provider backups, or records needed for ongoing business or legal obligations. Contact us if you have questions about a specific record or how long it is held."
    ]
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    paragraphs: ["We may update this policy as our website and services change. The latest version will be published on this page with an updated date."]
  }
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      eyebrow="Privacy"
      introduction="Pure Select respects your privacy."
      description="Learn what you share with us, how enquiries are handled, and how to contact us about your information."
      sections={sections}
      contactDescription="For privacy questions or requests about information you have shared, contact Pure Select Enterprises LLP:"
      contactEmail="care@pureselect.in"
    />
  );
}
