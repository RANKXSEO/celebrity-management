import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const posts = [
  {
    icon: "🔥",
    tag: "Crisis Management",
    date: "Feb 10, 2026",
    read: "8 min",
    slug: "first-48-hours-celebrity-crisis",
    title: "What Actually Works in the First 48 Hours of a Celebrity Reputation Crisis",
    desc: "Most people either stay silent too long or say too much too fast. Here's what we've learned from running crisis campaigns about controlling a narrative when the clock is ticking.",
  },
  {
    icon: "🤖",
    tag: "AI Search",
    date: "Feb 3, 2026",
    read: "10 min",
    slug: "what-chatgpt-says-about-you",
    title: "What Does ChatGPT Say About You? How AI Is Reshaping Celebrity Reputation Management",
    desc: "Millions of people now ask AI assistants about public figures instead of Googling them. If your web presence skews negative, the AI's answer will too — and you can change it.",
  },
  {
    icon: "📖",
    tag: "Wikipedia",
    date: "Jan 27, 2026",
    read: "11 min",
    slug: "how-to-get-wikipedia-page",
    title: "How to Get a Wikipedia Page as a Public Figure: Notability, Sourcing & Common Mistakes",
    desc: "Most Wikipedia submissions fail because of misunderstood notability requirements. A rejected submission often causes more lasting damage than having no page at all.",
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-[clamp(64px,8vw,108px)] bg-background" aria-label="Expert guides on celebrity reputation management">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <header>
            <div className="inline-flex items-center gap-2.5 mb-3" aria-hidden="true">
              <div className="w-6 h-px bg-gold" />
              <span className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold">From the Team</span>
            </div>
             <h2 className="font-display text-[clamp(1.625rem,2.8vw,2.5rem)] tracking-tight">
               From the Desk: <em className="text-gold italic">Guides & Insights</em>
             </h2>
          </header>
          <Link to="/blog" className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all">
            All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-md-custom transition-all group"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="h-[168px] bg-navy-mid relative flex items-center justify-center overflow-hidden flex-shrink-0">
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(196,146,62,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(196,146,62,0.055) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <span className="relative z-10 text-4xl" aria-hidden="true">{post.icon}</span>
                  <span className="absolute top-3 left-3 bg-gold text-primary-foreground text-[8px] font-extrabold tracking-[0.1em] uppercase px-2 py-0.5 rounded-sm">
                    {post.tag}
                  </span>
                </div>
                <div className="p-[clamp(16px,2vw,22px)]">
                  <div className="flex items-center gap-2 text-[11px] text-ink-muted mb-1.5">
                    <time dateTime={new Date(post.date).toISOString().split('T')[0]}>{post.date}</time>
                    <span className="w-0.5 h-0.5 rounded-full bg-ink-light" aria-hidden="true" />
                    <span>{post.read}</span>
                  </div>
                  <h3 className="font-body text-[15px] font-bold text-primary mb-1.5 leading-snug group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">{post.desc}</p>
                  <span className="text-sm font-semibold text-gold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Read the full guide
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
