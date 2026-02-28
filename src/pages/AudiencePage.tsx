import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ContentRenderer from "@/components/ContentRenderer";
import { audiencePages } from "@/data/audiencePages";
import { servicePages } from "@/data/servicePages";
import { solutionPages } from "@/data/solutionPages";
import usePageSEO, { BASE_URL } from "@/hooks/usePageSEO";

const AudiencePage = () => {
  const { slug } = useParams();
  const page = audiencePages.find((p) => p.slug === slug);

  const jsonLd = useMemo(() => page ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": page.h1,
        "description": page.metaDesc,
        "url": `${BASE_URL}/who-we-serve/${page.slug}`,
        "isPartOf": { "@id": `${BASE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Who We Serve", "item": `${BASE_URL}/who-we-serve` },
          { "@type": "ListItem", "position": 3, "name": page.h1, "item": `${BASE_URL}/who-we-serve/${page.slug}` },
        ],
      },
    ],
  } : undefined, [page]);

  usePageSEO({
    title: page ? `${page.title} | Celebrity Reputation Management Agency` : "Page Not Found",
    description: page?.metaDesc || "",
    jsonLd,
  });

  if (!page) return <PageLayout><div className="pt-32 pb-20 text-center"><h1 className="font-display text-3xl">Page not found</h1><Link to="/who-we-serve" className="text-gold mt-4 inline-block">← Back to who we serve</Link></div></PageLayout>;

  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-gold font-bold">
              <li><Link to="/" className="hover:text-gold-light transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/who-we-serve" className="hover:text-gold-light transition-colors">Who We Serve</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-foreground/50">{page.h1}</li>
            </ol>
          </nav>
          <div className="text-4xl mb-4">{page.emoji}</div>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-primary-foreground font-bold tracking-tight mb-4">{page.h1}</h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed mb-8">{page.heroDesc}</p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded text-sm font-bold shadow-gold hover:bg-gold-light transition-all">
              Get a Free Reputation Assessment →
            </Link>
            <a href="tel:+16462224346" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded text-sm font-medium hover:border-gold-light hover:text-gold-light transition-all">
              📞 24/7 Crisis Line
            </a>
          </div>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-6">The Reputation Challenges You Face</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {page.challenges.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-body text-[15px] font-bold text-foreground mb-1.5">{c.title}</h3>
                <ContentRenderer content={c.desc} className="text-sm text-muted-foreground leading-relaxed" />
              </motion.div>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold mb-4">How We Help</h2>
          <div className="space-y-4 mb-12">
            {page.relevantServices.map((rs) => (
              <div key={rs.slug} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                <div>
                  <h3 className="font-body text-[15px] font-bold text-foreground mb-1">{rs.title}</h3>
                  <Link to={`/services/${rs.slug}`} className="text-sm text-gold hover:text-gold-light transition-colors font-medium">
                    Learn about {rs.anchor} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Cross-link to related blog content */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-12">
            <h3 className="font-display text-lg font-bold mb-3">Recommended Reading</h3>
            <ul className="space-y-2">
              <li><Link to="/blog/what-is-celebrity-reputation-management" className="text-gold hover:text-gold-light transition-colors font-medium text-sm">What is celebrity reputation management? (Complete guide) →</Link></li>
              <li><Link to="/blog/signs-you-need-reputation-management" className="text-gold hover:text-gold-light transition-colors font-medium text-sm">10 warning signs you need a reputation manager →</Link></li>
              <li><Link to="/blog/celebrity-reputation-management-cost" className="text-gold hover:text-gold-light transition-colors font-medium text-sm">How much does celebrity reputation management cost? →</Link></li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 mb-12">
            <h3 className="font-display text-lg font-bold mb-4">Why Clients Trust Us</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { num: "500+", label: "Campaigns completed" },
                { num: "94%", label: "Page-one clearance" },
                { num: "15+ yrs", label: "Industry experience" },
                { num: "24/7", label: "Crisis availability" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-xl font-bold text-gold">{s.num}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 mb-12">
            <div className="font-display text-4xl text-gold/40 mb-2">"</div>
            <blockquote className="font-display text-lg italic text-primary-foreground leading-relaxed mb-4">{page.testimonial.quote}</blockquote>
            <div className="text-sm font-bold text-gold-light">{page.testimonial.name}</div>
            <div className="text-[11px] text-primary-foreground/30 mt-0.5">{page.testimonial.role}</div>
          </div>

          {/* Cross-hub: Other Audiences */}
          <div className="mb-10">
            <h3 className="font-display text-lg font-bold mb-3">We Also Serve</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {audiencePages.filter(a => a.slug !== page.slug).map(aud => (
                <li key={aud.slug}><Link to={`/who-we-serve/${aud.slug}`} className="text-sm text-gold hover:text-gold-light transition-colors font-medium">{aud.emoji} {aud.h1} →</Link></li>
              ))}
            </ul>
          </div>

          {/* Cross-hub: Solutions */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-10">
            <h3 className="font-display text-lg font-bold mb-3">Reputation Solutions by Problem</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {solutionPages.slice(0, 6).map(sol => (
                <li key={sol.slug}><Link to={`/solutions/${sol.slug}`} className="text-sm text-gold hover:text-gold-light transition-colors font-medium">{sol.icon} {sol.h1} →</Link></li>
              ))}
            </ul>
          </div>

          {/* Cross-hub: Key Services */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-10">
            <h3 className="font-display text-lg font-bold mb-3">Our Reputation Management Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {servicePages.slice(0, 6).map(svc => (
                <li key={svc.slug}><Link to={`/services/${svc.slug}`} className="text-sm text-gold hover:text-gold-light transition-colors font-medium">{svc.icon} {svc.h1} →</Link></li>
              ))}
            </ul>
            <Link to="/services" className="text-sm text-gold hover:text-gold-light transition-colors font-bold mt-3 inline-block">View all services →</Link>
          </div>

          <div className="bg-card border-2 border-gold/20 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold mb-3">Ready to Protect Your Reputation?</h3>
            <p className="text-muted-foreground mb-5">Every situation is unique. Start with a <Link to="/free-consultation" className="text-gold hover:underline">free, confidential audit</Link> — we'll tell you exactly where you stand and what's achievable.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded text-base font-bold shadow-gold hover:bg-gold-light transition-all">
                Get Your Free Reputation Audit →
              </Link>
              <a href="tel:+16462224346" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                or call (646) 222-4346 (24/7)
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AudiencePage;
