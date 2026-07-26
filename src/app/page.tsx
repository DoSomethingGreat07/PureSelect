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
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { BlinkitSection } from "@/components/sections/BlinkitSection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-36 sm:pt-40">
        <HeroSection />
        <TrustMarquee />
        <StorySection />
        <BrandMetricsSection />
        <ProductPortfolio />
        <BusinessModelSection />
        <WhyChooseSection />
        <BlinkitSection />
        <TestimonialsSection />
        <RecipeSection />
        <EnquirySection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
