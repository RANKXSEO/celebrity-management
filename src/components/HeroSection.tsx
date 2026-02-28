import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-primary flex flex-col justify-center relative overflow-hidden pt-[70px]" aria-label="Hero">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_88%_68%_at_66%_38%,rgba(196,146,62,0.07)_0%,transparent_64%),linear-gradient(158deg,#050d1a_0%,#0b1d35_45%,#0f2545_100%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(196,146,62,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(196,146,62,0.035) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(196,146,62,0.08)_0%,transparent_64%)] -top-[180px] -right-[180px] animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2.5 bg-gold/10 border border-gold/20 rounded-full px-3.5 py-1 mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-dot-pulse" aria-hidden="true" />
          <span className="text-[11px] tracking-[0.12em] uppercase text-gold-light font-bold">
            500+ Public Figures Protected · Established 2009
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-primary-foreground font-bold text-[clamp(2.75rem,6vw,5rem)] leading-[1.06] tracking-tight max-w-[720px] mb-5"
        >
          Celebrity Reputation Management for Public Figures. <em className="text-gold-light italic">One Bad Headline Shouldn't Define Your Legacy.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-[clamp(1rem,1.5vw,1.125rem)] text-primary-foreground/55 leading-[1.74] max-w-[560px] mb-10"
        >
          We work exclusively with celebrities, athletes, and public figures to take back control of Google, Wikipedia, social media, and AI search results. When someone looks you up, they should find the truth — not a tabloid narrative from five years ago.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center gap-3 flex-wrap mb-5"
        >
          <Link
            to="/free-consultation"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded text-base font-bold shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            Get a Free Reputation Audit
          </Link>
          <a
            href="tel:+18005550199"
            className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded text-base font-medium hover:border-gold-light hover:text-gold-light transition-all"
          >
            24/7 Crisis Line: 1-800-555-0199
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-[11px] text-primary-foreground/25 mb-16 lg:mb-20 tracking-[0.03em]"
        >
          Free · Confidential · NDA available · We respond within 2 hours
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center gap-[clamp(18px,3vw,42px)] flex-wrap pt-[clamp(30px,4vw,50px)] border-t border-primary-foreground/[0.07]"
        >
          {[
            { num: "500+", label: "Celebrity Campaigns" },
            { num: "15+", label: "Years in the Industry" },
            { num: "94%", label: "Page-One Results Cleared" },
            { num: "< 48hr", label: "Crisis Response Window" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-[clamp(18px,3vw,42px)]">
              {i > 0 && <div className="w-px h-[30px] bg-primary-foreground/[0.08] flex-shrink-0 hidden sm:block" aria-hidden="true" />}
              <div className="flex flex-col">
                <span className="font-display text-[clamp(1.375rem,2.2vw,2rem)] font-bold text-gold-light leading-none">
                  {stat.num}
                </span>
                <span className="text-[10px] text-primary-foreground/30 tracking-[0.07em] mt-1 uppercase">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-primary-foreground/20 pointer-events-none" aria-hidden="true">
        <span className="text-[9px] tracking-[0.22em] uppercase">Scroll</span>
        <div className="w-px h-9 bg-gradient-to-b from-gold/40 to-transparent animate-scroll-line" />
      </div>
    </section>
  );
};

export default HeroSection;
