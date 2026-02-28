import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ContentRenderer from "@/components/ContentRenderer";
import { solutionPages } from "@/data/solutionPages";
import { servicePages } from "@/data/servicePages";
import { audiencePages } from "@/data/audiencePages";
import usePageSEO, { BASE_URL } from "@/hooks/usePageSEO";

const SolutionPage = () => {
  const { slug } = useParams();
  const page = solutionPages.find((p) => p.slug === slug);
  const [openFaq] = useState<number | null>(null);

  const jsonLd = useMemo(() => page ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": page.h1,
        "description": page.metaDesc,
        "url": `${BASE_URL}/solutions/${page.slug}`,
        "isPartOf": { "@id": `${BASE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Solutions", "item": `${BASE_URL}/solutions` },
          { "@type": "ListItem", "position": 3, "name": page.h1, "item": `${BASE_URL}/solutions/${page.slug}` },
        ],
      },
    ],
  } : undefined, [page]);

  usePageSEO({
    title: page ? `${page.title} | Celebrity Reputation Management Agency` : "Solution Not Found",
    description: page?.metaDesc || "",
    jsonLd,
  });

  if (!page) return <PageLayout><div className="pt-32 pb-20 text-center"><h1 className="font-display text-3xl">Page not found</h1><Link to="/solutions" className="text-gold mt-4 inline-block">← Back to solutions</Link></div></PageLayout>;

  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-gold font-bold">
              <li><Link to="/" className="hover:text-gold-light transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/solutions" className="hover:text-gold-light transition-colors">Solutions</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-foreground/50">{page.h1}</li>
            </ol>
          </nav>
          <div className="text-4xl mb-4">{page.icon}</div>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-primary-foreground font-bold tracking-tight mb-4">{page.h1}</h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed mb-8">{page.heroDesc}</p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded text-sm font-bold shadow-gold hover:bg-gold-light transition-all">
              Get Emergency Help Now →
            </Link>
            <a href="tel:+18005550199" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded text-sm font-medium hover:border-gold-light hover:text-gold-light transition-all">
              📞 24/7 Crisis Line
            </a>
          </div>
        </div>
      </section>

      {page.stats && (
        <section className="bg-card border-y border-border">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {page.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-xl sm:text-2xl font-bold text-gold">{s.num}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          {page.sections.map((sec, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] tracking-tight mb-3">{sec.title}</h2>
              <ContentRenderer content={sec.content} className="text-muted-foreground text-base leading-relaxed whitespace-pre-line" />
            </motion.div>
          ))}

          {page.testimonial && (
            <div className="bg-primary rounded-2xl p-8 mb-12">
              <div className="font-display text-4xl text-gold/40 mb-2">"</div>
              <blockquote className="font-display text-lg italic text-primary-foreground leading-relaxed mb-4">{page.testimonial.quote}</blockquote>
              <div className="text-sm font-bold text-gold-light">{page.testimonial.name}</div>
              <div className="text-[11px] text-primary-foreground/30 mt-0.5">{page.testimonial.role}</div>
            </div>
          )}

          <div className="bg-card border-2 border-gold/20 rounded-2xl p-6 mb-12 text-center">
            <h3 className="font-display text-xl font-bold mb-2">Dealing with this right now?</h3>
            <p className="text-sm text-muted-foreground mb-4">Every day without action makes recovery harder. Start with a <Link to="/free-consultation" className="text-gold hover:underline">free, confidential assessment</Link> — we'll tell you exactly what's achievable.</p>
            <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded text-sm font-bold shadow-gold hover:bg-gold-light transition-all">
              Get Your Free Assessment →
            </Link>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 mb-10">
            <h3 className="font-display text-xl font-bold mb-3">Related Services</h3>
            <ul className="space-y-2">
              {page.relatedServices.map((rs) => (
                <li key={rs.slug}><Link to={`/services/${rs.slug}`} className="text-gold hover:text-gold-light transition-colors font-medium">{rs.anchor} →</Link></li>
              ))}
            </ul>
          </div>

          {page.relatedBlog.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-6 mb-10">
              <h3 className="font-display text-xl font-bold mb-3">Further Reading</h3>
              <ul className="space-y-2">
                {page.relatedBlog.map((rb) => (
                  <li key={rb.slug}><Link to={`/blog/${rb.slug}`} className="text-gold hover:text-gold-light transition-colors font-medium">{rb.anchor} →</Link></li>
                ))}
              </ul>
            </div>
          )}

          {/* Cross-hub: Other Solutions */}
          <div className="mb-10">
            <h3 className="font-display text-lg font-bold mb-3">Other Reputation Solutions</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {solutionPages.filter(s => s.slug !== page.slug).map(sol => (
                <li key={sol.slug}><Link to={`/solutions/${sol.slug}`} className="text-sm text-gold hover:text-gold-light transition-colors font-medium">{sol.icon} {sol.h1} →</Link></li>
              ))}
            </ul>
          </div>

          {/* Cross-hub: Services */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-10">
            <h3 className="font-display text-lg font-bold mb-3">Our Reputation Management Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {servicePages.slice(0, 6).map(svc => (
                <li key={svc.slug}><Link to={`/services/${svc.slug}`} className="text-sm text-gold hover:text-gold-light transition-colors font-medium">{svc.icon} {svc.h1} →</Link></li>
              ))}
            </ul>
            <Link to="/services" className="text-sm text-gold hover:text-gold-light transition-colors font-bold mt-3 inline-block">View all services →</Link>
          </div>

          {/* Cross-hub: Audiences */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-10">
            <h3 className="font-display text-lg font-bold mb-3">Who We Serve</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {audiencePages.map(aud => (
                <li key={aud.slug}><Link to={`/who-we-serve/${aud.slug}`} className="text-sm text-gold hover:text-gold-light transition-colors font-medium">{aud.emoji} {aud.h1} →</Link></li>
              ))}
            </ul>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl text-primary-foreground font-bold mb-3">Don't Wait — Every Day Matters</h3>
            <p className="text-primary-foreground/40 mb-5">Get a free, confidential audit. We'll tell you exactly what's achievable and how long it takes.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded text-base font-bold shadow-gold hover:bg-gold-light transition-all">
                Get Your Free Reputation Audit →
              </Link>
              <a href="tel:+18005550199" className="text-sm text-primary-foreground/50 hover:text-gold-light transition-colors">
                or call 1-800-555-0199 (24/7)
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SolutionPage;
