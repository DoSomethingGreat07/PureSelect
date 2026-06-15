import Image from "next/image";
import { ArrowRight, Building2, ShoppingBag } from "lucide-react";
import { Product } from "@/types/product";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface FeaturedProductSpotlightProps {
  product: Product;
  mode: "retail" | "bulk";
}

export function FeaturedProductSpotlight({
  product,
  mode
}: Readonly<FeaturedProductSpotlightProps>) {
  const isRetail = mode === "retail";

  return (
    <section className="full-bleed-section section-spacing pt-0 section-cream">
      <Container>
        <div className="card-surface overflow-hidden rounded-[32px]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[360px] bg-[linear-gradient(145deg,#efe0a7,#fbf3da)] p-6 sm:p-8">
              <div className="absolute left-8 top-8 rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--earth)]">
                Featured Product
              </div>
              <div className="relative mx-auto mt-12 aspect-[4/5] max-w-[320px]">
                <Image
                  src={product.image}
                  alt={product.altText}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 80vw, 26vw"
                />
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--earth)]">
                {isRetail ? "Retail Spotlight" : "Bulk Spotlight"}
              </p>
              <h2 className="mt-3 font-[var(--font-heading)] text-5xl leading-[0.95] text-[var(--foreground)]">
                {product.name}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {isRetail ? product.retailHighlight : product.bulkHighlight}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] bg-[rgba(255,250,240,0.76)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--earth)]">
                    {isRetail ? "Pack Focus" : "Supply Focus"}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground)]">
                    {isRetail ? "500g / 1kg consumer-ready packets" : "25kg / 50kg sacks and custom recurring supply"}
                  </p>
                </div>
                <div className="rounded-[22px] bg-[rgba(255,250,240,0.76)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--earth)]">
                    Best For
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground)]">
                    {product.idealFor.slice(0, 2).join(" • ")}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {isRetail ? (
                  <Button href={siteConfig.blinkitLink} target="_blank" rel="noreferrer" className="gap-2">
                    <ShoppingBag size={16} />
                    Shop on Blinkit
                  </Button>
                ) : (
                  <Button href="#enquiry" className="gap-2">
                    <Building2 size={16} />
                    Request Bulk Supply
                  </Button>
                )}
                <Button href="#products" variant="secondary" className="gap-2">
                  Explore Portfolio
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
