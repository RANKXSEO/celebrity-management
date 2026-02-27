import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { audiencePages } from "@/data/audiencePages";

const AudiencePage = () => {
  const { slug } = useParams();
  const page = audiencePages.find((p) => p.slug === slug);

  if (!page) return <PageLayout><div className="pt-32 pb-20 text-center"><h1 className="font-display text-3xl">Page not found</h1><Link to="/who-we-serve" className="text-gold mt-4 inline-block">← Back to who we serve</Link></div></PageLayout>;

  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/who-we-serve" className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold hover:text-gold-light transition-colors mb-4 inline-block">← Who We Serve</Link>
          <div className="text-4xl mb-4">{page.emoji}</div>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-primary-foreground font-bold tracking-tight mb-4">{page.h1}</h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed mb-8">{page.heroDesc}</p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded text-sm font-bold shadow-gold hover:bg-gold-light transition-all">
              Get a Free Reputation Assessment →
            </Link>
            <a href="tel:+18005550199" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded text-sm font-medium hover:border-gold-light hover:text-gold-light transition-all">
              📞 24/7 Crisis Line
            </a>
          </div>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Challenges */}
          <h2 className="font-display text-2xl font-bold mb-6">The Reputation Challenges You Face</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {page.challenges.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-body text-[15px] font-bold text-foreground mb-1.5">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* How we help */}
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

          {/* Trust signals */}
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

          {/* Testimonial */}
          <div className="bg-primary rounded-2xl p-8 mb-12">
            <div className="font-display text-4xl text-gold/40 mb-2">"</div>
            <blockquote className="font-display text-lg italic text-primary-foreground leading-relaxed mb-4">{page.testimonial.quote}</blockquote>
            <div className="text-sm font-bold text-gold-light">{page.testimonial.name}</div>
            <div className="text-[11px] text-primary-foreground/30 mt-0.5">{page.testimonial.role}</div>
          </div>

          {/* CTA */}
          <div className="bg-card border-2 border-gold/20 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold mb-3">Ready to Protect Your Reputation?</h3>
            <p className="text-muted-foreground mb-5">Every situation is unique. Start with a free, confidential audit — we'll tell you exactly where you stand and what's achievable.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded text-base font-bold shadow-gold hover:bg-gold-light transition-all">
                Get Your Free Reputation Audit →
              </Link>
              <a href="tel:+18005550199" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                or call 1-800-555-0199 (24/7)
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AudiencePage;
