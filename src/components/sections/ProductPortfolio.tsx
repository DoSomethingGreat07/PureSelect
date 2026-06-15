"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { Product, ProductUseCase } from "@/types/product";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductQuickView } from "@/components/ui/ProductQuickView";
import { FeaturedProductSpotlight } from "@/components/sections/FeaturedProductSpotlight";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

const categories = ["Pulses", "Snacks & Essentials", "Grains & Staples"] as const;
const useCaseFilters: Array<{ label: string; value: ProductUseCase | "All" }> = [
  { label: "All Products", value: "All" },
  { label: "Households", value: "Households" },
  { label: "Restaurants", value: "Restaurants" },
  { label: "Bulk Buyers", value: "Bulk Buyers" },
  { label: "South Indian Staples", value: "South Indian Staples" }
];

export function ProductPortfolio() {
  const [activeFilter, setActiveFilter] = useState<ProductUseCase | "All">("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [viewMode, setViewMode] = useState<"retail" | "bulk">("retail");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") return products;
    return products.filter((product) => product.useCases.includes(activeFilter));
  }, [activeFilter]);

  const spotlightProduct = products[0];

  return (
    <>
      <FeaturedProductSpotlight product={spotlightProduct} mode={viewMode} />
      <section id="products" className="full-bleed-section section-anchor section-spacing section-cream">
        <Container>
        <SectionHeading
          eyebrow="Product Portfolio"
          title={
            viewMode === "retail"
              ? "Retail-ready essentials for modern households and quick commerce."
              : "Bulk-ready essentials for recurring kitchens and institutional buyers."
          }
          description={
            viewMode === "retail"
              ? "Explore consumer-friendly Pure Select packs designed for pantry refills, modern retail, and Blinkit-led convenience."
              : "Explore the same trusted products through a procurement lens with bulk quantities, recurring supply, and B2B relevance."
          }
        />
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </div>
        <div className="mt-8 inline-flex rounded-full border border-[var(--border)] bg-white/76 p-1">
          <button
            type="button"
            onClick={() => setViewMode("retail")}
            className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
              viewMode === "retail" ? "bg-[var(--primary)] text-[var(--cream)]" : "text-[var(--foreground)]"
            }`}
          >
            Retail Packs
          </button>
          <button
            type="button"
            onClick={() => setViewMode("bulk")}
            className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
              viewMode === "bulk" ? "bg-[var(--primary)] text-[var(--cream)]" : "text-[var(--foreground)]"
            }`}
          >
            Bulk Supply
          </button>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {useCaseFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter.value
                  ? "bg-[var(--primary)] text-[var(--cream)] shadow-[0_14px_26px_rgba(18,53,36,0.16)]"
                  : "border border-[var(--border)] bg-white/72 text-[var(--foreground)] hover:bg-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <p>
            Showing <span className="font-semibold text-[var(--foreground)]">{filteredProducts.length}</span>{" "}
            curated products for <span className="font-semibold text-[var(--foreground)]">{activeFilter}</span> in{" "}
            <span className="font-semibold text-[var(--foreground)]">
              {viewMode === "retail" ? "Retail Packs" : "Bulk Supply"}
            </span>
          </p>
          <p>
            {viewMode === "retail"
              ? "Retail mode highlights consumer packs and quick commerce relevance."
              : "Bulk mode highlights procurement fit, larger formats, and supply use cases."}
          </p>
        </div>
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              onQuickView={setSelectedProduct}
              mode={viewMode}
            />
          ))}
        </div>
        <ProductQuickView product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </Container>
      </section>
    </>
  );
}
