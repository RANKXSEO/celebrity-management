import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import usePageSEO, { BASE_URL } from "@/hooks/usePageSEO";
import { useMemo } from "react";

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
];

const tagColors: Record<string, string> = {
  Crisis: "bg-red-500/10 text-red-400",
  "AI Search": "bg-blue-500/10 text-blue-400",
  Wikipedia: "bg-emerald-500/10 text-emerald-400",
  Google: "bg-yellow-500/10 text-yellow-600",
  Education: "bg-purple-500/10 text-purple-400",
  Social: "bg-pink-500/10 text-pink-400",
};

const BlogHub = () => {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Celebrity Reputation Management Blog & Expert Guides",
        "description": "Expert guides on crisis management, search result suppression, Wikipedia management, and AI search reputation for celebrities and public figures.",
        "url": `${BASE_URL}/blog`,
        "isPartOf": { "@id": `${BASE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE_URL}/blog` },
        ],
      },
    ],
  }), []);

  usePageSEO({
    title: "Celebrity Reputation Management Blog | Expert Guides & Insights",
    description: "Expert guides on celebrity crisis management, negative search result suppression, Wikipedia management, AI search reputation, and more. From the team at Celebrity Reputation Management Agency.",
    jsonLd,
  });

  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-primary-foreground font-bold tracking-tight mb-4">
            Celebrity Reputation <em className="text-gold-light italic">Insights</em>
          </h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed">
            Expert guides on <Link to="/services/celebrity-crisis-management" className="text-gold-light hover:underline">crisis management</Link>, <Link to="/services/negative-search-results" className="text-gold-light hover:underline">search result suppression</Link>, <Link to="/services/wikipedia-for-celebrities" className="text-gold-light hover:underline">Wikipedia management</Link>, and <Link to="/services/ai-search-reputation" className="text-gold-light hover:underline">AI search reputation</Link>.
          </p>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
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
