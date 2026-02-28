import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  { q: "What does celebrity reputation management actually involve?", a: "In short: controlling what shows up when someone searches your name. That means suppressing negative Google results, getting defamatory or outdated content removed, managing your Wikipedia page, fixing your Knowledge Panel, running crisis response when something breaks, and — more and more — shaping what AI tools like ChatGPT and Gemini say about you. The end goal is simple: search results that are accurate, current, and fair." },
  { q: "How long does it realistically take to fix negative search results?", a: "It depends on how many negative sources there are and how much authority they've built up. In most cases, we see initial ranking movement within 30 days. Material page-one changes typically happen by the 60-day mark. A full first-page transformation — where you control the majority of what shows up — usually takes 90 to 180 days. Content that qualifies for outright removal (defamatory, privacy-violating, or policy-breaching) can sometimes be resolved faster. We send monthly SERP tracking reports so there's never any guesswork about progress." },
  { q: "What does this actually cost?", a: "Retainers run from $3,500 to $20,000 a month. The range depends on how many negative results you're dealing with, how entrenched they are, and which services you need. Crisis work costs more because it requires round-the-clock availability. The audit is free. You get a detailed proposal with line-item pricing before anything starts. No surprise invoices, no scope creep." },
  { q: "Will anyone find out I hired a reputation management firm?", a: "No. We sign a mutual NDA before any real conversation starts. There's no public client list. We don't enter industry awards that require naming people. Every team member is under confidentiality agreements. In fifteen years, we've never had a client identified without their explicit, prior consent. That's not a marketing claim — it's a track record." },
  { q: "Can negative content actually be permanently removed from Google?", a: "Some of it can, and some of it can't — and we'll be straight with you about which category each piece falls into before charging a penny. Content that is defamatory, violates privacy, breaches copyright, or breaks Google's content policies can often be permanently removed through legal channels, DMCA filings, or platform reporting. Factually accurate content that's simply unflattering usually can't be deleted, but it can be suppressed to page two and beyond. Fewer than 6% of searchers ever go past page one." },
  { q: "What happens if a crisis breaks at midnight on a Saturday?", a: "You call us. Someone picks up. That's not a tagline — it's a staffing decision. We begin assessment within the hour and usually have a written strategy within two to four hours. The first 48 hours after a story breaks are when the narrative gets set. That's why we staff for immediate response, not next-business-day availability." },
  { q: "Can you control what ChatGPT and other AI tools say about me?", a: "Yes, to a meaningful degree. AI models like ChatGPT, Gemini, Perplexity, and Copilot generate their answers based on the content that exists across the web. If your web presence is dominated by negative coverage, the AI's summary of you will reflect that. Our generative engine optimisation (GEO) service shapes the source material these models draw from — improving Wikipedia accuracy, building authoritative positive content, and correcting factual errors across the web. As models update their training data and retrieval sources, the answers change." },
  { q: "How is this different from PR?", a: "PR manages media relationships and shapes what journalists write today. Reputation management — ORM — controls what appears in search engines, on Wikipedia, in AI answers, and in Knowledge Panels, often for years. PR shapes the news cycle. ORM shapes the permanent record. We work alongside PR teams all the time because the two are complementary, but they solve different problems." },
  { q: "Can I just get monitoring without a full suppression campaign?", a: "Absolutely. Our reputation protection service provides 24/7 web monitoring, early-warning alerts, and rapid-response capability without running a full content campaign. It's a good fit for public figures who have a clean search presence today but want to make sure they're protected if something surfaces down the road. Catching a problem early costs a fraction of what it takes to fix one that's been ranking for months." },
  { q: "How do you handle Wikipedia pages for public figures?", a: "Wikipedia has strict editorial policies around neutrality, notability, and reliable sourcing — and we work within those rules, never against them. Our team includes editors with years of Wikipedia-specific experience who understand what content will hold up under community review and what won't. We create new pages for notable figures, correct factual errors on existing pages, remove unsourced or defamatory claims, and run ongoing monitoring for vandalism or biased editing. Every edit we make is policy-compliant and designed to be permanent." },
  { q: "Do you work with clients in the UK and internationally?", a: "Yes. We work with public figures based in the United States, United Kingdom, and internationally. Google reputation management is inherently global — search results don't respect borders. We have experience navigating UK-specific considerations including the right to be forgotten under UK GDPR, English defamation law, and the particular media landscape involving outlets like the Daily Mail, The Sun, and the BBC. Our crisis team covers all time zones." },
  { q: "What platforms and sites can you remove content from?", a: "We pursue content removal across all major platforms including Reddit, TikTok, Instagram, X (Twitter), YouTube, Facebook, gossip blogs, AWDTSG listings, Glassdoor, news outlets, and personal attack sites. Success depends on the specific platform's policies and the nature of the content — defamatory, privacy-violating, and policy-breaching material has the highest removal success rate. For content that can't be removed, we pivot to suppression strategies." },
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
              <p className="text-sm text-primary-foreground/35 leading-relaxed mb-4">
                If something is happening right now, skip the form. Call the crisis line — someone picks up, day or night.
              </p>
              <a href="tel:+18005550199" className="font-display text-2xl font-bold text-gold-light block">
                1-800-555-0199
              </a>
              <div className="text-[9px] text-primary-foreground/20 mt-1 tracking-[0.04em]">Typical response: under 15 minutes</div>
              <Link
                to="/free-consultation"
                className="flex justify-center items-center w-full bg-gold text-primary-foreground py-3 rounded font-bold mt-5 hover:bg-gold-light transition-colors"
              >
                Free Reputation Audit
              </Link>

              <div className="mt-5 pt-4 border-t border-primary-foreground/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-[11px] text-primary-foreground/25">
                  <span className="text-gold">✓</span> 500+ campaigns delivered
                </div>
                <div className="flex items-center gap-2 text-[11px] text-primary-foreground/25">
                  <span className="text-gold">✓</span> 94% page-one clearance rate
                </div>
                <div className="flex items-center gap-2 text-[11px] text-primary-foreground/25">
                  <span className="text-gold">✓</span> 15+ years serving public figures
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
                Honest answers based on fifteen years of doing this work. No jargon, no hedging, no sales pitch.
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
