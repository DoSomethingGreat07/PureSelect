import { PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InfoCard } from "@/components/ui/InfoCard";

const storyHighlights = [
  "Pure Select was founded on a simple belief: everyday groceries should be pure, reliable, and carefully selected.",
  "Headquartered in Siddipet, Telangana, we are building a trusted grocery brand rooted in strong sourcing, hygienic packaging, dependable supply, and long-term customer trust."
];

export function StorySection() {
  return (
    <section id="our-story" className="full-bleed-section section-anchor section-spacing section-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-2 sm:p-4">
            <SectionHeading
              eyebrow="Our Story"
              title="A trusted grocery brand built in Telangana on careful selection."
              description="From Telangana farms to Indian kitchens, Pure Select is focused on quality sourcing, hygienic packaging, dependable supply, and long-term customer trust."
            />
            <div className="mt-6 space-y-4">
              {storyHighlights.map((item) => (
                <p key={item} className="text-base leading-7 text-[var(--muted)] sm:text-lg">
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="card-surface p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--earth)]">Mission</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  To make trusted, high-quality groceries accessible to every household and
                  business.
                </p>
              </div>
              <div className="card-surface p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--earth)]">Vision</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  To become Telangana&apos;s most trusted grocery brand.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <InfoCard
              icon={ShieldCheck}
              title="Quality First"
              description="Carefully selected products sourced from trusted suppliers."
            />
            <InfoCard
              icon={Truck}
              title="Reliable Supply"
              description="Consistent product availability and dependable delivery."
            />
            <InfoCard
              icon={PackageCheck}
              title="Hygienically Packed"
              description="Consumer-grade packaging standards."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
