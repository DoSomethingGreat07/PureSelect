import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="hero-section section-anchor">
      <div className="hero-inner">
        <div className="hero-pill-wrap">
          <span className="hero-eyebrow">YOUR ONE-STOP FOR EVERYDAY GROCERIES</span>
        </div>
        <div className="hero-visual">
          <Image
            src="/images/hero/ps-banner.png"
            alt="Pure Select Rajma Chitra, Raw Peanuts, and Roasted Chana Dal. Everyday Essentials for a Healthier Tomorrow. Carefully selected groceries for you and your family. Carefully Selected, Quality Checked, Hygienically Packed, Trusted Sourcing Partners."
            width={2016}
            height={780}
            className="block h-auto w-full"
            sizes="100vw"
            priority
          />
        </div>
        <div className="hero-copy">
          <p className="hero-subtitle lg:whitespace-nowrap">Building Telangana&apos;s Next Trusted Grocery Brand</p>
          <p className="hero-text lg:whitespace-nowrap">
            Pure Select brings carefully selected grocery essentials from trusted sourcing
            partners to households, restaurants, retailers, and institutional buyers.
          </p>
        </div>
      </div>
    </section>
  );
}
