import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import HubIntro, { faqJsonLd } from "@/components/HubIntro";
import usePageSEO, { BASE_URL } from "@/hooks/usePageSEO";
import { useMemo } from "react";

const HUB_FAQS = [
  { q: "How often is the blog updated?", a: "We publish a new in-depth guide roughly every 7–10 days, and refresh evergreen cornerstone guides quarterly (updated dates are shown on each article). Every post is written or reviewed by senior members of our celebrity reputation management team." },
  { q: "Are these articles written by AI?", a: "No. Every guide is authored or reviewed by our senior team — strategists, former journalists, and Wikipedia specialists with 15+ years working with celebrity clients. AI tools are used only for research and formatting assistance, never as the source of substantive analysis." },
  { q: "Where should a first-time reader start?", a: "Start with three cornerstone pieces: [What is celebrity reputation management?](/blog/what-is-celebrity-reputation-management), [How much does it cost?](/blog/celebrity-reputation-management-cost), and [10 warning signs you need a reputation manager](/blog/signs-you-need-reputation-management). Together they cover most of what a new client typically needs to know." },
  { q: "Can I cite these articles in my own reporting?", a: "Yes — every article is written with the expectation that journalists, academics, and other reputation professionals may cite it. We ask only that you link to the original source. For interview requests, use our [contact page](/contact)." },
  { q: "Do you cover AI-search reputation, not just Google?", a: "Extensively. Our AI-search coverage (ChatGPT, Perplexity, Gemini, Claude) has become one of the most-read sections on the blog — see [what ChatGPT says about you](/blog/what-chatgpt-says-about-you) as a starting point." },
];

const HUB_INTRO = `Everything we've learned over 15+ years and 500+ celebrity reputation engagements — written down and updated for how reputation actually works in 2026. These aren't marketing posts. They're the guides we wish existed when a new client asks 'how does this actually work, and how long will it take?'.

Coverage spans the four surfaces that determine a public figure's digital reputation today: Google organic results, Wikipedia, Google Knowledge Panel, and the AI assistants (ChatGPT, Perplexity, Gemini, Claude) that increasingly answer 'who is [your name]?' for millions of users. Every post is written or reviewed by senior members of our team and linked back to the [services](/services) and [solutions](/solutions) they discuss, so you can go from reading to action in one click.`;


const blogPosts = [
  { slug: "first-48-hours-celebrity-crisis", title: "The First 48 Hours After a Story Breaks: What Actually Works in a Celebrity Reputation Crisis", tag: "Crisis", date: "Feb 10, 2026", read: "8 min" },
  { slug: "what-chatgpt-says-about-you", title: "What Does ChatGPT Say About You? How AI Is Changing Celebrity Reputation Management in 2026", tag: "AI Search", date: "Feb 3, 2026", read: "10 min" },
  { slug: "how-to-get-wikipedia-page", title: "Getting a Wikipedia Page as a Public Figure: What Notability Actually Requires in 2026", tag: "Wikipedia", date: "Jan 27, 2026", read: "11 min" },
  { slug: "surviving-cancel-culture", title: "How to Survive a Cancel Culture Attack as a Celebrity", tag: "Crisis", date: "Jan 20, 2026", read: "9 min" },
  { slug: "celebrity-scandal-48-hour-playbook", title: "The 48-Hour Playbook: Responding to a Celebrity Scandal", tag: "Crisis", date: "Jan 13, 2026", read: "7 min" },
  { slug: "right-to-be-forgotten-celebrities", title: "Google's Right to Be Forgotten: What Celebrities Need to Know", tag: "Google", date: "Jan 6, 2026", read: "8 min" },
  { slug: "how-long-suppress-negative-google", title: "How Long Does It Take to Push Down Negative Search Results?", tag: "Google", date: "Dec 30, 2025", read: "6 min" },
  { slug: "google-knowledge-panel-guide", title: "Google Knowledge Panel: The Celebrity's Complete Guide", tag: "Google", date: "Dec 23, 2025", read: "10 min" },
  { slug: "old-tabloid-articles-ranking", title: "Why Old Tabloid Articles Rank for Your Name (And How to Fix It)", tag: "Google", date: "Dec 16, 2025", read: "7 min" },
  { slug: "wikipedia-notability-explained", title: "Wikipedia Notability: What Public Figures Need to Qualify", tag: "Wikipedia", date: "Dec 9, 2025", read: "8 min" },
  { slug: "celebrity-wikipedia-mistakes", title: "5 Common Mistakes on Celebrity Wikipedia Pages", tag: "Wikipedia", date: "Dec 2, 2025", read: "6 min" },
  { slug: "what-is-celebrity-reputation-management", title: "What Is Celebrity Reputation Management? (Complete Guide 2026)", tag: "Education", date: "Nov 25, 2025", read: "14 min" },
  { slug: "celebrity-reputation-management-cost", title: "How Much Does Celebrity Reputation Management Cost?", tag: "Education", date: "Nov 18, 2025", read: "8 min" },
  { slug: "reputation-management-vs-pr", title: "Celebrity Reputation Management vs. PR: What's the Difference?", tag: "Education", date: "Nov 11, 2025", read: "7 min" },
  { slug: "social-media-crisis-guide", title: "Social Media Crisis Management: A Step-by-Step Guide for Public Figures", tag: "Social", date: "Nov 4, 2025", read: "9 min" },
  { slug: "reddit-celebrity-reputation", title: "How Reddit Can Destroy a Celebrity's Reputation (And What to Do)", tag: "Social", date: "Oct 28, 2025", read: "8 min" },
  { slug: "10-celebrity-reputation-disasters", title: "10 Celebrity Reputation Disasters (And What They Did Wrong)", tag: "Education", date: "Oct 21, 2025", read: "12 min" },
  { slug: "signs-you-need-reputation-management", title: "Do You Need a Reputation Manager? 10 Warning Signs", tag: "Education", date: "Oct 14, 2025", read: "7 min" },
  { slug: "does-reputation-management-work", title: "Does Reputation Management Actually Work? Evidence & Case Studies", tag: "Education", date: "Oct 7, 2025", read: "9 min" },
  { slug: "how-to-remove-negative-articles-from-google", title: "How to Remove Negative Articles From Google: Every Method Explained", tag: "Google", date: "Sep 30, 2025", read: "11 min" },
  { slug: "can-you-sue-for-online-defamation", title: "Can You Sue for Online Defamation? A Celebrity's Legal Guide", tag: "Legal", date: "Sep 23, 2025", read: "10 min" },
  { slug: "how-to-fix-bad-reputation", title: "How to Fix a Bad Reputation as a Public Figure (Step-by-Step)", tag: "Education", date: "Sep 16, 2025", read: "12 min" },
  { slug: "why-is-reputation-management-important", title: "Why Is Reputation Management Important for Celebrities in 2026?", tag: "Education", date: "Sep 9, 2025", read: "8 min" },
  { slug: "what-do-reputation-management-companies-do", title: "What Do Reputation Management Companies Do? (Behind the Scenes)", tag: "Education", date: "Sep 2, 2025", read: "9 min" },
  { slug: "how-to-respond-to-negative-press", title: "How to Respond to Negative Press Coverage as a Celebrity", tag: "Crisis", date: "Aug 26, 2025", read: "8 min" },
  { slug: "online-reputation-management-strategies", title: "Online Reputation Management Strategies That Actually Work in 2026", tag: "Education", date: "Aug 19, 2025", read: "13 min" },
  { slug: "how-to-protect-your-online-reputation", title: "How to Protect Your Online Reputation Before a Crisis Hits", tag: "Education", date: "Aug 12, 2025", read: "9 min" },
  { slug: "reputation-management-for-high-profile-individuals", title: "Reputation Management for High-Profile Individuals: What's Different?", tag: "Education", date: "Aug 5, 2025", read: "10 min" },
  { slug: "how-to-remove-mugshots-from-google", title: "How to Remove Mugshots and Arrest Records From Google Search Results", tag: "Google", date: "Jul 29, 2025", read: "8 min" },
];

