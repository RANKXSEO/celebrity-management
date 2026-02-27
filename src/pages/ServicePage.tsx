import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { servicePages } from "@/data/servicePages";
import usePageSEO, { BASE_URL } from "@/hooks/usePageSEO";

const ServicePage = () => {
  const { slug } = useParams();
  const page = servicePages.find((p) => p.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const jsonLd = useMemo(() => page ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": page.h1,
        "description": page.metaDesc,
        "provider": { "@id": `${BASE_URL}/#organization` },
        "url": `${BASE_URL}/services/${page.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": `${BASE_URL}/services` },
          { "@type": "ListItem", "position": 3, "name": page.h1, "item": `${BASE_URL}/services/${page.slug}` },
        ],
      },
      ...(page.faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": page.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }] : []),
    ],
  } : undefined, [page]);

  usePageSEO({
    title: page ? `${page.title} | Celebrity Reputation Management Agency` : "Service Not Found",
    description: page?.metaDesc || "",
    jsonLd,
  });

  if (!page) return <PageLayout><div className="pt-32 pb-20 text-center"><h1 className="font-display text-3xl">Service not found</h1><Link to="/services" className="text-gold mt-4 inline-block">← Back to all services</Link></div></PageLayout>;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-gold font-bold">
              <li><Link to="/" className="hover:text-gold-light transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/services" className="hover:text-gold-light transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-foreground/50">{page.h1}</li>
            </ol>
          </nav>
          <div className="text-4xl mb-4">{page.icon}</div>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-primary-foreground font-bold tracking-tight mb-4">{page.h1}</h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed mb-8">{page.heroDesc}</p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded text-sm font-bold shadow-gold hover:bg-gold-light transition-all">
              Get Your Free Reputation Audit →
            </Link>
            <a href="tel:+18005550199" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded text-sm font-medium hover:border-gold-light hover:text-gold-light transition-all">
              📞 24/7 Crisis Line
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
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

      {/* Content sections */}
      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          {page.sections.map((sec, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <h2 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] tracking-tight mb-3">{sec.title}</h2>
              <p className="text-muted-foreground text-base leading-relaxed">{sec.content}</p>
            </motion.div>
          ))}

          {/* Process steps */}
          {page.process && (
            <div className="mb-12">
              <h2 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] tracking-tight mb-6">Our Process</h2>
              <div className="space-y-4">
                {page.process.map((step, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                    <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 text-sm font-bold text-gold">{i + 1}</div>
                    <div>
                      <h3 className="font-body text-[15px] font-bold text-foreground mb-1">{step.step}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {page.testimonial && (
            <div className="bg-primary rounded-2xl p-8 mb-12">
              <div className="font-display text-4xl text-gold/40 mb-2">"</div>
              <blockquote className="font-display text-lg italic text-primary-foreground leading-relaxed mb-4">{page.testimonial.quote}</blockquote>
              <div className="text-sm font-bold text-gold-light">{page.testimonial.name}</div>
              <div className="text-[11px] text-primary-foreground/30 mt-0.5">{page.testimonial.role}</div>
            </div>
          )}

          {/* Mid-page CTA */}
          <div className="bg-card border-2 border-gold/20 rounded-2xl p-6 mb-12 text-center">
            <h3 className="font-display text-xl font-bold mb-2">Not sure if this is the right service?</h3>
            <p className="text-sm text-muted-foreground mb-4">Start with a <Link to="/free-consultation" className="text-gold hover:underline">free, confidential reputation audit</Link>. We'll tell you exactly what you need — and what you don't.</p>
            <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded text-sm font-bold shadow-gold hover:bg-gold-light transition-all">
              Get Your Free Audit — No Obligation →
            </Link>
          </div>

          {/* Related services */}
          {page.relatedServices.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-6 mb-10">
              <h3 className="font-display text-xl font-bold mb-3">Related Reputation Management Services</h3>
              <ul className="space-y-2">
                {page.relatedServices.map((rs) => (
                  <li key={rs.slug}>
                    <Link to={`/services/${rs.slug}`} className="text-gold hover:text-gold-light transition-colors font-medium">
                      {rs.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related blog posts */}
          {page.relatedBlog.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-6 mb-10">
              <h3 className="font-display text-xl font-bold mb-3">Expert Guides</h3>
              <ul className="space-y-2">
                {page.relatedBlog.map((rb) => (
                  <li key={rb.slug}>
                    <Link to={`/blog/${rb.slug}`} className="text-gold hover:text-gold-light transition-colors font-medium">
                      {rb.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQ */}
          {page.faqs.length > 0 && (
            <div className="mb-10">
              <h3 className="font-display text-xl font-bold mb-4">Frequently Asked Questions</h3>
              {page.faqs.map((faq, i) => (
                <div key={i} className="border-b border-border">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex items-start justify-between gap-3 py-4 w-full text-left font-body text-[15px] font-semibold text-foreground hover:text-gold transition-colors" aria-expanded={openFaq === i}>
                    {faq.q}
                    <span className={`w-[22px] h-[22px] rounded-full border border-border flex items-center justify-center flex-shrink-0 text-gold text-sm mt-0.5 transition-all ${openFaq === i ? "bg-gold border-gold text-primary-foreground rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden"><p className="text-[15px] text-muted-foreground leading-relaxed pb-4">{faq.a}</p></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="bg-primary rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl text-primary-foreground font-bold mb-3">Ready to Take Control of Your Search Results?</h3>
            <p className="text-primary-foreground/40 mb-5">Get a free, confidential reputation audit. We'll tell you exactly where things stand — with a clear plan to fix them.</p>
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

export default ServicePage;
