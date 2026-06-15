import { Leaf, SearchCheck, Settings2, Package, Truck } from "lucide-react";
import { journeySteps } from "@/data/journeySteps";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Leaf, SearchCheck, Settings2, Package, Truck];

export function JourneySection() {
  return (
    <section id="journey" className="full-bleed-section section-anchor section-spacing section-white">
      <Container>
        <SectionHeading
          eyebrow="Brand Journey"
          title="Our Farm-to-Kitchen Journey"
          description="A clear, disciplined process shapes every Pure Select product from sourcing to supply."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {journeySteps.map((step, index) => {
            const Icon = icons[index];

            return (
              <article key={step.title} className="card-surface p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--earth)]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-[var(--font-heading)] text-3xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
