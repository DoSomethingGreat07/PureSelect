import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const commitments = [
  "Support local agricultural ecosystems",
  "Source quality commodities responsibly",
  "Create value within Telangana",
  "Build a nationally recognized brand from Telangana"
];

export function TelanganaSection() {
  return (
    <section id="telangana" className="full-bleed-section section-anchor section-spacing section-cream">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Telangana Roots"
              title="From Telangana Farms to Indian Kitchens"
              description="Pure Select is proudly headquartered in Siddipet, Telangana, with a long-term vision to build a nationally trusted grocery brand rooted in regional strength."
            />
            <p className="mt-6 text-base leading-7 text-[var(--muted)] sm:text-lg">
              We believe Telangana can become one of India&apos;s leading food and agricultural
              value-addition hubs. Our goal is to create value for farmers, sourcing partners,
              businesses, and consumers through dependable, modern grocery supply.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {commitments.map((item) => (
                <div key={item} className="card-surface flex items-start gap-3 p-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)]">
                    <Check size={16} />
                  </div>
                  <p className="text-sm leading-6 text-[var(--foreground)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#284d39,#183727)]">
            <Image
              src="/images/backgrounds/farm-texture.png"
              alt=""
              fill
              className="object-cover opacity-30 mix-blend-screen"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <Image
              src="/images/backgrounds/telangana-map-outline.png"
              alt="Telangana map outline graphic"
              fill
              className="object-contain p-10 opacity-35"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <div className="relative flex w-full max-w-[280px] items-center justify-center p-4">
                <div className="absolute inset-4 rounded-[28px] bg-[radial-gradient(circle,rgba(255,250,240,0.26),rgba(255,250,240,0.08)_52%,transparent_72%)] blur-xl" />
                <Image
                  src="/images/logo/pure-select-logo.png"
                  alt="Pure Select logo"
                  width={240}
                  height={240}
                  className="logo-blend relative z-10 h-auto w-full object-contain opacity-95"
                  sizes="240px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
