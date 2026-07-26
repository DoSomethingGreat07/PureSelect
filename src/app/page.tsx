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
      <main className="pt-30 sm:pt-32">
        <HeroSection />
        <TrustMarquee />
        <StorySection />
        <BrandMetricsSection />
        <ProductPortfolio />
        <BusinessModelSection />
        <TestimonialsSection />
        <RecipeSection />
        <EnquirySection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
