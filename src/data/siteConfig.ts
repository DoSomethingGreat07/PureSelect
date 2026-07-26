import { SiteConfig } from "@/types/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pureselect.in";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917207085910";
const defaultBlinkitLink =
  "https://blinkit.com/prn/pure-select-raw-peanuts-palli/prid/793784?srsltid=AfmBOooLTIyM8EXCWTCovaJNvKI7Vebk_vKDcOZ00hfIVFzxuNXzPplW";
const defaultRoastedChanaDalBlinkitLink = defaultBlinkitLink;
const defaultRajmaChitraBlinkitLink = defaultBlinkitLink;

export const siteConfig: SiteConfig = {
  brandName: "Pure Select",
  legalName: "Pure Select Enterprises LLP",
  phone: "+91 72070 85910",
  email: "pureselectenterprises@gmail.com",
  website: siteUrl,
  location: "Siddipet, Telangana",
  whatsappLink: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Pure Select, I would like to enquire about your products and supply options."
  )}`,
  blinkitLink: process.env.NEXT_PUBLIC_BLINKIT_URL || defaultBlinkitLink,
  productBlinkitLinks: {
    rawPeanuts: process.env.NEXT_PUBLIC_BLINKIT_URL_RAW_PEANUTS || defaultBlinkitLink,
    roastedChanaDal:
      process.env.NEXT_PUBLIC_BLINKIT_URL_ROASTED_CHANA_DAL || defaultRoastedChanaDalBlinkitLink,
    rajmaChitra:
      process.env.NEXT_PUBLIC_BLINKIT_URL_RAJMA_CHITRA || defaultRajmaChitraBlinkitLink
  },
  socialLinks: [
    {
      label: "Instagram",
      href: "https://instagram.com/"
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/"
    }
  ]
};

export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#our-story" },
  { label: "Products", href: "#products" },
  { label: "Business Supply", href: "#business-supply" },
  { label: "Enquiry", href: "#enquiry" }
];
