import { Link } from "react-router-dom";
import SmartLink from "@/components/SmartLink";

const pillars = [
  {
    h3: "Website Takedown Service for Permanent Source-Level Removal",
    body: "Suppression alone won't end the problem if the source URL keeps republishing. Our website takedown service pursues defamation, DMCA, GDPR, and policy-based removals directly with publishers, hosts, and registrars — eliminating the URL at the source so it can never resurface in Google, Bing, or AI search.",
    link: "/services/website-takedown-service",
    cta: "Explore the website takedown service",
  },
  {
    h3: "Negative Search Result Suppression on Google",
    body: "Old tabloid coverage and decade-old controversies that still rank for your name get pushed off page one with high-authority owned, earned, and editorial assets. 94% of campaigns achieve material page-one change within 90 days.",
    link: "/services/negative-search-results",
    cta: "How Google suppression works",
  },
  {
    h3: "Mugshot Removal from Mugshots.com and Aggregators",
    body: "Mugshot publishing sites and arrest-record aggregators monetise public-records data with no regard for whether charges were dismissed or expunged. We remove the listing at the source — across all 40+ mirror networks — not just the Google cache.",
    link: "/services/mugshot-removal",
    cta: "See the mugshot removal process",
  },
  {
    h3: "Wikipedia Page Management for Public Figures",
    body: "Wikipedia feeds Google Knowledge Panels, ChatGPT, Gemini, and Perplexity. A vandalised or biased page poisons every downstream answer. Our policy-compliant editors fix the page properly and monitor it for ongoing accuracy.",
    link: "/services/wikipedia-for-celebrities",
    cta: "Wikipedia for celebrities",
  },
  {
    h3: "AI Search Reputation Management (GEO)",
    body: "Generative Engine Optimisation reshapes the source material that ChatGPT, Gemini, Perplexity, and Copilot draw from when answering questions about you. There is no 'page two' in AI search — the first paragraph is everything.",
    link: "/services/ai-search-reputation",
    cta: "Fix what AI says about you",
  },
  {
    h3: "24/7 Celebrity Crisis Management",
    body: "Scandals, viral pile-ons, leaked content, and false allegations are won or lost in the first 48 hours. Our crisis line is staffed every hour of every day — strategy in hand within two to four hours of the first call.",
    link: "/services/celebrity-crisis-management",
    cta: "Crisis management details",
  },
];

const TopicalAuthoritySection = () => {
  return (
    <section
      id="topical-authority"
      className="py-[clamp(64px,8vw,108px)] bg-background"
      aria-label="Celebrity reputation management expertise and topical authority"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-[760px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2.5 mb-4" aria-hidden="true">
            <div className="w-6 h-px bg-gold" />
            <span className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold">Specialist Expertise</span>
            <div className="w-6 h-px bg-gold" />
          </div>
          <h2 className="font-display text-[clamp(1.625rem,2.8vw,2.5rem)] tracking-tight mb-4">
            Specialist <em className="text-gold italic">Celebrity Reputation Management</em> Across Every Surface
          </h2>
          <p className="text-muted-foreground text-[17px] leading-relaxed">
            We cover the full reputation stack — from a source-level <SmartLink to="/services/website-takedown-service" className="text-gold hover:text-gold-light underline" /> and <SmartLink to="/services/google-results-removal" className="text-gold hover:text-gold-light underline" /> to <SmartLink to="/services/ai-search-reputation" className="text-gold hover:text-gold-light underline" /> and <SmartLink to="/services/celebrity-crisis-management" className="text-gold hover:text-gold-light underline" />. Every service is built around one outcome: when someone searches your name, they find the truth.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <article
              key={p.h3}
              className="bg-card border border-border rounded-2xl p-[clamp(20px,2.5vw,28px)] hover:-translate-y-1 hover:shadow-md-custom transition-all"
            >
              <h3 className="font-body text-[16px] font-bold text-primary mb-2 leading-snug">
                <Link to={p.link} className="hover:text-gold transition-colors">{p.h3}</Link>
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-3">{p.body}</p>
              <Link to={p.link} className="text-sm font-semibold text-gold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                {p.cta} →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 bg-card border border-border rounded-2xl p-[clamp(22px,3vw,36px)] text-center">
          <h3 className="font-display text-xl font-bold text-primary mb-2">
            Looking for a Specific Reputation Solution?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[680px] mx-auto mb-4">
            Browse every service in our <SmartLink to="/services" className="text-gold hover:text-gold-light underline" />, explore real-world <SmartLink to="/solutions" className="text-gold hover:text-gold-light underline" />, or see who we serve across <SmartLink to="/who-we-serve" className="text-gold hover:text-gold-light underline" />.
          </p>
          <Link
            to="/free-consultation"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded text-sm font-bold shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            Get a Free Reputation Audit →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopicalAuthoritySection;
