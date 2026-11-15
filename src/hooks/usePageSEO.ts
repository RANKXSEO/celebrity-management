import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RenderContext } from '@/seo/RenderContext';
import { pageIdentity, INDEX_ROBOTS } from '@/seo/policy';

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
}

const BASE_URL = "https://celebrity-reputation-management.com";

const usePageSEO = ({ title: suppliedTitle, description: suppliedDescription, canonical, type = "website", jsonLd, noindex = false }: PageSEOProps) => {
  const { pathname } = useLocation();
  const { title, description } = pageIdentity(pathname, suppliedTitle, suppliedDescription);
  const capture = useContext(RenderContext);
  const canonicalUrl = canonical || `${BASE_URL}${pathname}`;
  capture?.({ title, description, canonical: canonicalUrl, type, jsonLd, noindex });

  useEffect(() => {
    // Title
    document.title = title;
    const robots = document.querySelector('meta[name="robots"]');
    robots?.setAttribute('content', noindex ? 'noindex, follow' : INDEX_ROBOTS);

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);

    // OG tags
    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:url", canonicalUrl);
    setMeta("og:type", type);
    setMeta("og:image", `${BASE_URL}/og-image.png`);

    // Twitter
    const setName = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setName("twitter:title", title);
    setName("twitter:description", description);

    // JSON-LD
    const existingScript = document.querySelector('script[data-page-jsonld]');
    if (existingScript) existingScript.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-page-jsonld", "true");
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const pageScript = document.querySelector('script[data-page-jsonld]');
      if (pageScript) pageScript.remove();
    };
  }, [title, description, canonicalUrl, type, jsonLd, noindex]);
};

export default usePageSEO;
export { BASE_URL };