const tagColors: Record<string, string> = {
  Crisis: "bg-red-500/10 text-red-400",
  "AI Search": "bg-blue-500/10 text-blue-400",
  Wikipedia: "bg-emerald-500/10 text-emerald-400",
  Google: "bg-yellow-500/10 text-yellow-600",
  Education: "bg-purple-500/10 text-purple-400",
  Social: "bg-pink-500/10 text-pink-400",
  Legal: "bg-amber-500/10 text-amber-400",
};

const BlogHub = () => {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "name": "Celebrity Reputation Management Blog & Expert Guides",
        "description": "Expert guides on crisis management, search result suppression, Wikipedia management, and AI search reputation for celebrities and public figures.",
        "url": `${BASE_URL}/blog`,
        "publisher": { "@id": `${BASE_URL}/#organization` },
        "blogPost": blogPosts.slice(0, 12).map((p) => ({
          "@type": "BlogPosting",
          "headline": p.title,
          "url": `${BASE_URL}/blog/${p.slug}`,
          "datePublished": p.date,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE_URL}/blog` },
        ],
      },
      faqJsonLd(HUB_FAQS),
    ],
  }), []);

  usePageSEO({
    title: `${blogPosts.length}+ Celebrity Reputation Guides & Blog (2026)`,
    description: `Expert guides on celebrity crisis management, negative Google result suppression, Wikipedia management, and AI search reputation. ${blogPosts.length} in-depth articles, updated for 2026.`,
    jsonLd,
  });

  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-primary-foreground font-bold tracking-tight mb-4">
            Celebrity Reputation <em className="text-gold-light italic">Insights</em>
          </h1>
          <p className="text-primary-foreground/85 text-lg leading-relaxed">
            Expert guides on <Link to="/services/celebrity-crisis-management" className="text-gold-light hover:underline">crisis management</Link>, <Link to="/services/negative-search-results" className="text-gold-light hover:underline">search result suppression</Link>, <Link to="/services/wikipedia-for-celebrities" className="text-gold-light hover:underline">Wikipedia management</Link>, and <Link to="/services/ai-search-reputation" className="text-gold-light hover:underline">AI search reputation</Link>.
          </p>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <HubIntro intro={HUB_INTRO} faqs={HUB_FAQS} stats={[
            { num: `${blogPosts.length}`, label: "In-depth guides" },
            { num: "Weekly", label: "New content cadence" },
            { num: "Quarterly", label: "Cornerstone refresh" },
            { num: "Since 2009", label: "Industry experience" },
          ]} />
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block bg-card border border-border rounded-xl p-5 hover:-translate-y-0.5 hover:shadow-md-custom transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full ${tagColors[post.tag] || "bg-muted text-muted-foreground"}`}>{post.tag}</span>
                  <span className="text-[11px] text-ink-muted">{post.date}</span>
                  <span className="text-[11px] text-ink-muted">· {post.read}</span>
                </div>
                <h2 className="font-body text-[16px] font-bold text-primary group-hover:text-gold transition-colors">{post.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export { blogPosts };
export default BlogHub;
