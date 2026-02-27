import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { audiencePages } from "@/data/audiencePages";

const WhoWeServeHub = () => {
  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-primary-foreground font-bold tracking-tight mb-4">
            Reputation Management for <em className="text-gold-light italic">Every</em> Public Figure
          </h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed">
            We serve exclusively high-profile individuals. From <Link to="/who-we-serve/actors-entertainers" className="text-gold-light hover:underline">actors and entertainers</Link> to <Link to="/who-we-serve/executives-ceos" className="text-gold-light hover:underline">CEOs and executives</Link> — whatever your industry, we understand the unique reputational threats you face.
          </p>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiencePages.map((aud, i) => (
              <motion.article key={aud.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/who-we-serve/${aud.slug}`} className="block bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md-custom transition-all group h-full">
                  <div className="text-3xl mb-3">{aud.emoji}</div>
                  <h2 className="font-body text-[16px] font-bold text-primary mb-2 group-hover:text-gold transition-colors">{aud.h1}</h2>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">{aud.heroDesc.slice(0, 120)}...</p>
                  <span className="text-sm font-semibold text-gold">See how we help →</span>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold mb-3">Our Services</h3>
              <p className="text-sm text-muted-foreground mb-3">From <Link to="/services/negative-search-results" className="text-gold hover:underline">search result suppression</Link> to <Link to="/services/celebrity-crisis-management" className="text-gold hover:underline">24/7 crisis management</Link>.</p>
              <Link to="/services" className="text-gold font-bold text-sm">View all reputation management services →</Link>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold mb-3">Common Problems</h3>
              <p className="text-sm text-muted-foreground mb-3">Dealing with <Link to="/solutions/cancel-culture-reputation-repair" className="text-gold hover:underline">cancel culture</Link>, <Link to="/solutions/defamation-fake-news-removal" className="text-gold hover:underline">defamation</Link>, or <Link to="/solutions/old-arrest-records-online" className="text-gold hover:underline">old arrest records</Link>?</p>
              <Link to="/solutions" className="text-gold font-bold text-sm">Explore solutions by problem →</Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WhoWeServeHub;
