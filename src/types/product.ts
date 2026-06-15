export type ProductCategory = "Pulses" | "Snacks & Essentials" | "Grains & Staples";

export type ProductImageStatus = "available" | "placeholder";

export type ProductUseCase =
  | "Households"
  | "Restaurants"
  | "Bulk Buyers"
  | "South Indian Staples";

export interface Product {
  name: string;
  localName: string;
  category: ProductCategory;
  formats: string[];
  description: string;
  image: string;
  imageStatus: ProductImageStatus;
  altText: string;
  useCases: ProductUseCase[];
  idealFor: string[];
  usageIdeas: string[];
  microStory: string;
  retailHighlight: string;
  bulkHighlight: string;
}
