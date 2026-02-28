import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ContentRenderer from "@/components/ContentRenderer";
import { blogPosts } from "@/pages/BlogHub";
import { blogContent } from "@/data/blogContent";
import usePageSEO, { BASE_URL } from "@/hooks/usePageSEO";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const content = slug ? blogContent[slug] : undefined;

  const jsonLd = useMemo(() => post ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": post.title,
        "datePublished": post.date,
        "author": { "@id": `${BASE_URL}/#organization` },
        "publisher": { "@id": `${BASE_URL}/#organization` },
        "url": `${BASE_URL}/blog/${post.slug}`,
        "mainEntityOfPage": `${BASE_URL}/blog/${post.slug}`,
        "articleSection": post.tag,
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE_URL}/blog` },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `${BASE_URL}/blog/${post.slug}` },
        ],
      },
    ],
  } : undefined, [post]);

  usePageSEO({
    title: post ? `${post.title} | Celebrity Reputation Management Agency` : "Post Not Found",
    description: content?.intro?.slice(0, 155) + "..." || post?.title || "",
    type: "article",
    jsonLd,
  });

  if (!post) return <PageLayout><div className="pt-32 pb-20 text-center"><h1 className="font-display text-3xl">Post not found</h1><Link to="/blog" className="text-gold mt-4 inline-block">← Back to blog</Link></div></PageLayout>;

  const related = blogPosts.filter((p) => p.tag === post.tag && p.slug !== slug).slice(0, 3);

  return (
    <PageLayout>
      <article>
        <section className="bg-primary pt-[120px] pb-[clamp(40px,5vw,60px)]">
          <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-gold font-bold">
                <li><Link to="/" className="hover:text-gold-light transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link to="/blog" className="hover:text-gold-light transition-colors">Blog</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-primary-foreground/50 truncate max-w-[200px]">{post.title}</li>
              </ol>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-gold bg-gold/10 px-2 py-0.5 rounded-full">{post.tag}</span>
              <span className="text-[11px] text-primary-foreground/30">{post.date} · {post.read}</span>
            </div>
            <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] text-primary-foreground font-bold tracking-tight leading-tight">{post.title}</h1>
          </div>
        </section>

        <section className="py-[clamp(40px,5vw,60px)] bg-background">
          <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">

            {content ? (
              <>
                <p className="text-muted-foreground leading-relaxed text-[17px] mb-8 font-body">
                  {content.intro}
                </p>

                <div className="bg-card border border-border rounded-2xl p-6 mb-10">
                  <h3 className="font-display text-xl font-bold mb-3">Key Takeaways</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {content.takeaways.map((t, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-gold flex-shrink-0 mt-0.5">✓</span>{t}</li>
                    ))}
                  </ul>
                </div>

                {content.sections.map((sec, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
                    <h2 className="font-display text-[clamp(1.4rem,2.5vw,1.875rem)] tracking-tight mb-4">{sec.heading}</h2>
                    {sec.body.split('\n\n').map((para, j) => (
                      <ContentRenderer key={j} content={para} className="text-muted-foreground text-base leading-relaxed mb-4 font-body" />
                    ))}
                  </motion.div>
                ))}

                {content.relatedServiceSlugs.length > 0 && (
                  <div className="bg-card border border-border rounded-2xl p-6 mb-10">
                    <h3 className="font-display text-lg font-bold mb-3">Related Services</h3>
                    <ul className="space-y-2">
                      {content.relatedServiceSlugs.map((s) => (
                        <li key={s}>
                          <Link to={`/services/${s}`} className="text-gold hover:text-gold-light transition-colors font-medium text-sm">
                            {s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-base mb-6">
                  This is a comprehensive guide from the reputation management experts at Celebrity Reputation Management Agency. For personalised advice about your specific situation, <Link to="/free-consultation" className="text-gold hover:underline">request a free, confidential reputation audit</Link>.
                </p>
                <div className="bg-card border border-border rounded-2xl p-6 mb-8">
                  <h3 className="font-display text-xl font-bold mb-3">Key Takeaways</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="text-gold">✓</span> Expert insights backed by 500+ celebrity reputation campaigns</li>
                    <li className="flex items-start gap-2"><span className="text-gold">✓</span> Actionable strategies you can implement immediately</li>
                    <li className="flex items-start gap-2"><span className="text-gold">✓</span> Real-world examples from anonymised client campaigns</li>
                  </ul>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base mb-6">
                  Explore our <Link to="/services" className="text-gold hover:underline">celebrity reputation management services</Link>, learn about <Link to="/who-we-serve" className="text-gold hover:underline">who we serve</Link>, or browse our <Link to="/solutions" className="text-gold hover:underline">solutions for specific reputation problems</Link>.
                </p>
              </div>
            )}

            {/* Related articles */}
            {related.length > 0 && (
              <div className="mt-12">
                <h3 className="font-display text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-3">
                  {related.map((rp) => (
                    <Link key={rp.slug} to={`/blog/${rp.slug}`} className="block bg-card border border-border rounded-xl p-4 hover:-translate-y-0.5 transition-all group">
                      <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-gold bg-gold/10 px-2 py-0.5 rounded-full">{rp.tag}</span>
                      <h4 className="font-body text-[15px] font-bold text-foreground group-hover:text-gold transition-colors mt-2">{rp.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="bg-primary rounded-2xl p-8 text-center mt-12">
              <h3 className="font-display text-2xl text-primary-foreground font-bold mb-3">Need Expert Help With Your Reputation?</h3>
              <p className="text-primary-foreground/40 mb-5">Get a free, confidential reputation audit from our team. We'll tell you exactly where you stand and what's achievable.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link to="/free-consultation" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded text-base font-bold shadow-gold hover:bg-gold-light transition-all">
                  Get Your Free Reputation Audit →
                </Link>
                <a href="tel:+16462224346" className="text-sm text-primary-foreground/50 hover:text-gold-light transition-colors">
                  or call (646) 222-4346 (24/7)
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </PageLayout>
  );
};

export default BlogPost;
