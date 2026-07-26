import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export function EnquirySection() {
  return (
    <section id="enquiry" className="full-bleed-section section-anchor section-spacing section-lilac-warm">
      <Container>
        <div className="card-surface p-5 sm:p-6 lg:p-6">
          <SectionHeading
            eyebrow="Business Enquiry"
            title="Let&apos;s work together"
            description="Looking for bulk quantities, recurring supply, retail partnerships, or institutional procurement? Share your requirement and our team will get in touch."
          />
          <EnquiryForm />
        </div>
      </Container>
    </section>
  );
}
