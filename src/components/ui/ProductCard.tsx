"use client";

import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";
import { Product } from "@/types/product";
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
    <article className="card-surface group flex h-full flex-col p-2.5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(18,53,36,0.12)]">
      <div className="relative overflow-hidden rounded-[var(--radius-soft)] bg-[var(--background-soft)] p-2.5">
        <div className="relative aspect-[1/0.9] w-full">
          <Image
            src={product.image}
            alt={product.altText}
            fill
            className="object-contain transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 60vw, 20vw"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-2.5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--earth)]">{product.localName}</p>
        <h3 className="mt-1.5 font-[var(--font-heading)] text-[1.3rem] leading-none sm:text-[1.4rem]">{product.name}</h3>
        <div className="mt-3">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--earth)]">
            {mode === "retail"
              ? product.imageStatus === "placeholder"
                ? "Placeholder image"
                : "Retail pack"
              : "Bulk-ready"}
          </span>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button
              onClick={() => onQuickView?.(product)}
              variant="secondary"
              className="h-10 w-full gap-2 px-3 text-[12px]"
            >
              <Eye size={15} />
              Quick View
            </Button>
            <Button onClick={handleEnquire} className="h-10 w-full gap-2 px-3 text-[12px]">
              {mode === "retail" ? "Enquire Now" : "Bulk Enquiry"} <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
