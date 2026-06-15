import { BadgeCheck } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="full-bleed-section section-spacing section-white">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What our customers say"
            description="Families across India are choosing Pure Select for dependable quality, clean packaging, and everyday grocery staples that feel trustworthy."
          />
          <div className="card-surface flex w-full max-w-[320px] items-center gap-4 p-5 lg:w-auto">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--foreground)]">
              <BadgeCheck size={22} />
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--foreground)]">4.9/5</p>
              <p className="text-sm text-[var(--muted)]">Based on customer feedback</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`${testimonial.name}-${testimonial.city}`} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
