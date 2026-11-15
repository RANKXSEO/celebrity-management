import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMemo } from "react";
import PageLayout from "@/components/PageLayout";
import usePageSEO, { BASE_URL } from "@/hooks/usePageSEO";

const AboutPage = () => {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "name": "About Celebrity Reputation Management",
        "url": `${BASE_URL}/about`,
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "mainEntity": { "@id": `${BASE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": "Celebrity Reputation Management",
        "alternateName": "CRM Agency",
        "url": BASE_URL,
        
        "areaServed": ["US", "GB", "EU", "Worldwide"],
        "knowsAbout": [
          "Online Reputation Management",
          "Search Result Suppression",
          "Wikipedia Editing",
          "Crisis Management",
          "Generative Engine Optimization",
          "Knowledge Panel Management",
        ],
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "About", "item": `${BASE_URL}/about` },
      ]},
    ],
  }), []);

  usePageSEO({
    title: "About Celebrity Reputation Management | Our Approach",
    description: "Reputation management and digital PR for public figures, executives and businesses. Our process, limits, disclosure policy and contact information.",
    jsonLd,
  });
  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-primary-foreground font-bold tracking-tight mb-4">
            About Celebrity Reputation <em className="text-gold-light italic">Management</em>
          </h1>
          <p className="text-primary-foreground/85 text-lg leading-relaxed">
            Reputation management and digital PR for celebrities, public figures, executives, entrepreneurs and businesses. Our approach starts with evidence and separates eligible removals from search suppression.
          </p>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold mb-4">Why We Exist</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We founded Celebrity Reputation Management because we saw an industry gap that nobody was filling. General ORM firms were treating celebrity clients the same way they treated local plumbers and dentists — cookie-cutter press releases, templated blog posts, and strategies that hadn't worked since 2015.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Public figures face fundamentally different challenges. Tabloid sites with massive domain authority. Wikipedia pages edited by anonymous volunteers. AI assistants repeating inaccuracies to millions. Cancel culture campaigns that generate hundreds of negative articles in days. These problems require specialised expertise, dedicated resources, and absolute discretion. We built the agency we wished existed when we needed it.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold mb-4">What Makes Us Different</h2>
            <div className="space-y-4 mb-8">
              {[
                { title: "Public figures and business leaders", desc: "Public figures, executives and businesses can face overlapping search, privacy and editorial risks. We scope the work around the affected person or organization rather than using one plan for every situation." },
                { title: "NDA-First Engagements", desc: "We maintain zero public client lists. Every engagement begins with a mutual NDA. Your competitors, the media, and the public will never know you work with us unless you choose to share it. Discretion isn't a feature — it's foundational to how we operate." },
                { title: "Global Coverage", desc: "Google, Wikipedia, social media, AI assistants, international press — your reputation doesn't respect borders, and neither do we. We operate across every relevant platform and jurisdiction, with particular expertise in US, UK, and EU regulatory frameworks." },
                { title: "Measurable Results", desc: "We send monthly SERP tracking reports with screenshots, position data, and trend analysis. You can see exactly what's changing, how fast, and what comes next. No vague promises — data you can verify yourself." },
                { title: "24/7 Crisis Response", desc: "Our crisis line is staffed by senior strategists, not junior staff. When a story breaks at 11pm on a Friday, you get a real expert on the phone within minutes and a written strategy within hours. We've managed crises on every continent and in every time zone." },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-body text-[15px] font-bold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <section className="mb-10">
            <h2 className="font-display text-2xl font-bold mb-4">Evidence and editorial standards</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">A useful reputation plan identifies the exact URLs, the factual concern and the available policy or legal route. Reporting should distinguish work completed from decisions made by Google, publishers and courts. We do not publish client identities without consent or treat illustrative scenarios as proof of an actual campaign.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Our <Link to="/wikipedia-policy" className="text-gold hover:underline">Wikipedia policy</Link> explains disclosure and editorial independence. Read the <Link to="/blog/how-long-does-reputation-management-take" className="text-gold hover:underline">timeline guide</Link> before comparing guarantees or fixed deadlines. For a named specialist or evidence relevant to your project, <Link to="/contact" className="text-gold hover:underline">contact the agency</Link>.</p>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Link to="/services" className="bg-card border border-border rounded-xl p-5 hover:-translate-y-1 transition-all group">
              <h3 className="font-body font-bold text-foreground group-hover:text-gold transition-colors mb-1">Our Services</h3>
              <p className="text-sm text-muted-foreground">Explore our full range of <span className="text-gold">celebrity reputation management services</span></p>
            </Link>
            <Link to="/who-we-serve" className="bg-card border border-border rounded-xl p-5 hover:-translate-y-1 transition-all group">
              <h3 className="font-body font-bold text-foreground group-hover:text-gold transition-colors mb-1">Who We Serve</h3>
              <p className="text-sm text-muted-foreground">Reputation management by <span className="text-gold">industry and profession</span></p>
            </Link>
            <Link to="/blog" className="bg-card border border-border rounded-xl p-5 hover:-translate-y-1 transition-all group">
              <h3 className="font-body font-bold text-foreground group-hover:text-gold transition-colors mb-1">Expert Insights</h3>
              <p className="text-sm text-muted-foreground">Read our <span className="text-gold">celebrity reputation management blog</span></p>
            </Link>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl text-primary-foreground font-bold mb-3">Ready to Work With Us?</h3>
            <p className="text-primary-foreground/75 mb-5">Start with a free, confidential reputation audit. No obligation, no pressure — just honest answers about where you stand.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded text-base font-bold shadow-gold hover:bg-gold-light transition-all">
                Get Your Free Reputation Audit →
              </Link>
              <a href="tel:+16462224346" className="text-sm text-primary-foreground/85 hover:text-gold-light transition-colors">
                or call (646) 222-4346 (24/7)
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
