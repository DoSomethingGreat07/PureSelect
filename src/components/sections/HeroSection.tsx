import Image from "next/image";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { TrustBadges } from "./TrustBadges";

export function HeroSection() {
  return (
    <section id="home" className="hero-section section-anchor">
      <div className="hero-inner">
        <div className="relative z-10">
          <span className="hero-eyebrow">Premium Telangana FMCG Brand</span>
          <h1 className="hero-title text-balance">
            Pure, Carefully Selected Groceries from Telangana
          </h1>
          <p className="hero-subtitle">Building Telangana&apos;s Next Trusted Grocery Brand</p>
          <p className="hero-text">
            Pure Select brings carefully selected grocery essentials from trusted sourcing
            partners to households, restaurants, retailers, and institutional buyers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={siteConfig.blinkitLink}
              target="_blank"
              rel="noreferrer"
              className="gap-2"
            >
              <ShoppingBag size={16} />
              Shop on Blinkit
            </Button>
            <Button href="#enquiry" variant="secondary" className="gap-2">
              Bulk Orders & Business Enquiries
              <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-10">
            <TrustBadges />
          </div>
        </div>

        <div className="hero-visual">
          <div className="grain-float absolute left-[8%] top-[10%] h-28 w-28 rounded-full bg-[rgba(199,156,58,0.18)] blur-3xl" />
          <div className="absolute right-[8%] top-[18%] h-52 w-52 rounded-full bg-[rgba(23,55,39,0.14)] blur-3xl" />
          <div className="absolute inset-x-[8%] bottom-[6%] top-[12%] rounded-[28px] bg-[linear-gradient(145deg,rgba(232,222,189,0.5),rgba(233,244,228,0.16))]" />
          <Image
            src="/images/hero/hero-bg-texture.png"
            alt=""
            fill
            className="object-cover opacity-10 mix-blend-multiply"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
          <Image
            src="/images/products/roasted-chana-dal.png"
            alt="Pure Select roasted Bengal gram pack"
            width={300}
            height={420}
            className="pack-blend absolute left-[4%] top-[26%] z-10 w-[35%] rotate-[-12deg] object-contain drop-shadow-[0_26px_38px_rgba(23,55,39,0.16)]"
            priority
          />
          <Image
            src="/images/products/raw-peanuts.png"
            alt="Pure Select raw peanuts pack"
            width={340}
            height={460}
            className="pack-blend absolute left-[29%] top-[8%] z-30 w-[43%] object-contain drop-shadow-[0_28px_44px_rgba(23,55,39,0.18)]"
            priority
          />
          <Image
            src="/images/products/rajma-chitra.png"
            alt="Pure Select rajma chitra pack"
            width={300}
            height={420}
            className="pack-blend absolute right-[5%] top-[27%] z-20 w-[34%] rotate-[11deg] object-contain drop-shadow-[0_26px_38px_rgba(23,55,39,0.16)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
