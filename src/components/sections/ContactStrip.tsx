import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { formatPhoneHref } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ContactStrip() {
  return (
    <section className="full-bleed-section section-spacing section-green">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-soft)]">Contact Pure Select</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-4xl text-[var(--cream)]">{siteConfig.legalName}</h2>
            <div className="mt-4 space-y-2 text-sm leading-6 text-[rgba(255,250,240,0.8)]">
              <p>{siteConfig.location}</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.website.replace(/^https?:\/\//, "")}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={formatPhoneHref(siteConfig.phone)} variant="light" className="gap-2">
              <PhoneCall size={16} />
              Call Now
            </Button>
            <Button href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" variant="light" className="gap-2">
              <MessageCircle size={16} />
              WhatsApp
            </Button>
            <Button href={`mailto:${siteConfig.email}`} variant="light" className="gap-2">
              <Mail size={16} />
              Email
            </Button>
            <Button href="#enquiry" variant="accent" className="gap-2">
              Bulk Enquiry
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
