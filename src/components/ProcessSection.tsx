import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  { num: "01", title: "Free Reputation Audit", desc: "We run a full scan of your Google results, Knowledge Panel, Wikipedia page, AI search answers, social media sentiment, and news coverage. You'll know exactly where you stand in about 20 minutes — at no cost, no obligation.", cta: true },
  { num: "02", title: "Custom Strategy & Clear Pricing", desc: "No templates. Your situation is specific, so your plan has to be too. We set concrete targets, realistic timelines, and measurable KPIs. You see a clear proposal with transparent pricing before anything starts.", cta: false },
  { num: "03", title: "Execute Across All Channels Simultaneously", desc: "Google suppression, Wikipedia corrections, AI search optimisation, social media defence, legal takedowns — we run these in parallel, not sequentially. Monthly SERP tracking reports show exactly what changed and what's next.", cta: false },
  { num: "04", title: "Monitor, Protect & Maintain", desc: "Once your search results look right, we keep watching. New threats get caught before they build authority. Existing positive results are actively defended. You get alerts, not surprises.", cta: false },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-[clamp(64px,8vw,108px)] bg-background" aria-label="How our process works">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-[520px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2.5 mb-4" aria-hidden="true">
            <div className="w-6 h-px bg-gold" />
            <span className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold">How It Works</span>
            <div className="w-6 h-px bg-gold" />
          </div>
          <h2 className="font-display text-[clamp(1.625rem,2.8vw,2.5rem)] tracking-tight mb-3">
            How Our Reputation Management <em className="text-gold italic">Process Works</em>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We tell you what we find, what it'll take, and what you can expect — before you spend anything.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
          <div className="hidden lg:block absolute top-[31px] left-[12.5%] right-[12.5%] h-px bg-border pointer-events-none" aria-hidden="true" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-3 group"
            >
              <div className="w-[62px] h-[62px] rounded-full bg-card border-2 border-border flex items-center justify-center mx-auto mb-5 font-display text-xl font-bold text-gold shadow-md-custom relative z-10 group-hover:bg-gold group-hover:text-primary-foreground group-hover:border-gold group-hover:shadow-gold transition-all" aria-hidden="true">
                {step.num}
              </div>
              <h3 className="font-body text-[15px] font-bold text-primary mb-1.5">{step.title}</h3>
              <p className="text-[13px] text-ink-muted leading-relaxed mb-2">{step.desc}</p>
              {step.cta && (
                <Link to="/free-consultation" className="text-[12px] font-bold text-gold hover:text-gold-light transition-colors">
                  Start your free audit
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
