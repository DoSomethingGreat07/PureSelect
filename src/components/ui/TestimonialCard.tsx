import { Star } from "lucide-react";
import { Testimonial } from "@/types/testimonial";

export function TestimonialCard({ testimonial }: Readonly<{ testimonial: Testimonial }>) {
  return (
    <article className="card-surface h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(35,48,31,0.14)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-bold text-[var(--foreground)]">
            {testimonial.initials}
          </div>
          <div>
            <h3 className="text-base font-semibold text-[var(--foreground)]">{testimonial.name}</h3>
            <p className="text-sm text-[var(--muted)]">{testimonial.city}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[var(--accent)]">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} size={16} fill="currentColor" strokeWidth={1.8} />
          ))}
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{testimonial.review}</p>
    </article>
  );
}
