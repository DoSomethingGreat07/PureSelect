"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function TestimonialsSection() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollTestimonials = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) return;

    const amount = Math.min(rail.clientWidth * 0.9, 460);
    rail.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth"
    });
  };

  return (
    <section id="reviews" className="full-bleed-section section-spacing section-white">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What our customers say"
            description="Hyderabad families are choosing Pure Select for dependable quality, clean packaging, and everyday grocery staples that feel trustworthy."
          />
          <div className="flex w-full flex-col gap-4 lg:w-auto lg:items-end">
            <div className="card-surface flex w-full max-w-[320px] items-center gap-4 p-5 lg:w-auto">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--foreground)]">
                <BadgeCheck size={22} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--foreground)]">4.9/5</p>
                <p className="text-sm text-[var(--muted)]">Based on Hyderabad customer feedback</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTestimonials("left")}
                className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--foreground)] transition hover:-translate-y-0.5 hover:bg-[var(--cream)]"
                aria-label="Scroll reviews left"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollTestimonials("right")}
                className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--cream)] shadow-[0_14px_28px_rgba(18,53,36,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-soft)]"
                aria-label="Scroll reviews right"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={railRef}
          className="mt-7 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`${testimonial.name}-${testimonial.city}`} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
