import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

const BASE_URL = "https://celebrity-reputation-management.com";

const Index = () => {
  const { pathname } = useLocation();

  // Restore homepage meta tags on SPA navigation back to /
  useEffect(() => {
    document.title = "Celebrity Reputation Management Agency | Online Reputation Management for Public Figures";

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", "Specialist online reputation management for celebrities, athletes, and public figures. We suppress negative Google results, manage Wikipedia pages, handle crises 24/7, and control what AI says about you. Free confidential audit. Serving the US, UK, and internationally since 2009.");
    setMeta("property", "og:title", document.title);
    setMeta("property", "og:description", "Specialist online reputation management for celebrities, athletes, and public figures.");
    setMeta("property", "og:url", `${BASE_URL}/`);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:title", document.title);
    setMeta("name", "twitter:description", "Specialist online reputation management for celebrities, athletes, and public figures.");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${BASE_URL}/`);

    // Remove any stale page-level JSON-LD from other pages
    const staleScript = document.querySelector('script[data-page-jsonld]');
    if (staleScript) staleScript.remove();
  }, [pathname]);

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
