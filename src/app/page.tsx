import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { StorySection } from "@/components/sections/StorySection";
import { BrandMetricsSection } from "@/components/sections/BrandMetricsSection";
import { ProductPortfolio } from "@/components/sections/ProductPortfolio";
import { RecipeSection } from "@/components/sections/RecipeSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BusinessModelSection } from "@/components/sections/BusinessModelSection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-[var(--site-header-height,148px)]">
        <HeroSection />
        <TrustMarquee />
        <StorySection />
        <BrandMetricsSection />
        <ProductPortfolio />
        <BusinessModelSection />
        <RecipeSection />
        <TestimonialsSection />
        <EnquirySection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
