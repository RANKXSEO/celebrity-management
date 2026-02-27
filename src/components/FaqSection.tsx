import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  { q: "What exactly does celebrity reputation management involve?", a: "It covers everything that shapes what people find when they search a public figure's name online. That includes suppressing negative Google results, pursuing content removal through legal and platform channels, managing Wikipedia pages, correcting Google Knowledge Panels, responding to crises around the clock, and — increasingly — shaping what AI tools like ChatGPT and Gemini say about you. The goal is straightforward: when someone searches your name, the results should be accurate, current, and fair." },
  { q: "How long does it realistically take to fix negative search results?", a: "It depends on how many negative sources there are and how much authority they've built up. In most cases, we see initial ranking movement within 30 days. Material page-one changes typically happen by the 60-day mark. A full first-page transformation — where you control the majority of what shows up — usually takes 90 to 180 days. Content that qualifies for outright removal (defamatory, privacy-violating, or policy-breaching) can sometimes be resolved faster. We send monthly SERP tracking reports so there's never any guesswork about progress." },
  { q: "What does this actually cost?", a: "Monthly retainers typically range from $3,500 to $20,000 depending on the complexity of the situation, the number of negative results involved, and the scope of services required. Crisis management retainers sit at the higher end because of the 24/7 availability they require. The initial audit is always free, and we provide a detailed proposal with transparent pricing before any engagement starts. We don't do surprise invoices or scope creep." },
  { q: "Will anyone find out I hired a reputation management firm?", a: "No. We sign a mutual NDA before any substantive discussion takes place. We don't maintain a public client list, we don't submit for industry awards that require naming clients, and every team member operates under strict confidentiality agreements. In fifteen years and more than 500 engagements, we have never had a client identified without their explicit, prior consent." },
  { q: "Can negative content actually be permanently removed from Google?", a: "Some of it can, and some of it can't — and we'll be straight with you about which category each piece falls into before charging a penny. Content that is defamatory, violates privacy, breaches copyright, or breaks Google's content policies can often be permanently removed through legal channels, DMCA filings, or platform reporting. Factually accurate content that's simply unflattering usually can't be deleted, but it can be suppressed to page two and beyond. Fewer than 6% of searchers ever go past page one." },
  { q: "What happens if a crisis breaks at midnight on a Saturday?", a: "You call us. Someone picks up. Our crisis team operates 24/7, 365 days a year — that's not a marketing line, it's a staffing commitment. We begin assessment within the first hour and typically have an initial strategy mapped out within two to four hours. The first 48 hours after a story breaks are the most critical window for controlling the narrative, which is why we staff for immediate response rather than next-business-day availability." },
  { q: "Can you control what ChatGPT and other AI tools say about me?", a: "Yes, to a meaningful degree. AI models like ChatGPT, Gemini, Perplexity, and Copilot generate their answers based on the content that exists across the web. If your web presence is dominated by negative coverage, the AI's summary of you will reflect that. Our generative engine optimisation (GEO) service shapes the source material these models draw from — improving Wikipedia accuracy, building authoritative positive content, and correcting factual errors across the web. As models update their training data and retrieval sources, the answers change." },
  { q: "How is reputation management different from PR?", a: "Public relations focuses on managing media relationships and shaping what journalists write today. Reputation management — or ORM — focuses on what appears in search engines, on Wikipedia, in AI-generated answers, and in Knowledge Panels, often for years into the future. PR shapes today's news cycle. ORM shapes the permanent digital record. We regularly work alongside PR teams because the two disciplines complement each other, but they solve fundamentally different problems." },
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

            <div className="flex flex-col" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex items-start justify-between gap-3 py-4 w-full text-left font-body text-[15px] font-semibold text-primary hover:text-gold transition-colors leading-snug"
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span itemProp="name">{faq.q}</span>
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
                    itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                  >
                    <div className="overflow-hidden">
                      <p className="text-[15px] text-muted-foreground leading-relaxed pb-4" itemProp="text">
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
