import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const ResourcesPage = () => {
  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-primary-foreground font-bold tracking-tight mb-4">
            Celebrity Reputation <em className="text-gold-light italic">Resources</em>
          </h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed">
            Free guides, checklists, and expert insights to help you understand and protect your online reputation. Built from 15+ years and 500+ celebrity campaigns.
          </p>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {[
              {
                to: "/blog/what-is-celebrity-reputation-management",
                icon: "📚",
                title: "The Complete Guide to Celebrity Reputation Management (2026)",
                desc: "Everything you need to know — from how search suppression works to what it costs, how long it takes, and what to look for in an agency. Our most comprehensive resource, updated quarterly.",
                tag: "Cornerstone Guide",
              },
              {
                to: "/blog/first-48-hours-celebrity-crisis",
                icon: "✅",
                title: "The 48-Hour Crisis Checklist",
                desc: "A step-by-step action plan for the first 48 hours after a reputation crisis. What to do, who to call, what to avoid. Save it before you need it — because when you need it, you won't have time to search.",
                tag: "Crisis Guide",
              },
              {
                to: "/blog/celebrity-reputation-management-cost",
                icon: "💰",
                title: "How Much Does Celebrity Reputation Management Cost?",
                desc: "Transparent pricing guidance based on 500+ engagements. What to expect for suppression, crisis management, Wikipedia work, and ongoing monitoring. No vague 'it depends' — real numbers.",
                tag: "Pricing Guide",
              },
              {
                to: "/blog/signs-you-need-reputation-management",
                icon: "⚠️",
                title: "10 Warning Signs You Need a Reputation Manager",
                desc: "Not sure if you need professional help? These ten indicators — from what Google shows to what AI says about you — help you assess whether your reputation requires intervention.",
                tag: "Self-Assessment",
              },
            ].map((item, i) => (
              <motion.div key={item.to} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={item.to} className="block bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md-custom transition-all group h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-gold bg-gold/10 px-2 py-0.5 rounded-full">{item.tag}</span>
                  </div>
                  <h2 className="font-body text-lg font-bold text-foreground group-hover:text-gold transition-colors mb-2">{item.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Topic clusters */}
          <h2 className="font-display text-2xl font-bold mb-6">Browse by Topic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { title: "Crisis Management", links: [
                { to: "/blog/first-48-hours-celebrity-crisis", label: "The first 48 hours after a story breaks" },
                { to: "/blog/surviving-cancel-culture", label: "How to survive a cancel culture attack" },
                { to: "/blog/social-media-crisis-guide", label: "Social media crisis management guide" },
                { to: "/services/celebrity-crisis-management", label: "Our crisis management services →" },
              ]},
              { title: "Google & Search Results", links: [
                { to: "/blog/how-long-suppress-negative-google", label: "How long to suppress negative results" },
                { to: "/blog/google-knowledge-panel-guide", label: "Knowledge Panel complete guide" },
                { to: "/blog/old-tabloid-articles-ranking", label: "Why old tabloid articles keep ranking" },
                { to: "/services/negative-search-results", label: "Our suppression services →" },
              ]},
              { title: "Wikipedia & AI Search", links: [
                { to: "/blog/how-to-get-wikipedia-page", label: "Getting a Wikipedia page" },
                { to: "/blog/what-chatgpt-says-about-you", label: "What does ChatGPT say about you?" },
                { to: "/blog/wikipedia-notability-explained", label: "Wikipedia notability explained" },
                { to: "/services/ai-search-reputation", label: "Our AI search services →" },
              ]},
            ].map((cluster) => (
              <div key={cluster.title} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-body font-bold text-foreground mb-3">{cluster.title}</h3>
                <ul className="space-y-2">
                  {cluster.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-sm text-gold hover:text-gold-light transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl text-primary-foreground font-bold mb-3">Want Personalised Advice?</h3>
            <p className="text-primary-foreground/40 mb-5">Our free reputation audit goes deeper than any guide can. We'll analyse your specific situation and tell you exactly what needs attention.</p>
            <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded text-base font-bold shadow-gold hover:bg-gold-light transition-all">
              Get Your Free Reputation Audit →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResourcesPage;
