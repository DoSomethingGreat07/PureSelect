import { BriefcaseBusiness, BadgeCheck, PackageCheck, ShoppingBasket, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InfoCard } from "@/components/ui/InfoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    icon: BadgeCheck,
    title: "Quality First",
    description: "Carefully selected products sourced from trusted suppliers."
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Consistent product availability and dependable delivery."
  },
  {
    icon: PackageCheck,
    title: "Hygienically Packed",
    description: "Consumer-grade packaging standards."
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Operations",
    description: "GST-compliant, organized procurement and business processes."
  },
  {
    icon: ShoppingBasket,
    title: "Growing Consumer Brand",
    description: "Building trust through modern retail and quick commerce presence."
  }
];

export function WhyChooseSection() {
  return (
    <section id="why-pure-select" className="full-bleed-section section-anchor section-spacing section-white">
      <Container>
        <SectionHeading
          eyebrow="Why Pure Select"
          title="Built for trust, consistency, and long-term supply relationships."
          description="The brand combines careful sourcing, dependable operations, and a modern growth path across consumer and B2B channels."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item) => (
            <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  );
}
