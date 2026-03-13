import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import usePageSEO, { BASE_URL } from "@/hooks/usePageSEO";

const reviews = [
  { id: 1, quote: "I'd been Googling my name for six years and seeing the same three articles. These guys had two of those articles off page one in under 60 days. The third took about four months. I should have called them first.", name: "Grammy-nominated recording artist", role: "Music industry — 2024 campaign", result: "3 negative articles cleared from page one", rating: 5 },
  { id: 2, quote: "Something happened on a Friday night and by Saturday morning it was everywhere. I called their crisis line at 11pm and someone actually picked up. By 9am we had a plan. I don't know what I would have done without them.", name: "Professional athlete — Hall of Fame inductee", role: "Sports — 2023 crisis engagement", result: "Story contained within 48 hours", rating: 5 },
  { id: 3, quote: "My Wikipedia page had been wrong for months. Someone had added things that were flatly untrue. They fixed the page properly, explained why it kept getting vandalised, and set up monitoring so it stays correct.", name: "Emmy Award-winning actor", role: "Television — 2024 Wikipedia engagement", result: "Wikipedia corrected, monitoring active", rating: 5 },
  { id: 4, quote: "I asked ChatGPT about myself and the answer was devastating — leading with a controversy from 2019 that had been fully resolved. Within a few months the AI's answer actually changed. I hadn't even known that was possible.", name: "Bestselling author and media personality", role: "Publishing — 2025 GEO engagement", result: "AI search answers corrected", rating: 5 },
  { id: 5, quote: "We had a Google review crisis — dozens of fake one-star reviews overnight. They got 90% of them removed within two weeks and helped us build a strategy to prevent it from happening again.", name: "Celebrity-owned restaurant group", role: "Hospitality — 2024 review management", result: "90% of fake reviews removed", rating: 5 },
  { id: 6, quote: "After a tabloid ran a completely false story, it was ranking #1 for my name. Within 90 days, it was on page three. The whole process was handled under NDA and I never felt exposed.", name: "A-list film actor", role: "Entertainment — 2023 suppression campaign", result: "Tabloid article suppressed to page 3", rating: 5 },
  { id: 7, quote: "My Knowledge Panel was showing an outdated photo and incorrect information. They claimed it, corrected it, and now it reflects who I actually am. Small thing, huge impact.", name: "International fashion model", role: "Fashion — 2024 Knowledge Panel", result: "Knowledge Panel fully corrected", rating: 5 },
  { id: 8, quote: "I was getting threatening comments across multiple platforms. They coordinated takedowns across Instagram, X, TikTok, and Reddit simultaneously. The speed was incredible.", name: "Top-tier social media influencer", role: "Digital — 2024 social media defence", result: "Cross-platform threats neutralised", rating: 5 },
  { id: 9, quote: "Old arrest records from a dismissed case were ranking on page one. They pursued legal removal and suppression at the same time. Gone within 10 weeks.", name: "Former reality TV star", role: "Television — 2023 record suppression", result: "Arrest records removed from page one", rating: 4 },
  { id: 10, quote: "The ongoing monitoring service has been invaluable. Twice they caught negative content before it gained any traction. Prevention is so much easier than cleanup.", name: "Tech CEO and public speaker", role: "Technology — 2024 ongoing protection", result: "2 emerging threats neutralised early", rating: 5 },
  { id: 11, quote: "They managed my entire online reputation during a high-profile divorce. Everything was handled discreetly, and the press narrative stayed balanced. Truly professional celebrity reputation management.", name: "Prominent socialite and philanthropist", role: "Personal — 2024 crisis management", result: "Media narrative controlled throughout", rating: 5 },
  { id: 12, quote: "Perplexity and Gemini were both citing a debunked news article when answering questions about me. Their GEO team fixed the underlying source material and within months the AI answers were accurate.", name: "Olympic gold medallist", role: "Sports — 2025 AI reputation management", result: "AI search results corrected across 3 platforms", rating: 5 },
];

const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(2);

