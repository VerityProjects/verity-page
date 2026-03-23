import { PageTransition } from "@/components/PageTransition";
import { SectionTransition } from "@/components/SectionTransition";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MethodologySection from "@/components/MethodologySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <SectionTransition className="section-glow" delay={0.05}>
          <FeaturesSection />
        </SectionTransition>
        <SectionTransition className="section-glow" delay={0.1}>
          <MethodologySection />
        </SectionTransition>
        <SectionTransition className="section-glow" delay={0.15}>
          <CTASection />
        </SectionTransition>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
