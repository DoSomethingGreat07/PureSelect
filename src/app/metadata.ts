import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.website),
  title: "Pure Select",
  description:
    "Pure Select is a Telangana-based FMCG grocery brand offering quality grocery essentials including peanuts, pulses, rajma, chana, dal, idli rava, and upma rava for retail consumers, HoReCa, institutional buyers, and bulk supply partners.",
  keywords: [
    "Pure Select",
    "Pure Select Enterprises LLP",
    "Grocery brand in Telangana",
    "Telangana grocery brand",
    "Siddipet grocery supplier",
    "Bulk grocery supplier Telangana",
    "HoReCa grocery supplier",
    "Pulses supplier Telangana",
    "Peanuts supplier Telangana",
    "Private label grocery supply",
    "FMCG brand Telangana",
    "From Telangana Farms to Indian Kitchens"
  ],
  openGraph: {
    title: "Pure Select",
    description:
      "A trusted Telangana grocery brand offering quality staples for households, retail, HoReCa, institutional supply, and bulk buyers.",
    url: siteConfig.website,
    siteName: siteConfig.legalName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo/pure-select-logo-primary.png",
        width: 1024,
        height: 1024,
        alt: "Pure Select logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Select",
    description:
      "A trusted Telangana grocery brand offering quality staples for households, retail, HoReCa, institutional supply, and bulk buyers.",
    images: ["/images/logo/pure-select-logo-primary.png"]
  },
  alternates: {
    canonical: "/"
  }
};
