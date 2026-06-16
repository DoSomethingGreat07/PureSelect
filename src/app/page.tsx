import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { StorySection } from "@/components/sections/StorySection";
import { TelanganaSection } from "@/components/sections/TelanganaSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { BrandMetricsSection } from "@/components/sections/BrandMetricsSection";
import { ProductPortfolio } from "@/components/sections/ProductPortfolio";
import { UsageInspirationStrip } from "@/components/sections/UsageInspirationStrip";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BusinessModelSection } from "@/components/sections/BusinessModelSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { BulkOrdersSection } from "@/components/sections/BulkOrdersSection";
import { BlinkitSection } from "@/components/sections/BlinkitSection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-28">
        <HeroSection />
        <TrustMarquee />
        <StorySection />
        <TelanganaSection />
        <JourneySection />
        <BrandMetricsSection />
        <ProductPortfolio />
        <UsageInspirationStrip />
        <TestimonialsSection />
        <BusinessModelSection />
        <WhyChooseSection />
        <BulkOrdersSection />
        <BlinkitSection />
        <EnquirySection />
        <ContactStrip />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
