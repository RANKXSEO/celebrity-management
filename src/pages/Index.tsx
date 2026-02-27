import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import ProblemsSection from "@/components/ProblemsSection";
import StatsBar from "@/components/StatsBar";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import BlogPreview from "@/components/BlogPreview";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhoWeServeSection />
      <ProblemsSection />
      <StatsBar />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBanner />
      <BlogPreview />
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingCta />
    </main>
  );
};

export default Index;
