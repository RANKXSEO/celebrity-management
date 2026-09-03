import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { num: "500+", value: 500, label: "Celebrity Campaigns" },
  { num: "15+", value: 15, label: "Years in the Industry" },
  { num: "94%", value: 94, label: "Page-One Results Cleared" },
  { num: "< 48hr", value: 48, label: "Crisis Response Window" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => {
  return (
    <section
      className="relative bg-primary overflow-hidden pt-[70px]"
      aria-label="Hero"
    >
      {/* Lamp-glow, no gradient wash */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[22rem] left-1/2 -translate-x-1/3 w-[46rem] h-[46rem] rounded-full bg-[radial-gradient(circle,hsl(var(--gold)/0.10)_0%,transparent_65%)] animate-float-slow" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-gold/10 hidden lg:block" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-x border-primary-foreground/10">
          <div className="grid lg:grid-cols-12 gap-x-10">
            {/* Statement column */}
            <div className="lg:col-span-7 px-5 sm:px-8 lg:px-10 pt-14 pb-10 lg:pt-24 lg:pb-16">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease }}
                className="label-rule text-gold-light mb-9"
              >
                500+ Public Figures Protected · Est. 2009
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.9, ease }}
                className="font-display text-primary-foreground font-light text-[clamp(2.9rem,6.4vw,5.6rem)] leading-[0.94] tracking-[-0.02em]"
              >
                Celebrity Reputation Management
                <span className="block mt-3 italic font-normal text-gold-light">
                  for Public Figures.
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.8, ease }}
                className="h-px bg-gold/40 my-9 animate-rule-draw"
              />

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease }}
                className="text-[clamp(1rem,1.4vw,1.125rem)] text-primary-foreground/70 leading-[1.8] max-w-[38rem]"
              >
                One bad headline shouldn't define a legacy. We work exclusively with
                celebrities, athletes, and public figures to take back control of Google,
                Wikipedia, social media, and AI search results — so that when someone looks
                you up, they find the truth, not a tabloid narrative from five years ago.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.8, ease }}
                className="mt-11 flex flex-col sm:flex-row sm:items-center gap-7"
              >
                <Link
                  to="/free-consultation"
                  className="group inline-flex items-center justify-center gap-3 bg-gold text-primary px-9 py-4 text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-gold-light transition-colors"
                >
                  Get a Free Reputation Audit
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </Link>

                <div>
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-primary-foreground/45 mb-1.5">
                    24/7 Crisis Line
                  </span>
                  <a
                    href="tel:+16462224346"
                    className="font-display text-2xl text-primary-foreground border-b border-gold/40 hover:border-gold transition-colors"
                  >
                    (646) 222-4346
                  </a>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="mt-8 text-[10px] uppercase tracking-[0.2em] text-primary-foreground/40"
              >
                Free · Confidential · NDA available · Response within 2 hours
              </motion.p>
            </div>

            {/* Ledger column */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9, ease }}
              className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 border-t lg:border-t-0 lg:border-l border-primary-foreground/10"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`px-5 sm:px-8 lg:px-10 py-8 lg:py-9 ${
                    i % 2 === 0 ? "border-r lg:border-r-0" : ""
                  } ${i > 1 ? "border-t" : "lg:border-t"} ${
                    i === 1 ? "lg:border-t" : ""
                  } border-primary-foreground/10 flex lg:items-baseline lg:justify-between flex-col lg:flex-row gap-1.5`}
                >
                  <dd className="font-display text-[clamp(1.9rem,3vw,2.6rem)] font-light italic text-gold-light leading-none">
                    <data value={stat.value}>{stat.num}</data>
                  </dd>
                  <dt className="text-[9px] uppercase tracking-[0.24em] text-primary-foreground/50 lg:text-right lg:max-w-[9rem]">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
