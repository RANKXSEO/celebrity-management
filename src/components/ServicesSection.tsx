import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  { icon: "🛡️", slug: "negative-search-results", title: "Negative Search Result Removal & Suppression", desc: "Old tabloid articles, mugshots, gossip blogs, and scandal coverage sitting on page one of Google — pushed off permanently with white-hat content strategies. Most campaigns show measurable ranking changes within 30 days.", featured: false },
  { icon: "🗑️", slug: "google-results-removal", title: "Google Content Removal & Takedowns", desc: "DMCA filings, legal demand letters, Google policy violation reports, and direct publisher negotiation. If content qualifies for deletion, we pursue every available channel simultaneously.", featured: false },
  { icon: "⚡", slug: "celebrity-crisis-management", title: "24/7 Celebrity Crisis Management", desc: "Scandals, false accusations, cancel culture pile-ons, leaked content, arrest records — we pick up the phone at 11pm and have a plan in motion by morning. The first 48 hours determine everything.", featured: true },
  { icon: "📖", slug: "wikipedia-for-celebrities", title: "Wikipedia Page Creation, Editing & Monitoring", desc: "Your Wikipedia page feeds directly into Google Knowledge Panels and AI search results. We create new pages, correct inaccuracies, remove unsourced claims, and monitor for vandalism — all within Wikipedia's editorial policies.", featured: false },
  { icon: "🔍", slug: "knowledge-panel-management", title: "Google Knowledge Panel Optimisation", desc: "That information box on the right side of Google is the first thing most people read about you. We claim, verify, and optimise it — correct photo, accurate bio, proper social links, current career details.", featured: false },
  { icon: "🤖", slug: "ai-search-reputation", title: "AI Search Reputation & Generative Engine Optimisation", desc: "ChatGPT, Google Gemini, Perplexity, and Copilot now summarise public figures in a single paragraph. If your web footprint skews negative, so does the AI's answer. We shape the source material these models rely on.", featured: false },
  { icon: "📱", slug: "social-media-reputation", title: "Social Media Reputation Defence", desc: "Real-time sentiment tracking across Instagram, X, TikTok, Reddit, YouTube, and Threads. Coordinated attack detection, toxic content reporting, platform escalation, and positive narrative amplification.", featured: false },
  { icon: "⭐", slug: "review-management", title: "Review & Public Rating Management", desc: "IMDb scores, Google reviews, Rotten Tomatoes ratings, Glassdoor — public ratings influence casting decisions, endorsement deals, and fan perception. We help improve and protect them ethically.", featured: false },
  { icon: "🔐", slug: "reputation-protection", title: "Ongoing Reputation Monitoring & Protection", desc: "24/7 web monitoring, early-warning alerts, and rapid response capability. We catch new threats before they gain traction — because cleaning up a problem costs ten times more than preventing one.", featured: false },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-[clamp(64px,8vw,108px)] bg-background" aria-label="Celebrity reputation management services">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-[640px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2.5 mb-4" aria-hidden="true">
            <div className="w-6 h-px bg-gold" />
            <span className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold">Our Services</span>
            <div className="w-6 h-px bg-gold" />
          </div>
          <h2 className="font-display text-[clamp(1.625rem,2.8vw,2.5rem)] tracking-tight mb-4">
            Celebrity Reputation Management <em className="text-gold italic">Services</em> — Full-Service Online Protection
          </h2>
          <p className="text-muted-foreground text-[17px] leading-relaxed">
            Nine specialised services covering every surface where your reputation lives — from Google search results and Wikipedia to AI-generated summaries and social media platforms.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border border border-border rounded-2xl overflow-hidden shadow-md-custom">
          {services.map((svc, i) => (
            <motion.article
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`p-[clamp(22px,3vw,36px)] relative group transition-colors ${
                svc.featured ? "bg-primary" : "bg-card hover:bg-background"
              }`}
            >
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true" />
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center text-lg mb-3.5 flex-shrink-0 border ${
                  svc.featured
                    ? "bg-gold/[0.12] border-gold/20"
                    : "bg-gold-pale border-gold/15"
                }`}
                aria-hidden="true"
              >
                {svc.icon}
              </div>
              <h3 className={`font-body text-[15px] font-bold mb-1.5 leading-snug ${svc.featured ? "text-primary-foreground" : "text-primary"}`}>
                {svc.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-3.5 ${svc.featured ? "text-primary-foreground/40" : "text-ink-muted"}`}>
                {svc.desc}
              </p>
              <Link to={`/services/${svc.slug}`} className={`text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all ${svc.featured ? "text-gold-light" : "text-gold"}`}>
                Learn more
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm mb-3">Not sure where to start? That's normal — most clients aren't.</p>
          <Link
            to="/free-consultation"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded text-sm font-bold shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            Talk to Us — We'll Figure It Out Together
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
