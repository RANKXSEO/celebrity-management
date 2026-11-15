import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import { RenderContext, type CapturedSEO } from './RenderContext';
import Index from '../pages/Index';
import ServicesHub from '../pages/ServicesHub';
import ServicePage from '../pages/ServicePage';
import SolutionsHub from '../pages/SolutionsHub';
import SolutionPage from '../pages/SolutionPage';
import WhoWeServeHub from '../pages/WhoWeServeHub';
import AudiencePage from '../pages/AudiencePage';
import AboutPage from '../pages/AboutPage';
import BlogHub from '../pages/BlogHub';
import BlogPost from '../pages/BlogPost';
import ResourcesPage from '../pages/ResourcesPage';
import ContactPage from '../pages/ContactPage';
import FreeConsultation from '../pages/FreeConsultation';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import ReviewsPage from '../pages/ReviewsPage';
import WikipediaPolicy from '../pages/WikipediaPolicy';
import NotFound from '../pages/NotFound';

export function renderPage(path: string) {
  let seo: CapturedSEO = { title: '', description: '' };
  const html = renderToString(<RenderContext.Provider value={value => { seo = value; }}><StaticRouter location={path}><Routes>
    <Route path="/" element={<Index />} />
    <Route path="/services" element={<ServicesHub />} /><Route path="/services/:slug" element={<ServicePage />} />
    <Route path="/solutions" element={<SolutionsHub />} /><Route path="/solutions/:slug" element={<SolutionPage />} />
    <Route path="/who-we-serve" element={<WhoWeServeHub />} /><Route path="/who-we-serve/:slug" element={<AudiencePage />} />
    <Route path="/about/*" element={<AboutPage />} /><Route path="/blog" element={<BlogHub />} /><Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/resources/*" element={<ResourcesPage />} /><Route path="/contact" element={<ContactPage />} />
    <Route path="/free-consultation" element={<FreeConsultation />} /><Route path="/reviews" element={<ReviewsPage />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} /><Route path="/terms-of-service" element={<TermsOfService />} />
    <Route path="/wikipedia-policy" element={<WikipediaPolicy />} /><Route path="*" element={<NotFound />} />
  </Routes></StaticRouter></RenderContext.Provider>);
  return { html, seo };
}