const ReviewsPage = () => {
  usePageSEO({
    title: "Client Reviews — Celebrity Reputation Management Agency | Rated 4.76/5",
    description: "Read verified client reviews of our celebrity reputation management services. Rated 4.76 out of 5 by 181 clients. Reputation management for celebrities, athletes, influencers, and public figures.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Celebrity Reputation Management Agency",
      "url": `${BASE_URL}`,
      "image": `${BASE_URL}/og-image.png`,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.76",
        "reviewCount": "181",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": reviews.slice(0, 6).map(r => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": String(r.rating),
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": r.name
        },
        "reviewBody": r.quote
      }))
    }
  });

  return (
    <main id="main-content">
      <Navbar />

      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold">Client Reviews</span>
            <div className="w-6 h-px bg-gold/50" />
          </div>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] text-primary-foreground font-bold tracking-tight mb-4">
            Celebrity Reputation Management <em className="text-gold-light italic">Reviews</em>
          </h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed mb-6 max-w-[600px] mx-auto">
            Rated <strong className="text-gold-light">4.76 out of 5</strong> by <strong className="text-gold-light">181 clients</strong>. Read what celebrities, athletes, influencers, and public figures say about our <Link to="/services" className="text-gold hover:text-gold-light underline-offset-2 hover:underline transition-colors">online reputation management services</Link>.
          </p>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1,2,3,4,5].map(s => (
              <svg key={s} className={`w-6 h-6 ${s <= 4 ? 'text-gold' : 'text-gold/60'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
          </div>
          <p className="text-primary-foreground/25 text-xs">Based on 181 verified client engagements · Identities protected under NDA</p>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,88px)] bg-background">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((r, i) => (
              <motion.article
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-[clamp(20px,2.8vw,28px)] hover:-translate-y-1 hover:shadow-md-custom transition-all flex flex-col"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className={`w-4 h-4 ${s <= r.rating ? 'text-gold' : 'text-border'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>

                <div className="bg-gold/10 border border-gold/20 rounded-lg px-3 py-1.5 mb-3 inline-flex self-start">
                  <span className="text-[10px] font-bold text-gold tracking-[0.05em] uppercase">{r.result}</span>
                </div>

                <blockquote className="font-display text-[15px] italic leading-relaxed text-foreground mb-4 flex-1">
                  "{r.quote}"
                </blockquote>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center text-gold-light font-display text-base font-bold flex-shrink-0" aria-hidden="true">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary leading-tight">{r.name}</div>
                    <div className="text-[11px] text-ink-muted mt-0.5">{r.role}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Keyword-rich CTA section */}
      <section className="bg-primary py-[clamp(52px,7vw,80px)]">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] text-primary-foreground font-bold tracking-tight mb-3">
            Ready to Take Control of <em className="text-gold-light italic">Your Online Reputation?</em>
          </h2>
          <p className="text-primary-foreground/40 text-base leading-relaxed mb-6">
            Join 500+ celebrities, athletes, and public figures who trust our <Link to="/services" className="text-gold hover:text-gold-light transition-colors">celebrity reputation management services</Link> to protect their name. Start with a free, confidential <Link to="/free-consultation" className="text-gold hover:text-gold-light transition-colors">reputation audit</Link>.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded text-base font-bold shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all">
              Get Your Free Reputation Audit
            </Link>
            <a href="tel:+16462224346" className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded text-base font-medium hover:border-gold-light hover:text-gold-light transition-all">
              Call: (646) 222-4346
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-primary-foreground/[0.07]">
            <h3 className="font-display text-lg text-primary-foreground/60 font-bold mb-3">Explore Our Reputation Management Services</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <Link to="/services/negative-search-results" className="text-xs text-primary-foreground/30 hover:text-gold transition-colors">Negative Result Suppression</Link>
              <span className="text-primary-foreground/10">·</span>
              <Link to="/services/celebrity-crisis-management" className="text-xs text-primary-foreground/30 hover:text-gold transition-colors">Celebrity Crisis Management</Link>
              <span className="text-primary-foreground/10">·</span>
              <Link to="/services/wikipedia-for-celebrities" className="text-xs text-primary-foreground/30 hover:text-gold transition-colors">Wikipedia Management</Link>
              <span className="text-primary-foreground/10">·</span>
              <Link to="/services/ai-search-reputation" className="text-xs text-primary-foreground/30 hover:text-gold transition-colors">AI Search Reputation</Link>
              <span className="text-primary-foreground/10">·</span>
              <Link to="/services/google-review-removal" className="text-xs text-primary-foreground/30 hover:text-gold transition-colors">Google Review Removal</Link>
              <span className="text-primary-foreground/10">·</span>
              <Link to="/who-we-serve/actors-entertainers" className="text-xs text-primary-foreground/30 hover:text-gold transition-colors">Reputation Management for Actors</Link>
              <span className="text-primary-foreground/10">·</span>
              <Link to="/who-we-serve/athletes-sports-stars" className="text-xs text-primary-foreground/30 hover:text-gold transition-colors">Reputation Management for Athletes</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCta />
    </main>
  );
};

export default ReviewsPage;
