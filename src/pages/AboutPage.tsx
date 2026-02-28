import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import usePageSEO from "@/hooks/usePageSEO";

const AboutPage = () => {
  usePageSEO({
    title: "About Celebrity Reputation Management Agency | 15+ Years, 500+ Campaigns",
    description: "The premier white-glove reputation management agency exclusively serving celebrities, athletes, entertainers, and public figures since 2009. 500+ campaigns, 94% page-one clearance rate.",
  });
  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-primary-foreground font-bold tracking-tight mb-4">
            About Celebrity Reputation <em className="text-gold-light italic">Management</em>
          </h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed">
            The premier white-glove ORM agency exclusively serving celebrities, athletes, entertainers, and high-profile public figures since 2009.
          </p>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold mb-4">Why We Exist</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We founded Celebrity Reputation Management because we saw an industry gap that nobody was filling. General ORM firms were treating celebrity clients the same way they treated local plumbers and dentists — cookie-cutter press releases, templated blog posts, and strategies that hadn't worked since 2015.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Public figures face fundamentally different challenges. Tabloid sites with massive domain authority. Wikipedia pages edited by anonymous volunteers. AI assistants repeating inaccuracies to millions. Cancel culture campaigns that generate hundreds of negative articles in days. These problems require specialised expertise, dedicated resources, and absolute discretion. We built the agency we wished existed when we needed it.
            </p>
          </motion.div>

          <h2 className="font-display text-2xl font-bold mb-4">Our Track Record</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { num: "500+", label: "Campaigns completed" },
              { num: "15+", label: "Years in operation" },
              { num: "94%", label: "Page-one clearance" },
              { num: "24/7", label: "Crisis response" },
            ].map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-gold">{s.num}</div>
                <div className="text-[12px] text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold mb-4">What Makes Us Different</h2>
            <div className="space-y-4 mb-8">
              {[
                { title: "Celebrity-Only Focus", desc: "We don't work with local businesses, startups, or general professionals. Every strategy, every tool, every team member is focused entirely on celebrity and high-profile reputation management. This specialisation means we understand the challenges you face — because it's all we do." },
                { title: "NDA-First Engagements", desc: "We maintain zero public client lists. Every engagement begins with a mutual NDA. Your competitors, the media, and the public will never know you work with us unless you choose to share it. Discretion isn't a feature — it's foundational to how we operate." },
                { title: "Global Coverage", desc: "Google, Wikipedia, social media, AI assistants, international press — your reputation doesn't respect borders, and neither do we. We operate across every relevant platform and jurisdiction, with particular expertise in US, UK, and EU regulatory frameworks." },
                { title: "Measurable Results", desc: "We send monthly SERP tracking reports with screenshots, position data, and trend analysis. You can see exactly what's changing, how fast, and what comes next. No vague promises — data you can verify yourself." },
                { title: "24/7 Crisis Response", desc: "Our crisis line is staffed by senior strategists, not junior staff. When a story breaks at 11pm on a Friday, you get a real expert on the phone within minutes and a written strategy within hours. We've managed crises on every continent and in every time zone." },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-body text-[15px] font-bold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team includes former journalists who understand how media works from the inside. Search engine specialists with 10+ years of Google ranking experience. Wikipedia editors with thousands of policy-compliant edits. Media lawyers specialising in defamation, privacy, and content removal across multiple jurisdictions. Social media analysts who monitor sentiment across every major platform.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              What we don't have: junior staff handling senior-level problems. Every client works directly with experienced strategists who've managed hundreds of campaigns. There's no bait-and-switch where a senior person sells the engagement and a junior person runs it.
            </p>
          </motion.div>

          {/* Client testimonials */}
          <h2 className="font-display text-2xl font-bold mb-4">What Our Clients Say</h2>
          <div className="space-y-4 mb-8">
            {[
              { quote: "Three articles I'd been dreading for six years were off page one in under 60 days. I can finally Google myself without anxiety.", name: "Emmy Award-winning actor", role: "Television — 2024" },
              { quote: "When the story broke at 11pm, someone picked up immediately. By morning there was a clear plan. By the following week, the narrative had shifted entirely.", name: "Professional athlete, Hall of Fame", role: "Sports — 2023" },
              { quote: "They corrected my Wikipedia page, claimed my Knowledge Panel, and changed what ChatGPT says about me. I didn't know any of that was even possible.", name: "International recording artist", role: "Music — 2024" },
            ].map((t) => (
              <div key={t.name} className="bg-primary rounded-xl p-6">
                <blockquote className="font-display text-base italic text-primary-foreground leading-relaxed mb-3">"{t.quote}"</blockquote>
                <div className="text-sm font-bold text-gold-light">{t.name}</div>
                <div className="text-[11px] text-primary-foreground/30 mt-0.5">{t.role}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Link to="/services" className="bg-card border border-border rounded-xl p-5 hover:-translate-y-1 transition-all group">
              <h3 className="font-body font-bold text-foreground group-hover:text-gold transition-colors mb-1">Our Services</h3>
              <p className="text-sm text-muted-foreground">Explore our full range of <span className="text-gold">celebrity reputation management services</span></p>
            </Link>
            <Link to="/who-we-serve" className="bg-card border border-border rounded-xl p-5 hover:-translate-y-1 transition-all group">
              <h3 className="font-body font-bold text-foreground group-hover:text-gold transition-colors mb-1">Who We Serve</h3>
              <p className="text-sm text-muted-foreground">Reputation management by <span className="text-gold">industry and profession</span></p>
            </Link>
            <Link to="/blog" className="bg-card border border-border rounded-xl p-5 hover:-translate-y-1 transition-all group">
              <h3 className="font-body font-bold text-foreground group-hover:text-gold transition-colors mb-1">Expert Insights</h3>
              <p className="text-sm text-muted-foreground">Read our <span className="text-gold">celebrity reputation management blog</span></p>
            </Link>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl text-primary-foreground font-bold mb-3">Ready to Work With Us?</h3>
            <p className="text-primary-foreground/40 mb-5">Start with a free, confidential reputation audit. No obligation, no pressure — just honest answers about where you stand.</p>
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
    </PageLayout>
  );
};

export default AboutPage;
