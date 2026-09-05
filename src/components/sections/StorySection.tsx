import { PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InfoCard } from "@/components/ui/InfoCard";

const storyHighlights = [
  "Pure Select was founded on a simple belief: everyday groceries should be pure, reliable, and carefully selected."
];

export function StorySection() {
  return (
    <section id="our-story" className="full-bleed-section section-anchor section-spacing section-ivory">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="p-2 sm:p-4">
            <SectionHeading
              eyebrow="Our Story"
              title="A trusted grocery brand built in Telangana."
              description="Headquartered in Siddipet, Telangana, we are building a grocery brand rooted in careful sourcing, hygienic packaging, dependable supply, and long-term customer trust."
            />
            <div className="mt-6 space-y-4">
              {storyHighlights.map((item) => (
                <p key={item} className="text-base leading-7 text-[var(--muted)] sm:text-lg">
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="card-surface rounded-[24px] border-[rgba(18,53,36,0.22)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--earth)]">Mission</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  To make trusted, high-quality groceries accessible to every household and
                  business.
                </p>
              </div>
              <div className="card-surface rounded-[24px] border-[rgba(18,53,36,0.22)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--earth)]">Vision</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  To become Telangana&apos;s most trusted and largest consumer grocery brand.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-2 sm:p-4 lg:grid-rows-3">
            <InfoCard
              icon={ShieldCheck}
              title="Quality First"
              description="Carefully selected products sourced from trusted suppliers."
              compact
              className="rounded-[24px] border-[rgba(18,53,36,0.22)]"
            />
            <InfoCard
              icon={Truck}
              title="Reliable Supply"
              description="Consistent product availability and dependable delivery."
              compact
              className="rounded-[24px] border-[rgba(18,53,36,0.22)]"
            />
            <InfoCard
              icon={PackageCheck}
              title="Hygienically Packed"
              description="Consumer-grade packaging standards."
              compact
              className="rounded-[24px] border-[rgba(18,53,36,0.22)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
