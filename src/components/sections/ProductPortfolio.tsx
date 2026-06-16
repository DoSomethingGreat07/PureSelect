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
        <div className="mt-8 rounded-[28px] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(246,240,228,0.92))] p-6 shadow-[0_18px_40px_rgba(18,53,36,0.08)] sm:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Badge className="bg-[rgba(255,255,255,0.78)]">Stay Tuned</Badge>
              <h3 className="mt-4 font-[var(--font-heading)] text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
                More Pure Select products are on the way.
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
                We&apos;re expanding our portfolio with more carefully selected staples, pulses, and everyday grocery
                essentials. Stay tuned for upcoming launches and wider availability.
              </p>
            </div>
            <div className="rounded-[24px] bg-[rgba(18,53,36,0.05)] px-5 py-4 text-sm font-medium leading-6 text-[var(--foreground)] lg:max-w-xs">
              New additions will appear here as soon as packaging, sourcing, and retail readiness are finalized.
            </div>
          </div>
        </div>
        <ProductQuickView product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </Container>
      </section>
    </>
  );
}
