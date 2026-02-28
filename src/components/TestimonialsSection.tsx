import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "I'd been Googling my name for six years and seeing the same three articles. I'd spoken to two other firms who both said it would take a year. These guys had two of those articles off page one in under 60 days. The third took about four months. I should have called them first.",
    avatar: "A",
    name: "Grammy-nominated recording artist",
    role: "Music industry — 2024 campaign",
    result: "3 negative articles cleared from page one",
  },
  {
    quote: "Something happened on a Friday night and by Saturday morning it was everywhere. I called their crisis line at 11pm and someone actually picked up. By 9am we had a plan — press statement, legal letters drafted, social media strategy. I don't know what I would have done without them.",
    avatar: "B",
    name: "Professional athlete — Hall of Fame inductee",
    role: "Sports — 2023 crisis engagement",
    result: "Story contained within 48 hours",
  },
  {
    quote: "My Wikipedia page had been wrong for months. Someone had added things that were flatly untrue, and because it's Wikipedia, Google was repeating the same errors in the Knowledge Panel. They fixed the page properly, explained why it kept getting vandalised, and set up monitoring so it stays correct.",
    avatar: "C",
    name: "Emmy Award-winning actor",
    role: "Television — 2024 Wikipedia engagement",
    result: "Wikipedia corrected, monitoring active",
  },
  {
    quote: "I asked ChatGPT about myself and the answer was devastating — leading with a controversy from 2019 that had been fully resolved. They explained that AI pulls from whatever dominates the web, and within a few months the AI's answer actually changed. I hadn't even known that was possible.",
    avatar: "D",
    name: "Bestselling author and media personality",
    role: "Publishing — 2025 GEO engagement",
    result: "AI search answers corrected",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-[clamp(64px,8vw,108px)] bg-card" aria-label="Client results and testimonials">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-[520px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2.5 mb-4" aria-hidden="true">
            <div className="w-6 h-px bg-gold" />
            <span className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold">Client Outcomes</span>
            <div className="w-6 h-px bg-gold" />
          </div>
          <h2 className="font-display text-[clamp(1.625rem,2.8vw,2.5rem)] tracking-tight mb-3">
            Celebrity Reputation Management <em className="text-gold italic">Results</em>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Client identities are protected. These are real outcomes from real engagements — shared with permission and anonymised at each client's request.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-background border border-border rounded-2xl p-[clamp(20px,2.8vw,28px)] hover:-translate-y-1 hover:shadow-md-custom transition-all flex flex-col"
            >
              <div className="bg-gold/10 border border-gold/20 rounded-lg px-3 py-1.5 mb-4 inline-flex self-start">
                <span className="text-[10px] font-bold text-gold tracking-[0.05em] uppercase">{t.result}</span>
              </div>

              <blockquote className="font-display text-[15px] italic leading-relaxed text-foreground mb-4 flex-1">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center text-gold-light font-display text-base font-bold flex-shrink-0" aria-hidden="true">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-primary leading-tight">{t.name}</div>
                  <div className="text-[11px] text-ink-muted mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm mb-3">Want to know what we could do in your situation?</p>
          <Link
            to="/free-consultation"
            className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded text-sm font-bold shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            Request a Free Reputation Audit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
