import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const ContactPage = () => {
  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-primary-foreground font-bold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed">
            Whether you're facing an active crisis or planning ahead, we're here. Every conversation starts confidentially and without obligation.
          </p>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📞</div>
              <h2 className="font-body text-lg font-bold text-foreground mb-2">24/7 Crisis Line</h2>
              <a href="tel:+18005550199" className="font-display text-2xl font-bold text-gold hover:text-gold-light transition-colors">1-800-555-0199</a>
              <p className="text-[12px] text-muted-foreground mt-2">Answered by senior strategists — not voicemail, not junior staff.</p>
              <p className="text-[12px] text-muted-foreground mt-1">Average response: under 60 seconds.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">✉️</div>
              <h2 className="font-body text-lg font-bold text-foreground mb-2">Email</h2>
              <a href="mailto:hello@celebrity-reputation-management.com" className="text-gold hover:text-gold-light transition-colors text-sm font-medium">hello@celebrity-reputation-management.com</a>
              <p className="text-[12px] text-muted-foreground mt-2">Response within 2 hours during business hours.</p>
              <p className="text-[12px] text-muted-foreground mt-1">All emails are encrypted and NDA-protected.</p>
            </div>
          </div>

          {/* Trust signals */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-12">
            <h3 className="font-display text-lg font-bold mb-4 text-center">What to Expect When You Reach Out</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "🔒", title: "Immediate NDA Protection", desc: "Every conversation is confidential from the first word. We sign mutual NDAs before any details are discussed." },
                { icon: "⚡", title: "Fast Response", desc: "Crisis calls are answered in under 60 seconds. Emails receive a response within 2 hours. No exceptions." },
                { icon: "🎯", title: "Honest Assessment", desc: "We'll tell you exactly what's achievable, what it costs, and how long it takes. No upselling, no vague promises." },
                { icon: "💰", title: "Free Reputation Audit", desc: "Your first consultation includes a complete audit of your Google results, Wikipedia, social media, and AI search answers." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-body text-sm font-bold text-foreground mb-0.5">{item.title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">🇺🇸</div>
              <h3 className="font-body text-sm font-bold text-foreground mb-1">Los Angeles</h3>
              <p className="text-[12px] text-muted-foreground">US headquarters</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">🇬🇧</div>
              <h3 className="font-body text-sm font-bold text-foreground mb-1">London</h3>
              <p className="text-[12px] text-muted-foreground">UK & Europe operations</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-body text-sm font-bold text-foreground mb-1">Global Coverage</h3>
              <p className="text-[12px] text-muted-foreground">Remote teams in every time zone</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl text-primary-foreground font-bold mb-3">Ready for a Free Reputation Audit?</h3>
            <p className="text-primary-foreground/40 mb-5">Fill out our secure form and get a complete analysis of your digital reputation — free, confidential, no obligation.</p>
            <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded text-base font-bold shadow-gold hover:bg-gold-light transition-all">
              Get Your Free Reputation Audit →
            </Link>
          </div>

          {/* Internal links */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/services" className="bg-card border border-border rounded-xl p-4 text-center hover:-translate-y-0.5 transition-all group">
              <h3 className="font-body text-sm font-bold text-foreground group-hover:text-gold transition-colors">Our Services</h3>
              <p className="text-[11px] text-muted-foreground mt-1">View all reputation management services</p>
            </Link>
            <Link to="/solutions" className="bg-card border border-border rounded-xl p-4 text-center hover:-translate-y-0.5 transition-all group">
              <h3 className="font-body text-sm font-bold text-foreground group-hover:text-gold transition-colors">Solutions</h3>
              <p className="text-[11px] text-muted-foreground mt-1">Find solutions for your specific problem</p>
            </Link>
            <Link to="/about" className="bg-card border border-border rounded-xl p-4 text-center hover:-translate-y-0.5 transition-all group">
              <h3 className="font-body text-sm font-bold text-foreground group-hover:text-gold transition-colors">About Us</h3>
              <p className="text-[11px] text-muted-foreground mt-1">Learn about our 15+ year track record</p>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
