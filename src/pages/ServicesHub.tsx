import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { servicePages } from "@/data/servicePages";
import usePageSEO, { BASE_URL } from "@/hooks/usePageSEO";
import { useMemo } from "react";

const ServicesHub = () => {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "name": "Celebrity Reputation Management Services", "description": "Comprehensive reputation management services for celebrities and public figures. Suppression, removal, crisis management, Wikipedia, AI search.", "url": `${BASE_URL}/services`, "isPartOf": { "@id": `${BASE_URL}/#website` } },
      { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL }, { "@type": "ListItem", "position": 2, "name": "Services", "item": `${BASE_URL}/services` }] },
    ],
  }), []);

  usePageSEO({
    title: "Celebrity Reputation Management Services | Full-Service ORM for Public Figures",
    description: "Comprehensive reputation management services for celebrities: negative result suppression, Google content removal, crisis management, Wikipedia editing, AI search reputation (GEO), and more.",
    jsonLd,
  });
  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-primary-foreground font-bold tracking-tight mb-4">
            Celebrity Reputation Management <em className="text-gold-light italic">Services</em>
          </h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed mb-6">
            Comprehensive reputation management services designed exclusively for celebrities, athletes, and high-profile public figures. From <Link to="/services/negative-search-results" className="text-gold-light hover:underline">negative content suppression</Link> to <Link to="/services/celebrity-crisis-management" className="text-gold-light hover:underline">24/7 crisis management</Link>.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link to="/free-consultation" className="bg-gold text-primary-foreground px-6 py-3 rounded text-sm font-bold shadow-gold hover:bg-gold-light transition-all">
              Get a Free Reputation Assessment →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicePages.map((svc, i) => (
              <motion.article key={svc.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/services/${svc.slug}`} className="block bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md-custom transition-all group h-full">
                  <div className="text-3xl mb-3">{svc.icon}</div>
                  <h2 className="font-body text-[16px] font-bold text-primary mb-2 group-hover:text-gold transition-colors">{svc.title}</h2>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">{svc.heroDesc.slice(0, 120)}...</p>
                  <span className="text-sm font-semibold text-gold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Learn about {svc.slug.replace(/-/g, " ")} →
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Internal links to other hubs */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold mb-3">Who We Serve</h3>
              <p className="text-sm text-muted-foreground mb-3">We serve exclusively high-profile individuals across every industry.</p>
              <Link to="/who-we-serve" className="text-gold font-bold text-sm">Explore reputation management by industry →</Link>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold mb-3">Common Problems We Solve</h3>
              <p className="text-sm text-muted-foreground mb-3">From cancel culture to old arrest records — see solutions for your specific situation.</p>
              <Link to="/solutions" className="text-gold font-bold text-sm">View reputation management solutions →</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesHub;
