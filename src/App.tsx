import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

// Eager-load the homepage for fastest FCP
import Index from "./pages/Index";

// Lazy-load all other routes for smaller initial bundle
const ServicesHub = lazy(() => import("./pages/ServicesHub"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const WhoWeServeHub = lazy(() => import("./pages/WhoWeServeHub"));
const AudiencePage = lazy(() => import("./pages/AudiencePage"));
const SolutionsHub = lazy(() => import("./pages/SolutionsHub"));
const SolutionPage = lazy(() => import("./pages/SolutionPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogHub = lazy(() => import("./pages/BlogHub"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const FreeConsultation = lazy(() => import("./pages/FreeConsultation"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Service pages */}
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            {/* Audience pages */}
            <Route path="/who-we-serve" element={<WhoWeServeHub />} />
            <Route path="/who-we-serve/:slug" element={<AudiencePage />} />
            {/* Solution pages */}
            <Route path="/solutions" element={<SolutionsHub />} />
            <Route path="/solutions/:slug" element={<SolutionPage />} />
            {/* About */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/case-studies" element={<AboutPage />} />
            <Route path="/about/testimonials" element={<AboutPage />} />
            <Route path="/about/ethics-and-process" element={<AboutPage />} />
            {/* Blog */}
            <Route path="/blog" element={<BlogHub />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* Resources */}
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/celebrity-reputation-guide" element={<ResourcesPage />} />
            <Route path="/resources/crisis-management-checklist" element={<ResourcesPage />} />
            <Route path="/resources/faq" element={<ResourcesPage />} />
            {/* Conversion pages */}
            <Route path="/free-consultation" element={<FreeConsultation />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
