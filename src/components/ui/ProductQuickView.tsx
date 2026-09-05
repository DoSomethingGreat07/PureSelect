"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { Product } from "@/types/product";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Modal } from "./Modal";

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductQuickView({ product, onClose }: Readonly<ProductQuickViewProps>) {
  if (!product) return null;

  return (
    <Modal label={`${product.name} details`} onClose={onClose} className="max-w-4xl">
      <div className="card-surface relative w-full max-w-4xl overflow-hidden rounded-[32px] bg-[var(--cream)]">
        <button
          type="button"
          onClick={onClose}
          className="focus-ring absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/90"
          aria-label="Close product quick view"
        >
          <X size={18} />
        </button>

        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[320px] bg-[linear-gradient(145deg,#f6e9b6,#fbf5df)] p-6 sm:p-8">
            <Badge>{product.category}</Badge>
            <div className="relative mx-auto mt-8 aspect-[4/5] max-w-[320px]">
              <Image
                src={product.image}
                alt={product.altText}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 80vw, 24vw"
              />
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--earth)]">{product.localName}</p>
            <h3 className="mt-3 font-[var(--font-heading)] text-5xl leading-[0.95] text-[var(--foreground)]">
              {product.name}
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">{product.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="rounded-full border border-[var(--border)] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--earth)]"
                >
                  {useCase}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[22px] bg-[rgba(255,250,240,0.72)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--earth)]">Available Formats</p>
                <p className="mt-3 text-sm leading-6 text-[var(--foreground)]">{product.formats.join(" / ")}</p>
              </div>
              <div className="rounded-[22px] bg-[rgba(255,250,240,0.72)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--earth)]">Best For</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--foreground)]">
                  {product.idealFor.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-[24px] bg-[rgba(18,53,36,0.04)] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--earth)]">Usage Inspiration</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.usageIdeas.map((idea) => (
                  <span
                    key={idea}
                    className="rounded-full bg-white px-3 py-2 text-sm font-medium text-[var(--foreground)] shadow-[0_10px_22px_rgba(18,53,36,0.06)]"
                  >
                    {idea}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#products" variant="secondary" onClick={() => onClose()}>
                Back to Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
