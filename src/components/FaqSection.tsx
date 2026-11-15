import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  { q: "What does reputation management involve?", a: "It begins with an audit of search results, public profiles and exposed information. The plan separates eligible removal requests, publisher corrections, useful competing content and monitoring. Public figures, executives and businesses may need different combinations of this work." },
  { q: "How long does it take?", a: "There is no universal completion date. Policy reviews depend on eligibility, publishers decide corrections, and rankings depend on the competing results. Ask for milestones and reporting rather than a guaranteed first-page deadline." },
  { q: "How much does it cost?", a: "Scope depends on the affected URLs, content needs and available routes. Request an itemized proposal with deliverables, exclusions and review points. The initial audit is free." },
  { q: "Can accurate negative news be deleted?", a: "Not simply because it is unfavorable. A correction needs evidence; removal needs an applicable policy, legal route or publisher decision. Suppression addresses visibility while the original remains accessible." },
  { q: "Can you control what AI assistants say?", a: "No agency controls a model’s answers. We can document inaccurate claims, assess cited sources, improve official information and request corrections where justified. Answers vary by prompt, platform and retrieval behavior." },
  { q: "How do you work with Wikipedia?", a: "We assess independent sourcing and notability, disclose paid contributions and request evidence-based corrections through Talk pages. Volunteers decide what is accepted. We do not guarantee a page or remove well-sourced criticism." },
  { q: "Does removal from Google delete a webpage?", a: "No. Google delisting concerns search visibility. Source removal changes or deletes content at the publisher or platform. Copies may exist elsewhere and require separate assessment." },
  { q: "Can I use monitoring without a suppression campaign?", a: "Yes. Monitoring records priority queries, new coverage and recurring privacy exposure. It helps identify changes but does not prevent all negative content or guarantee rankings." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-[clamp(64px,8vw,108px)] bg-card" aria-label="Frequently asked questions about celebrity reputation management">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-[clamp(36px,6vw,80px)] items-start">
          <aside>
            <div className="bg-primary rounded-2xl p-[clamp(22px,3vw,32px)] sticky top-[82px]">
              <div className="inline-flex items-center gap-2.5 mb-3" aria-hidden="true">
                <div className="w-6 h-px bg-gold" />
                <span className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold">Available 24/7</span>
              </div>
              <h3 className="font-display text-xl text-primary-foreground font-bold mb-2">Need to talk right now?</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
                If something is happening right now, skip the form. Call the crisis line — someone picks up, day or night.
              </p>
              <a href="tel:+16462224346" className="font-display text-2xl font-bold text-gold-light block">
                (646) 222-4346
              </a>
              <div className="text-[9px] text-primary-foreground/85 mt-1 tracking-[0.04em]">Case-specific response planning</div>
              <Link
                to="/free-consultation"
                className="flex justify-center items-center w-full bg-gold text-primary-foreground py-3 rounded font-bold mt-5 hover:bg-gold-light transition-colors"
              >
                Free Reputation Audit
              </Link>

              <div className="mt-5 pt-4 border-t border-primary-foreground/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-primary-foreground/60">
                  <span className="text-gold">✓</span> Evidence-led assessment
                </div>
                <div className="flex items-center gap-2 text-[11px] text-primary-foreground/60">
                  <span className="text-gold">✓</span> Policy-based removal routes
                </div>
                <div className="flex items-center gap-2 text-[11px] text-primary-foreground/60">
                  <span className="text-gold">✓</span> Clear scope and reporting
                </div>
              </div>
            </div>
          </aside>

          <div>
            <header>
              <div className="inline-flex items-center gap-2.5 mb-3" aria-hidden="true">
                <div className="w-6 h-px bg-gold" />
                <span className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold">Your Questions, Answered</span>
              </div>
              <h2 className="font-display text-[clamp(1.625rem,2.8vw,2.5rem)] tracking-tight mb-3">
                Celebrity Reputation Management: What You Need to Know
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Clear answers about eligibility, scope and limits.
              </p>
            </header>

            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex items-start justify-between gap-3 py-4 w-full text-left font-body text-[15px] font-semibold text-primary hover:text-gold transition-colors leading-snug"
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`w-[22px] h-[22px] rounded-full border border-border flex items-center justify-center flex-shrink-0 text-gold text-sm font-light mt-0.5 transition-all ${
                        openIndex === i ? "bg-gold border-gold text-primary-foreground rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[15px] text-muted-foreground leading-relaxed pb-4">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
