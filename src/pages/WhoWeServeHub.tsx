import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import HubIntro, { faqJsonLd } from "@/components/HubIntro";
import { audiencePages } from "@/data/audiencePages";
import usePageSEO, { BASE_URL } from "@/hooks/usePageSEO";
import { useMemo } from "react";

const HUB_FAQS = [
  { q: "Who exactly do you work with?", a: "Public figures across seven core audiences: [actors and entertainers](/who-we-serve/actors-entertainers), [musicians and recording artists](/who-we-serve/musicians-artists), [professional athletes](/who-we-serve/athletes-sports-stars), [influencers and creators](/who-we-serve/influencers-content-creators), [CEOs and executives](/who-we-serve/executives-ceos), [politicians and public officials](/who-we-serve/politicians-public-officials), and [reality TV personalities](/who-we-serve/reality-tv-personalities). Each has a dedicated page with the specific reputation threats we solve for that industry." },
  { q: "Why hire an industry-specialised firm instead of a general PR agency?", a: "Reputation surfaces (Google, Wikipedia, Knowledge Panel, AI assistants) behave differently across industries — a musician's Wikipedia is edited by different communities than a Fortune 500 CEO's, and a reality star's produced-narrative problem is nothing like an athlete's endorsement-diligence problem. Specialised playbooks produce measurably better outcomes than generalist ones." },
  { q: "Do you work internationally?", a: "Yes. Most engagements involve English-language search and Wikipedia, but we work across US, UK, EU, and APAC markets and coordinate with local counsel where jurisdiction-specific removal rights (right to be forgotten, GDPR erasure, etc.) apply." },
  { q: "Will my industry peers or team find out?", a: "Only if you want them to. Every engagement is covered by mutual NDA and we routinely work directly with the client while liaising with legal counsel or a designated representative." },
  { q: "How do I know which audience page applies to me?", a: "Pick the one closest to your primary public identity. Most engagements touch multiple categories (a musician who is also an entrepreneur, an athlete who is also an influencer) — your audit will identify all relevant surfaces regardless of which page you start from." },
];

const HUB_INTRO = `The reputation problem an [actor](/who-we-serve/actors-entertainers) faces is not the reputation problem a [CEO](/who-we-serve/executives-ceos) faces — and treating them the same is the single most common reason a generalist agency fails a celebrity client. Casting directors, brand-partnership diligence teams, board members, opposition researchers, and reality-TV audiences all consume search and AI-assistant results differently, and each demands a different defensive strategy.

We serve seven industry-specialised audiences with playbooks refined over 15+ years and 500+ engagements. Every audience page below covers the specific threats that category faces, the exact services we deploy, an anonymised client case study, and answers to the questions we hear most often from that industry.`;


const WhoWeServeHub = () => {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "name": "Who We Serve — Celebrity Reputation Management by Industry", "url": `${BASE_URL}/who-we-serve`, "isPartOf": { "@id": `${BASE_URL}/#website` } },
      {
        "@type": "ItemList",
        "name": "Industries We Serve",
        "itemListElement": audiencePages.map((a, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `${BASE_URL}/who-we-serve/${a.slug}`,
          "name": a.h1,
        })),
      },
      { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL }, { "@type": "ListItem", "position": 2, "name": "Who We Serve", "item": `${BASE_URL}/who-we-serve` }] },
      faqJsonLd(HUB_FAQS),
    ],
  }), []);

  usePageSEO({
    title: "Who We Serve: Actors, Athletes, Musicians & Execs (2026)",
    description: `Reputation management for ${audiencePages.length} industries — actors, musicians, athletes, influencers, CEOs, politicians, and reality TV. Trusted by 500+ public figures since 2009.`,
    jsonLd,
  });
  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-primary-foreground font-bold tracking-tight mb-4">
            Reputation Management for <em className="text-gold-light italic">Every</em> Public Figure
          </h1>
          <p className="text-primary-foreground/85 text-lg leading-relaxed">
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
