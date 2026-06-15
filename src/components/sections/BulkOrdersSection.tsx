import { Factory, Hotel, UtensilsCrossed } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences = [
  { icon: UtensilsCrossed, title: "HoReCa", description: "Hotels, restaurants, and tiffin centers" },
  { icon: Factory, title: "Manufacturing", description: "Food processing and chutney units" },
  { icon: Hotel, title: "Institutions", description: "Caterers and large retail networks" }
];

export function BulkOrdersSection() {
  return (
    <section id="bulk-orders" className="full-bleed-section section-anchor section-spacing section-earth">
      <Container>
        <div>
          <SectionHeading
            eyebrow="Bulk Orders"
            title="Customized sourcing and recurring monthly supply at scale."
            description="Pure Select supports business requirements from 50kg to 5+ tonnes with dependable procurement and packing options."
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] bg-[linear-gradient(165deg,#173727,#28533b)] p-8 text-white shadow-[0_24px_52px_rgba(23,55,39,0.16)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-soft)]">
                Quantity Range
              </p>
              <p className="mt-3 font-[var(--font-heading)] text-6xl leading-none sm:text-7xl">
                50kg - 5+ tonnes
              </p>
              <p className="mt-5 text-sm leading-6 text-white/75">
                Ideal for HoReCa buyers, manufacturers, institutions, distributors, retail chains,
                and recurring procurement teams.
              </p>
              <Button href="#enquiry" variant="light" className="mt-8">
                Bulk Orders & Business Enquiries
              </Button>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {audiences.map((audience) => {
                const Icon = audience.icon;

                return (
                  <article key={audience.title} className="card-surface p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
                      <Icon size={22} className="text-[var(--foreground)]" />
                    </div>
                    <h3 className="mt-5 font-[var(--font-heading)] text-3xl">{audience.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{audience.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
