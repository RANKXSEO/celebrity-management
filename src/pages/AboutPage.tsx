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
            <h2 className="font-display text-2xl font-bold mb-4">Who the Work Is For</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Public figures, entrepreneurs and businesses face different reputation problems. An actor may need help documenting inaccurate coverage. A founder may need to separate a personal matter from their company's search profile. A business may need to address reviews and the operational concern behind them. The right starting point is the affected information, not a standard package.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our services cover digital PR, search visibility, eligible content removal, privacy and crisis communications. These are separate workstreams: a correction request does not guarantee deletion, an editorial pitch does not guarantee publication, and new coverage does not guarantee a Google ranking. A useful plan makes those limits clear before work begins.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold mb-4">What a Scoped Plan Should Address</h2>
            <div className="space-y-4 mb-8">
              {[
                { title: "Public figures and business leaders", desc: "Public figures, executives and businesses can face overlapping search, privacy and editorial risks. We scope the work around the affected person or organization rather than using one plan for every situation." },
                { title: "Confidentiality and permissions", desc: "Agree what can be shared, who can approve communications and whether an NDA is needed before exchanging sensitive material. No agreement can guarantee that a third-party publisher or public legal filing remains private." },
                { title: "Jurisdiction and platform", desc: "A platform's reporting policy is different from a legal right. Identify the relevant country, publisher and platform for each request, and involve qualified counsel when a legal assessment is needed." },
                { title: "Evidence and reporting", desc: "Record the affected URLs, queries and starting state. Agree a reporting cadence that distinguishes actions taken, responses received and changes actually observed." },
                { title: "Crisis escalation", desc: "Define an approval contact, response hours, backup decision-maker and channels for urgent requests in the engagement terms. Do not assume an around-the-clock response or a fixed turnaround without a written agreement." },
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
                or call (646) 222-4346
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
