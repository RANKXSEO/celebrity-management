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
import AboutCitationBlock from "@/components/AboutCitationBlock";
import usePageSEO from "@/hooks/usePageSEO";

const Index = () => {
  usePageSEO({
    title: "Celebrity Reputation Management Agency — Rated 4.76/5",
    description: "Specialist ORM for celebrities, athletes and public figures since 2009. Suppress negative Google results, manage Wikipedia, 24/7 crisis line. 94% page-one clearance. Free audit.",
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
      <AboutCitationBlock />
      <Footer />
      <FloatingCta />
    </main>
  );
};

export default Index;
