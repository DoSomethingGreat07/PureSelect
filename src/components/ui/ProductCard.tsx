"use client";

import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";
import { Product } from "@/types/product";
import { Badge } from "./Badge";
import { Button } from "./Button";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  mode?: "retail" | "bulk";
}

export function ProductCard({
  product,
  onQuickView,
  mode = "retail"
}: Readonly<ProductCardProps>) {
  const handleEnquire = () => {
    document.dispatchEvent(new CustomEvent("prefill-enquiry", { detail: product.name }));
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <article className="card-surface group flex h-full flex-col p-3.5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(18,53,36,0.12)]">
      <div className="relative overflow-hidden rounded-[var(--radius-soft)] bg-[var(--background-soft)] p-4">
        <Badge className="absolute left-3 top-3 z-10">{product.category}</Badge>
        <div className="relative aspect-[11/14] w-full">
          <Image
            src={product.image}
            alt={product.altText}
            fill
            className="object-contain transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 60vw, 20vw"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col pb-1 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--earth)]">{product.localName}</p>
        <h3 className="mt-2 font-[var(--font-heading)] text-[1.7rem] leading-none">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{product.description}</p>
        <div className="mt-4 overflow-hidden rounded-[18px] bg-[rgba(18,53,36,0.04)] px-4 py-0 transition-all duration-300 group-hover:py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--earth)]">Best For</p>
          <p className="mt-2 text-sm leading-6 text-[var(--foreground)] opacity-70 transition duration-300 group-hover:opacity-100">
            {mode === "retail" ? product.retailHighlight : product.bulkHighlight}
          </p>
        </div>
        <p className="mt-4 text-sm font-medium text-[var(--foreground)]">
          {mode === "retail" ? "Retail packs" : "Bulk supply"}:{" "}
          <span className="text-[var(--muted)]">
            {mode === "retail" ? product.formats.slice(0, 2).join(" / ") : product.formats.slice(2).join(" / ")}
          </span>
        </p>
        <div className="mt-5">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--earth)]">
            {mode === "retail"
              ? product.imageStatus === "placeholder"
                ? "Placeholder image"
                : "Retail pack"
              : "Bulk-ready"}
          </span>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button
              onClick={() => onQuickView?.(product)}
              variant="secondary"
              className="w-full gap-2 px-3 text-[13px]"
            >
              <Eye size={15} />
              Quick View
            </Button>
            <Button onClick={handleEnquire} className="w-full gap-2 px-3 text-[13px]">
              {mode === "retail" ? "Enquire Now" : "Bulk Enquiry"} <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
