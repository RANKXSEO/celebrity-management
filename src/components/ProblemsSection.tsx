import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const problems = [
  { icon: "🔥", title: "Cancel Culture & Viral Pile-Ons", desc: "What starts as a single tweet becomes a trending hashtag, then a news article, then a permanent Google result. The window to contain it is measured in hours, not days.", link: "/solutions/cancel-culture-reputation-repair" },
  { icon: "📰", title: "Tabloid Articles That Won't Go Away", desc: "TMZ, Daily Mail, Page Six — stories from years ago that have accumulated backlinks and domain authority. They show up every time someone searches your name, poisoning first impressions and stalling deal conversations.", link: "/solutions/scandal-recovery" },
  { icon: "❌", title: "False Allegations & Online Defamation", desc: "Factually wrong content that looks credible. Blog posts, Reddit threads, anonymous accusations, AWDTSG listings. Defamation has legal remedies — and we pursue them aggressively alongside content suppression.", link: "/solutions/defamation-fake-news-removal" },
  { icon: "📖", title: "Wikipedia Vandalism & Bias", desc: "Anonymous editors adding unsourced claims, exaggerating controversies, or vandalising your page. Every inaccuracy on Wikipedia flows downstream into Knowledge Panels and AI search answers.", link: "/services/wikipedia-for-celebrities" },
  { icon: "🤖", title: "AI Assistants Repeating Old Controversies", desc: "ChatGPT, Gemini, and Perplexity don't show ten blue links — they tell one story. If negative content dominates your web footprint, that story leads with controversy. There's no 'page two' in AI search.", link: "/services/ai-search-reputation" },
  { icon: "📸", title: "Leaked Private Content & Screenshots", desc: "DMs, photos, videos, or personal information shared without consent. Spreading across Reddit, TikTok, gossip forums, and group chats. We pursue takedowns and suppression from the moment it surfaces.", link: "/solutions/leaked-content-removal" },
];

const ProblemsSection = () => {
  return (
    <section className="py-[clamp(64px,8vw,108px)] bg-card" aria-label="Common reputation threats for celebrities">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3.5" aria-hidden="true">
              <div className="w-6 h-px bg-gold" />
              <span className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold">Common Scenarios</span>
            </div>
            <h2 className="font-display text-[clamp(1.625rem,2.8vw,2.5rem)] tracking-tight mb-3">
              Situations We Handle <em className="text-gold italic">Every Week</em>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              If any of these sound familiar, you're not alone. We've seen every version of these problems across 500+ campaigns — and we know exactly how each one plays out if you wait versus if you act now.
            </p>

            <div className="flex flex-col" role="list">
              {problems.map((prob, i) => (
                <motion.div
                  key={prob.title}
                  role="listitem"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex gap-3.5 py-4 border-b border-border last:border-none group hover:pl-1.5 transition-all"
                >
                  <div className="w-10 h-10 rounded bg-gold-pale flex items-center justify-center text-base flex-shrink-0 mt-0.5 group-hover:bg-gold transition-colors" aria-hidden="true">
                    {prob.icon}
                  </div>
                  <div>
                    <h3 className="font-body text-[15px] font-bold text-primary mb-1">
                      <Link to={prob.link} className="hover:text-gold transition-colors">{prob.title}</Link>
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{prob.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/free-consultation"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded text-sm font-bold shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all mt-6"
            >
              Dealing With One of These Right Now? Let's Talk.
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary rounded-2xl p-[clamp(20px,3vw,32px)] shadow-lg-custom overflow-hidden relative">
              <div className="absolute -top-[60px] -right-[60px] w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(196,146,62,0.09),transparent)] rounded-full pointer-events-none" aria-hidden="true" />
              <div className="text-[9px] tracking-[0.18em] uppercase text-gold font-bold mb-2.5">Anonymised campaign data</div>
              <h3 className="font-display text-lg text-primary-foreground font-bold mb-1.5">Google Page One: Before & After</h3>
              <p className="text-sm text-primary-foreground/35 mb-4 leading-relaxed">Composite from actual client campaigns. Individual timelines depend on source authority and volume.</p>

              <div className="bg-primary-foreground/[0.03] border border-primary-foreground/[0.05] rounded-lg overflow-hidden">
                <div className="px-3 py-2 bg-primary-foreground/[0.025] border-b border-primary-foreground/[0.04]">
                  <span className="text-[9px] tracking-[0.14em] uppercase text-primary-foreground/20 font-bold">Before — what people were finding</span>
                </div>
                {[
                  { num: "1", color: "bg-red-500", text: "[Name] scandal — TMZ exclusive", bad: true },
                  { num: "2", color: "bg-red-700", text: "[Name] arrest record — Daily Mail", bad: true },
                  { num: "3", color: "bg-yellow-600", text: "The [Name] controversy: timeline", bad: false },
                ].map((row) => (
                  <div key={row.num + "b"} className="flex items-center gap-2 px-3 py-2 border-b border-primary-foreground/[0.04] text-[13px]">
                    <span className="w-3.5 text-primary-foreground/15 text-[9px] font-bold flex-shrink-0">{row.num}</span>
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${row.color}`} />
                    <span className={row.bad ? "text-red-400 line-through decoration-red-400/40 flex-1" : "text-primary-foreground/40 flex-1"}>
                      {row.text}
                    </span>
                  </div>
                ))}

                <div className="px-3 py-2 bg-emerald-500/[0.04] border-y border-emerald-500/10">
                  <span className="text-[9px] tracking-[0.14em] uppercase text-gold-light font-bold">After — 90-day campaign</span>
                </div>

                {[
                  { num: "1", text: "[Name] — Official Website", badge: "Owned" },
                  { num: "2", text: "[Name] — Wikipedia", badge: "Managed" },
                  { num: "3", text: "[Name] to lead upcoming production — Variety", badge: "Press" },
                ].map((row) => (
                  <div key={row.num + "a"} className="flex items-center gap-2 px-3 py-2 border-b last:border-none border-primary-foreground/[0.04] text-[13px]">
                    <span className="w-3.5 text-primary-foreground/15 text-[9px] font-bold flex-shrink-0">{row.num}</span>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-500" />
                    <span className="text-emerald-400 flex-1">{row.text}</span>
                    <span className="text-[8px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded-full whitespace-nowrap tracking-[0.05em] uppercase font-bold flex-shrink-0">{row.badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-2xl p-5 mt-4 border border-border">
              <h3 className="font-display text-lg font-bold mb-2">What to Expect, Realistically</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { days: "Week 1", label: "Audit complete, strategy agreed, first takedowns filed" },
                  { days: "30 days", label: "Initial ranking shifts visible in SERP tracking" },
                  { days: "60–90 days", label: "Material page-one changes for most targets" },
                  { days: "6 months", label: "Fully consolidated — ongoing monitoring begins" },
                ].map((t) => (
                  <div key={t.days} className="bg-card border border-border rounded-lg p-3 text-center">
                    <div className="font-display text-lg font-bold text-gold">{t.days}</div>
                    <div className="text-[11px] text-ink-muted mt-0.5 leading-snug">{t.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
