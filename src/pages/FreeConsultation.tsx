import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import usePageSEO from "@/hooks/usePageSEO";

const FreeConsultation = () => {
  usePageSEO({
    title: "Free Celebrity Reputation Audit | Confidential Assessment",
    description: "Get a free, confidential reputation audit. We'll analyse your Google results, Wikipedia, Knowledge Panel, AI search answers, and social media — with zero obligation. Response within 2 hours.",
  });
  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-primary-foreground font-bold tracking-tight mb-4">
            Get Your Free <em className="text-gold-light italic">Reputation Audit</em>
          </h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed">
            Tell us about your situation. We'll audit your complete digital presence and tell you exactly where things stand — with zero obligation.
          </p>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground mb-6 flex-wrap">
            <span>🔒 NDA-Protected</span>
            <span>⚡ 2-Hour Response</span>
            <span>🏆 500+ Campaigns</span>
            <span>🌍 Global Coverage</span>
          </div>

          <div className="bg-card border border-border rounded-2xl p-[clamp(24px,4vw,40px)] shadow-md-custom">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fc-name" className="block text-sm font-semibold text-primary mb-1.5">Full Name *</label>
                  <input id="fc-name" type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="fc-email" className="block text-sm font-semibold text-primary mb-1.5">Email *</label>
                  <input id="fc-email" type="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fc-phone" className="block text-sm font-semibold text-primary mb-1.5">Phone</label>
                  <input id="fc-phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label htmlFor="fc-industry" className="block text-sm font-semibold text-primary mb-1.5">Industry</label>
                  <select id="fc-industry" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition">
                    <option>Select your industry</option>
                    <option>Entertainment / Acting</option>
                    <option>Music</option>
                    <option>Sports</option>
                    <option>Influencer / Content Creator</option>
                    <option>Business / Executive</option>
                    <option>Politics</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="fc-urgency" className="block text-sm font-semibold text-primary mb-1.5">Urgency</label>
                <select id="fc-urgency" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition">
                  <option>General inquiry</option>
                  <option>Active issue — need help within a week</option>
                  <option>🔥 Crisis — need help today</option>
                </select>
              </div>
              <div>
                <label htmlFor="fc-message" className="block text-sm font-semibold text-primary mb-1.5">Your Situation *</label>
                <textarea id="fc-message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition resize-none" placeholder="Tell us what's happening..." />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="fc-nda" className="mt-1 accent-gold" required />
                <label htmlFor="fc-nda" className="text-[13px] text-muted-foreground">I understand this is confidential and protected by NDA.</label>
              </div>
              <button type="submit" className="w-full bg-gold text-primary-foreground py-3.5 rounded-lg text-base font-bold shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all">
                Submit Free Assessment Request →
              </button>
              <p className="text-center text-[11px] text-muted-foreground">🔒 100% Confidential · Response Within 2 Hours · No Obligation</p>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-2">Prefer to talk? Call the crisis line:</p>
            <a href="tel:+18005550199" className="font-display text-2xl font-bold text-gold hover:text-gold-light transition-colors">1-800-555-0199</a>
            <p className="text-[11px] text-muted-foreground mt-1">Available 24/7</p>
          </div>

          {/* Internal links */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/services" className="bg-card border border-border rounded-xl p-4 text-center hover:-translate-y-0.5 transition-all group">
              <h3 className="font-body text-sm font-bold text-primary group-hover:text-gold transition-colors">Our Services</h3>
              <p className="text-[11px] text-ink-muted mt-1">View all reputation management services</p>
            </Link>
            <Link to="/who-we-serve" className="bg-card border border-border rounded-xl p-4 text-center hover:-translate-y-0.5 transition-all group">
              <h3 className="font-body text-sm font-bold text-primary group-hover:text-gold transition-colors">Who We Serve</h3>
              <p className="text-[11px] text-ink-muted mt-1">Explore by industry</p>
            </Link>
            <Link to="/about" className="bg-card border border-border rounded-xl p-4 text-center hover:-translate-y-0.5 transition-all group">
              <h3 className="font-body text-sm font-bold text-primary group-hover:text-gold transition-colors">About Us</h3>
              <p className="text-[11px] text-ink-muted mt-1">Learn about our track record</p>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FreeConsultation;
