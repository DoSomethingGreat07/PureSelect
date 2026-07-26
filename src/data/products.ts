import { Product } from "@/types/product";
import { siteConfig } from "@/data/siteConfig";

export const products: Product[] = [
  {
    name: "Raw Peanuts",
    localName: "Palli",
    category: "Snacks & Essentials",
    formats: ["500g", "1kg", "25kg", "50kg"],
    description:
      "Carefully selected raw peanuts suitable for households, retail packs, food businesses, and bulk requirements.",
    image: "/images/products/raw-peanuts.png",
    imageStatus: "available",
    altText: "Pure Select raw peanuts product pack",
    useCases: ["Households", "Bulk Buyers"],
    idealFor: ["Daily pantry refills", "Snacking prep", "Retail shelves"],
    usageIdeas: ["Roasting at home", "Chutney bases", "Bulk kitchen prep"],
    microStory: "Best for everyday home use, pantry stocking, and clean retail display.",
    retailHighlight: "Available in retail-friendly packs for quick pantry restocks and Blinkit-led discovery.",
    bulkHighlight: "Well suited for larger pantry programs, retail counters, and recurring raw material supply.",
    blinkitLink: siteConfig.productBlinkitLinks.rawPeanuts
  },
  {
    name: "Roasted Chana Dal",
    localName: "Putnalu",
    category: "Snacks & Essentials",
    formats: ["500g", "1kg", "25kg", "50kg"],
    description:
      "Everyday staple used in homes, chutney preparation, food service, and institutional kitchens.",
    image: "/images/products/roasted-chana-dal.png",
    imageStatus: "available",
    altText: "Pure Select roasted Bengal gram product pack",
    useCases: ["Households", "Restaurants", "Bulk Buyers"],
    idealFor: ["Chutney making", "Snack counters", "Institutional kitchens"],
    usageIdeas: ["Coconut chutney", "Dry snack mixes", "Bulk food service"],
    microStory: "A quick-commerce friendly staple that works for both home kitchens and busy counters.",
    retailHighlight: "An everyday kitchen essential that fits naturally into modern retail and app-led buying.",
    bulkHighlight: "Great for food service counters, chutney prep teams, and larger recurring kitchen needs.",
    blinkitLink: siteConfig.productBlinkitLinks.roastedChanaDal
  },
  {
    name: "Rajma Chitra",
    localName: "Rajma",
    category: "Pulses",
    formats: ["500g", "1kg", "25kg", "50kg"],
    description: "Quality rajma selected for consistent cooking and retail or bulk grocery supply.",
    image: "/images/products/rajma-chitra.png",
    imageStatus: "available",
    altText: "Pure Select rajma chitra product pack",
    useCases: ["Households", "Restaurants", "Bulk Buyers"],
    idealFor: ["North Indian meals", "Café kitchens", "Meal service menus"],
    usageIdeas: ["Rajma masala", "Meal prep kitchens", "Restaurant gravies"],
    microStory: "Consistent grain quality for homes, cafés, and recurring kitchen operations.",
    retailHighlight: "A premium-looking consumer pack for home kitchens that care about clean presentation.",
    bulkHighlight: "Reliable grain consistency for restaurants, cafés, and recurring kitchen operations.",
    blinkitLink: siteConfig.productBlinkitLinks.rajmaChitra
  }
];
