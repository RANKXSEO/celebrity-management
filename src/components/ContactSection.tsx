import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section id="contact" className="py-[clamp(64px,8vw,108px)] bg-background" aria-label="Request a free reputation audit">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2.5 mb-4" aria-hidden="true">
            <div className="w-6 h-px bg-gold" />
            <span className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold">Get Started</span>
            <div className="w-6 h-px bg-gold" />
          </div>
          <h2 className="font-display text-[clamp(1.625rem,2.8vw,2.5rem)] tracking-tight mb-3">
            Request Your Free <em className="text-gold italic">Reputation Audit</em>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-[500px] mx-auto">
            Tell us what's going on. Everything you share is treated as confidential — NDA available before we get into any detail.
          </p>
        </header>

        <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground mb-6 flex-wrap">
          <span className="flex items-center gap-1">NDA-protected</span>
          <span className="flex items-center gap-1">Response within 2 hours</span>
          <span className="flex items-center gap-1">500+ campaigns</span>
          <span className="flex items-center gap-1">US, UK & international</span>
        </div>

        <div className="bg-card border border-border rounded-2xl p-[clamp(24px,4vw,40px)] shadow-md-custom">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-primary mb-1.5">Full Name *</label>
                <input id="contact-name" type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-primary mb-1.5">Email *</label>
                <input id="contact-email" type="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition" placeholder="your@email.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-semibold text-primary mb-1.5">Phone</label>
                <input id="contact-phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label htmlFor="contact-industry" className="block text-sm font-semibold text-primary mb-1.5">Industry</label>
                <select id="contact-industry" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition">
                  <option>Select your industry</option>
                  <option>Entertainment / Acting</option>
                  <option>Music</option>
                  <option>Sports</option>
                  <option>Influencer / Content Creator</option>
                  <option>Business / Executive</option>
                  <option>Politics / Public Office</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="contact-urgency" className="block text-sm font-semibold text-primary mb-1.5">How urgent is this?</label>
              <select id="contact-urgency" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition">
                <option>General enquiry — no rush</option>
                <option>Active issue — would like help within a week</option>
                <option>Crisis — need help today</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-primary mb-1.5">What's going on? *</label>
              <textarea id="contact-message" rows={4} required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition resize-none" placeholder="Give us a brief overview of the situation — we'll take it from there..." />
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="contact-nda" className="mt-1 accent-gold" required />
              <label htmlFor="contact-nda" className="text-[13px] text-muted-foreground">
                I understand this conversation is confidential and an NDA is available on request.
              </label>
            </div>
            <button type="submit" className="w-full bg-gold text-primary-foreground py-3.5 rounded-lg text-base font-bold shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all">
              Submit Confidential Assessment Request
            </button>
            <p className="text-center text-[11px] text-muted-foreground">
              100% confidential · NDA available · We respond within 2 hours · No obligation
            </p>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">Prefer to talk? Call the crisis line directly:</p>
          <a href="tel:+18005550199" className="font-display text-2xl font-bold text-gold hover:text-gold-light transition-colors">
            1-800-555-0199
          </a>
          <p className="text-[11px] text-muted-foreground mt-1">Available 24/7 · Typical response: under 15 minutes</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
