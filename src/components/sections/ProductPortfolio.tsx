"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductQuickView } from "@/components/ui/ProductQuickView";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function ProductPortfolio() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section id="products" className="full-bleed-section section-anchor section-mist py-7 lg:py-9">
        <Container>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--earth)]">Product Portfolio</p>
              <h2 className="mt-2 font-[var(--font-heading)] text-[1.9rem] leading-tight text-[var(--foreground)] sm:text-[2.2rem]">
                Explore the current Pure Select product range.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">
                Browse our available products in one clean list, including retail packs
                available for Blinkit and business-ready supply options.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
              <p>
                Showing <span className="font-semibold text-[var(--foreground)]">{products.length}</span> products
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(246,240,228,0.92))] px-4 py-2 shadow-[0_10px_24px_rgba(18,53,36,0.08)]">
                <Badge className="bg-[rgba(255,255,255,0.78)]">Stay Tuned</Badge>
                <p className="text-sm font-medium text-[var(--muted)]">For more products</p>
              </div>
            </div>
          </div>
          <div className="mt-4 grid items-stretch gap-3 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                onQuickView={setSelectedProduct}
              />
            ))}
          </div>
          <ProductQuickView product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </Container>
      </section>
    </>
  );
}
