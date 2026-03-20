import { useEffect } from "react";
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
import usePageSEO from "@/hooks/usePageSEO";

const Index = () => {
  usePageSEO({
    title: "Celebrity Reputation Management Agency | Online Reputation Management for Public Figures",
    description: "Specialist online reputation management for celebrities, athletes, and public figures. We suppress negative Google results, manage Wikipedia pages, handle crises 24/7, and control what AI says about you. Free confidential audit. Serving the US, UK, and internationally since 2009.",
    canonical: "https://celebrity-reputation-management.com/",
  });

  // Remove any stale page-level JSON-LD from other pages
  useEffect(() => {
    const staleScript = document.querySelector('script[data-page-jsonld]');
    if (staleScript) staleScript.remove();
  }, []);

  return (
    <main id="main-content">
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
