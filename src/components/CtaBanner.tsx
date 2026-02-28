import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <section className="bg-primary py-[clamp(52px,7vw,90px)] relative overflow-hidden" aria-label="Call to action">
      <div
        className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-gold/[0.025] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,146,62,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(196,146,62,0.02) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="relative z-10 text-center max-w-[640px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.08em] uppercase text-gold border border-gold/25 rounded-full px-3 py-1 bg-gold/[0.06] mb-5">
          Limited availability — we keep a small client list
        </div>
        <h2 className="font-display text-[clamp(1.625rem,3vw,2.5rem)] text-primary-foreground font-bold mb-3 tracking-tight">
          The Longer You Wait, <em className="text-gold-light italic">the Harder It Gets.</em>
        </h2>
        <p className="text-primary-foreground/40 text-base leading-relaxed mb-4 max-w-[520px] mx-auto">
          A reputation audit takes about 20 minutes and costs nothing. We'll show you exactly what's ranking, what's fixable, and what a realistic timeline looks like.
        </p>

        <div className="flex items-center justify-center gap-4 text-[11px] text-primary-foreground/25 mb-7 flex-wrap">
          <span>Measurable ranking shifts in 30 days</span>
          <span>NDA before we start talking</span>
          <span>No long-term contracts required</span>
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            to="/free-consultation"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded text-base font-bold shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            Get Your Free Reputation Audit
          </Link>
          <a
            href="tel:+16462224346"
            className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded text-base font-medium hover:border-gold-light hover:text-gold-light transition-all"
          >
            Call Now: (646) 222-4346
          </a>
        </div>
        <p className="text-[11px] text-primary-foreground/20 mt-4 tracking-[0.04em]">
          Confidential · No obligation · Response within 2 hours · NDA available
        </p>
      </div>
    </section>
  );
};

export default CtaBanner;
