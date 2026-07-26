import Image from "next/image";
import { Clock3, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BlinkitSection() {
  return (
    <section id="blinkit" className="full-bleed-section section-anchor section-spacing section-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Consumer Retail"
              title="Now available on Blinkit"
              description="Order Pure Select products directly through Blinkit for convenient household grocery shopping."
            />
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.blinkitLink}
                target="_blank"
                rel="noreferrer"
                className="card-surface focus-ring flex items-center gap-3 px-4 py-3 transition hover:-translate-y-0.5"
              >
                <Image
                  src="/images/products/blinkit.png"
                  alt="Blinkit logo"
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                />
                <span className="text-sm font-semibold text-[var(--foreground)]">Available on Blinkit</span>
              </a>
            </div>
            <p className="mt-6 text-base leading-7 text-[var(--muted)] sm:text-lg">
              The website serves both everyday consumers and supply partners, so Blinkit is
              featured prominently without overshadowing Pure Select&apos;s broader business model.
            </p>
          </div>
          <div className="card-surface overflow-hidden">
            <div className="rounded-[28px] bg-[linear-gradient(145deg,#f3dc8a,#f7e9b9_38%,#efe3b0)] p-5 sm:p-6">
              <div className="relative overflow-hidden rounded-[24px] border border-white/55 bg-[rgba(255,250,240,0.5)] p-6 shadow-[0_24px_48px_rgba(18,53,36,0.12)]">
                <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-[rgba(255,250,240,0.55)] blur-2xl" />
                <div className="absolute bottom-4 right-4 h-28 w-28 rounded-full bg-[rgba(18,53,36,0.08)] blur-3xl" />

                <div className="relative z-10 grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr]">
                  <div className="flex min-h-[230px] flex-col items-start justify-center rounded-[22px] bg-[rgba(255,250,240,0.76)] p-6 sm:p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-white shadow-[0_14px_28px_rgba(18,53,36,0.12)]">
                      <Image
                        src="/images/products/blinkit.png"
                        alt="Blinkit logo"
                        width={44}
                        height={44}
                        className="h-11 w-11 object-contain"
                      />
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--earth)]">
                      Quick Commerce
                    </p>
                    <h3 className="mt-2 font-[var(--font-heading)] text-4xl text-[var(--foreground)]">
                      Blinkit
                    </h3>
                    <p className="mt-4 max-w-sm text-base leading-7 text-[var(--muted)]">
                      Order Pure Select essentials with convenient everyday delivery through
                      Blinkit.
                    </p>
                  </div>

                  <div className="grid min-h-[230px] grid-cols-2 gap-5">
                    <div className="flex items-center justify-center rounded-[22px] bg-[rgba(255,250,240,0.68)] p-5 shadow-[0_16px_30px_rgba(18,53,36,0.1)]">
                      <Image
                        src="/images/products/raw-peanuts.png"
                        alt="Pure Select raw peanuts pack"
                        width={260}
                        height={340}
                        className="pack-blend h-auto w-full max-w-[210px] -rotate-[6deg] object-contain drop-shadow-[0_20px_28px_rgba(18,53,36,0.14)]"
                        sizes="(max-width: 1024px) 30vw, 14vw"
                      />
                    </div>
                    <div className="flex items-center justify-center rounded-[22px] bg-[rgba(255,250,240,0.68)] p-5 shadow-[0_16px_30px_rgba(18,53,36,0.1)]">
                      <Image
                        src="/images/products/rajma-chitra.png"
                        alt="Pure Select rajma chitra pack"
                        width={260}
                        height={340}
                        className="pack-blend h-auto w-full max-w-[210px] rotate-[6deg] object-contain drop-shadow-[0_20px_28px_rgba(18,53,36,0.14)]"
                        sizes="(max-width: 1024px) 30vw, 14vw"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(255,250,240,0.86)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] shadow-[0_12px_24px_rgba(18,53,36,0.08)]">
                  <Clock3 size={16} className="text-[var(--earth)]" />
                  Quick Delivery
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(255,250,240,0.86)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] shadow-[0_12px_24px_rgba(18,53,36,0.08)]">
                  <ShieldCheck size={16} className="text-[var(--earth)]" />
                  Trusted Packs
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(255,250,240,0.86)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] shadow-[0_12px_24px_rgba(18,53,36,0.08)]">
                  <ShoppingBag size={16} className="text-[var(--earth)]" />
                  Everyday Essentials
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(255,250,240,0.86)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] shadow-[0_12px_24px_rgba(18,53,36,0.08)]">
                  <Sparkles size={16} className="text-[var(--earth)]" />
                  Clean Packaging
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
