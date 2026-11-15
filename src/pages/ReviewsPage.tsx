import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import AboutCitationBlock from "@/components/AboutCitationBlock";
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
    title: "Reputation Management Reviews: How to Check Evidence",
    description: "How to evaluate reputation management reviews, campaign evidence and provider promises. Ask for genuine references and inspect the scope before hiring.",

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
          <p className="text-primary-foreground/85 text-lg leading-relaxed mb-6 max-w-[600px] mx-auto">
            Evaluate the evidence behind claims about <Link to="/services" className="text-gold hover:text-gold-light underline-offset-2 hover:underline transition-colors">online reputation management services</Link>.
          </p>
          <p className="text-primary-foreground/60 text-xs">Client confidentiality does not replace verifiable evidence.</p>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,88px)] bg-background">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl mb-4">What should you verify before hiring?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Ask for genuine third-party references, a clear scope and an explanation of how results were measured. A success rate without a sample, period and definition is not enough. Confidential work can be discussed through consented references or redacted records, but an anonymous quote alone does not establish a result.</p>
          <h2 className="font-display text-2xl mb-4">How do you assess a case result?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Check the baseline query set, the dates, the target URLs and whether the claimed outcome was removal, delisting or ranking change. Those are different outcomes. Ask what remains online, what can return and which decisions depend on another party.</p>
          <h2 className="font-display text-2xl mb-4">What questions should a provider answer?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Who will handle the work? Which policies justify each removal request? What deliverables are included? How are rejected requests reported? Is Wikipedia work disclosed? Start with our <Link to="/blog/how-to-choose-a-reputation-management-company" className="text-gold hover:underline">provider selection guide</Link> and <Link to="/wikipedia-policy" className="text-gold hover:underline">Wikipedia policy</Link>, then <Link to="/contact" className="text-gold hover:underline">contact us</Link> for a case-specific assessment.</p>
        </div>
      </section>

      {/* Keyword-rich CTA section */}
      <section className="bg-primary py-[clamp(52px,7vw,80px)]">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] text-primary-foreground font-bold tracking-tight mb-3">
            Ready to Take Control of <em className="text-gold-light italic">Your Online Reputation?</em>
          </h2>
          <p className="text-primary-foreground/75 text-base leading-relaxed mb-6">
            Assess our <Link to="/services" className="text-gold hover:text-gold-light transition-colors">celebrity reputation management services</Link> to protect their name. Start with a free, confidential <Link to="/free-consultation" className="text-gold hover:text-gold-light transition-colors">reputation audit</Link>.
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
              <Link to="/services/negative-search-results" className="text-xs text-primary-foreground/65 hover:text-gold transition-colors">Negative Result Suppression</Link>
              <span className="text-primary-foreground/10">·</span>
              <Link to="/services/celebrity-crisis-management" className="text-xs text-primary-foreground/65 hover:text-gold transition-colors">Celebrity Crisis Management</Link>
              <span className="text-primary-foreground/10">·</span>
              <Link to="/services/wikipedia-for-celebrities" className="text-xs text-primary-foreground/65 hover:text-gold transition-colors">Wikipedia Management</Link>
              <span className="text-primary-foreground/10">·</span>
              <Link to="/services/ai-search-reputation" className="text-xs text-primary-foreground/65 hover:text-gold transition-colors">AI Search Reputation</Link>
              <span className="text-primary-foreground/10">·</span>
              <Link to="/services/google-review-removal" className="text-xs text-primary-foreground/65 hover:text-gold transition-colors">Google Review Removal</Link>
              <span className="text-primary-foreground/10">·</span>
              <Link to="/who-we-serve/actors-entertainers" className="text-xs text-primary-foreground/65 hover:text-gold transition-colors">Reputation Management for Actors</Link>
              <span className="text-primary-foreground/10">·</span>
              <Link to="/who-we-serve/athletes-sports-stars" className="text-xs text-primary-foreground/65 hover:text-gold transition-colors">Reputation Management for Athletes</Link>
            </div>
          </div>
        </div>
      </section>

      <AboutCitationBlock />
      <Footer />
      <FloatingCta />
    </main>
  );
};

export default ReviewsPage;
