import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import HubIntro, { faqJsonLd } from "@/components/HubIntro";
import HubCrossLinks from "@/components/HubCrossLinks";
import { solutionPages } from "@/data/solutionPages";
import usePageSEO, { BASE_URL } from "@/hooks/usePageSEO";
import { useMemo } from "react";

const HUB_FAQS = [
  { q: "What kinds of reputation problems can you actually solve?", a: "We handle six well-defined problem categories — cancel-culture recovery, defamation and fake-news removal, leaked or non-consensual content, old arrest records, paparazzi / tabloid legacy coverage, and scandal recovery. Each has its own [dedicated solution page](/solutions) with our exact framework." },
  { q: "Can content actually be removed from Google — or only suppressed?", a: "Both, depending on the situation. Removal is preferred where a legal or platform-policy basis exists (defamation judgment, copyright, non-consensual imagery, terms-of-service violation). Where removal isn't available, [suppression](/services/negative-search-results) reliably pushes content off page one within 60–90 days." },
  { q: "How fast can you respond to an active crisis?", a: "Our 24/7 crisis desk has a 60-minute SLA and is staffed by senior strategists, not a call centre. First-hour actions typically include evidence preservation, velocity analysis, and platform-report / legal triage." },
  { q: "Do you work with lawyers on defamation cases?", a: "Yes — regularly. Our [defamation and fake-news removal](/solutions/defamation-fake-news-removal) work often runs in parallel with outside counsel, handling the platform-side removal and search-suppression track while lawyers pursue takedowns and damages." },
  { q: "How much does a solution engagement cost?", a: "Retainers scale with surface coverage, crisis SLA, and campaign length. See our [detailed cost breakdown](/blog/celebrity-reputation-management-cost) or request a written quote after the free reputation audit." },
];

const HUB_INTRO = `Reputation problems come in patterns — and every pattern has a proven playbook. Whether you're facing a coordinated cancel campaign, a defamatory piece that outranks your own name, a leaked file circulating on aggregator sites, an old arrest record that won't age off Google, or the multi-year tail of tabloid coverage, this hub maps every problem type we handle to the exact solution framework we deploy.

Each [solution page](/solutions) walks through the specific mechanics — how we assess damage, what we remove versus suppress, realistic timelines, and what success looks like. Not sure which one fits? A free [reputation audit](/free-consultation) will tell you which solution — if any — actually applies to your situation, before you commit to anything.`;


const SolutionsHub = () => {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "name": "Reputation Solutions by Problem", "url": `${BASE_URL}/solutions`, "isPartOf": { "@id": `${BASE_URL}/#website` } },
      {
        "@type": "ItemList",
        "name": "Reputation Problems We Solve",
        "itemListElement": solutionPages.map((s, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `${BASE_URL}/solutions/${s.slug}`,
          "name": s.h1,
        })),
      },
      { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL }, { "@type": "ListItem", "position": 2, "name": "Solutions", "item": `${BASE_URL}/solutions` }] },
      faqJsonLd(HUB_FAQS),
    ],
  }), []);

  usePageSEO({
    title: "Reputation Solutions: Cancel Culture, Defamation & More (2026)",
    description: `${solutionPages.length} proven solutions for celebrity reputation problems: cancel culture recovery, defamation removal, tabloid suppression, leaked content, scandal recovery. Rated 4.76/5.`,
    jsonLd,
  });
  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-primary-foreground font-bold tracking-tight mb-4">
            Reputation <em className="text-gold-light italic">Solutions</em> by Problem
          </h1>
          <p className="text-primary-foreground/85 text-lg leading-relaxed">
            Whatever your reputation challenge — from <Link to="/solutions/cancel-culture-reputation-repair" className="text-gold-light hover:underline">cancel culture recovery</Link> to <Link to="/solutions/leaked-content-removal" className="text-gold-light hover:underline">leaked content removal</Link> — we have a proven solution.
          </p>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <HubIntro intro={HUB_INTRO} faqs={HUB_FAQS} stats={[
            { num: "6", label: "Solution frameworks" },
            { num: "94%", label: "Page-one clearance" },
            { num: "60 min", label: "Crisis SLA" },
            { num: "4.76/5", label: "Client rating" },
          ]} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutionPages.map((sol, i) => (
              <motion.article key={sol.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/solutions/${sol.slug}`} className="block bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md-custom transition-all group h-full">
                  <div className="text-3xl mb-3">{sol.icon}</div>
                  <h2 className="font-body text-[16px] font-bold text-primary mb-2 group-hover:text-gold transition-colors">{sol.h1}</h2>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">{sol.heroDesc.slice(0, 120)}...</p>
                  <span className="text-sm font-semibold text-gold">Learn more →</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SolutionsHub;
