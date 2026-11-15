import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import ProblemsSection from "@/components/ProblemsSection";
import TopicalAuthoritySection from "@/components/TopicalAuthoritySection";
import StatsBar from "@/components/StatsBar";
import ProcessSection from "@/components/ProcessSection";
import CtaBanner from "@/components/CtaBanner";
import BlogPreview from "@/components/BlogPreview";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import AboutCitationBlock from "@/components/AboutCitationBlock";
import usePageSEO from "@/hooks/usePageSEO";
import WorkbookLinks from '@/components/WorkbookLinks';

const Index = () => {
  usePageSEO({
    title: "Celebrity Reputation Management Agency | ORM for Public Figures",
    description: "Reputation management for celebrities, executives and businesses. Content removal, search suppression, digital PR and AI search. Confidential audit.",
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
      <TopicalAuthoritySection />
      <StatsBar />
      <ProcessSection />
      <CtaBanner />
      <BlogPreview />
      <FaqSection />
      <ContactSection />
      <WorkbookLinks />
      <AboutCitationBlock />
      <Footer />
      <FloatingCta />
    </main>
  );
};

export default Index;
