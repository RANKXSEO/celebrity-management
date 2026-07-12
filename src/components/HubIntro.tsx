import { ReactNode, useState } from "react";
import ContentRenderer from "@/components/ContentRenderer";
import AuthorByline, { DEFAULT_UPDATED } from "@/components/AuthorByline";
import { slugifyHeading } from "@/lib/slugify";

interface HubIntroProps {
  /** Long-form intro paragraphs (markdown links supported) rendered under H1 */
  intro: string;
  /** Optional H2-led sections for topical depth */
  sections?: { title: string; content: string }[];
  /** FAQ items — also emitted as FAQPage JSON-LD by the parent page */
  faqs?: { q: string; a: string }[];
  /** Trust-stat strip */
  stats?: { num: string; label: string }[];
  /** Extra content to render before the FAQ (e.g. topic index) */
  children?: ReactNode;
}

const HubIntro = ({ intro, sections, faqs, stats, children }: HubIntroProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {stats && stats.length > 0 && (
        <div className="bg-card border-y border-border -mt-[clamp(52px,7vw,80px)] mb-[clamp(40px,5vw,64px)]">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-xl sm:text-2xl font-bold text-gold">{s.num}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[800px] mx-auto mb-12">
        <AuthorByline updated={DEFAULT_UPDATED} />
        <ContentRenderer content={intro} className="text-muted-foreground text-base leading-relaxed" />
      </div>

      {sections && sections.map((s, i) => (
        <div key={i} className="max-w-[800px] mx-auto mb-10">
          <h2 id={slugifyHeading(s.title)} className="font-display text-[clamp(1.5rem,2.5vw,2rem)] tracking-tight mb-3 scroll-mt-24">{s.title}</h2>
          <ContentRenderer content={s.content} className="text-muted-foreground text-base leading-relaxed" />
        </div>
      ))}

      {children}

      {faqs && faqs.length > 0 && (
        <div className="max-w-[800px] mx-auto mb-12 mt-12">
          <h2 id={slugifyHeading("Frequently Asked Questions")} className="font-display text-2xl font-bold mb-4 scroll-mt-24">Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex items-start justify-between gap-3 py-4 w-full text-left font-body text-[15px] font-semibold text-foreground hover:text-gold transition-colors" aria-expanded={openFaq === i}>
                {faq.q}
                <span className={`w-[22px] h-[22px] rounded-full border border-border flex items-center justify-center flex-shrink-0 text-gold text-sm mt-0.5 transition-all ${openFaq === i ? "bg-gold border-gold text-primary-foreground rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <ContentRenderer content={faq.a} className="text-[15px] text-muted-foreground leading-relaxed pb-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export const faqJsonLd = (faqs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
});

export default HubIntro;
