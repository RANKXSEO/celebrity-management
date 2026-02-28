import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const audiences = [
  { emoji: "🎬", slug: "actors-entertainers", title: "Actors & Entertainers", desc: "Film, TV, and stage performers dealing with tabloid persistence, paparazzi, past role controversies, and the long tail of production-related press coverage" },
  { emoji: "🎵", slug: "musicians-artists", title: "Musicians & Recording Artists", desc: "Managing public image across streaming platforms, music press, social media feuds, and the intense scrutiny that comes with touring and public appearances" },
  { emoji: "🏆", slug: "athletes-sports-stars", title: "Athletes & Sports Professionals", desc: "On-field and off-field reputation management, endorsement deal protection, post-career narrative control, and the particular challenges of fan culture" },
  { emoji: "📲", slug: "influencers-content-creators", title: "Influencers & Content Creators", desc: "Brand deal protection, cancel culture defence, gossip forum takedowns, and managing the gap between your public persona and private life" },
  { emoji: "💼", slug: "executives-ceos", title: "CEOs & High-Profile Executives", desc: "Separating personal reputation from corporate brand. Board-level reputation risk management, activist investor campaigns, and media scrutiny during transactions" },
  { emoji: "🏛️", slug: "politicians-public-officials", title: "Politicians & Public Officials", desc: "Opposition research countermeasures, election-cycle reputation defence, and managing media narratives during legislative or policy controversies" },
  { emoji: "📺", slug: "reality-tv-personalities", title: "Reality TV Personalities", desc: "The aftermath of production narratives lasts years. We help manage the ongoing public attention, gossip site coverage, and social media commentary" },
  { emoji: "👑", slug: "all-public-figures", title: "High-Net-Worth Individuals & Public Figures", desc: "Authors, speakers, philanthropists, heirs, socialites — anyone whose name carries professional and personal value worth protecting" },
];

const WhoWeServeSection = () => {
  return (
    <section id="who-we-serve" className="py-[clamp(64px,8vw,108px)] bg-primary" aria-label="Who we work with">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-[640px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2.5 mb-4" aria-hidden="true">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-[11px] tracking-[0.14em] uppercase text-gold font-bold">Who We Work With</span>
            <div className="w-6 h-px bg-gold/50" />
          </div>
          <h2 className="font-display text-[clamp(1.625rem,2.8vw,2.5rem)] tracking-tight text-primary-foreground mb-4">
            Reputation Management for <em className="text-gold-light italic">Celebrities & Public Figures</em>
          </h2>
          <p className="text-primary-foreground/45 text-[17px] leading-relaxed">
            We don't take on local businesses or small brands. Every client is a public figure with real media exposure and career-level stakes. That narrow focus is why we're good at this.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {audiences.map((aud, i) => (
            <motion.article
              key={aud.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Link
                to={`/who-we-serve/${aud.slug}`}
                className="block bg-primary-foreground/[0.03] border border-primary-foreground/[0.06] rounded-lg p-[clamp(18px,2.5vw,24px)] hover:border-gold/25 hover:bg-gold/[0.05] hover:-translate-y-1 transition-all group h-full"
              >
                <div className="text-2xl mb-2.5" aria-hidden="true">{aud.emoji}</div>
                <h3 className="font-body text-[15px] font-bold text-primary-foreground mb-1">{aud.title}</h3>
                <p className="text-[13px] text-primary-foreground/35 leading-snug">{aud.desc}</p>
                <span className="block mt-2.5 text-[10px] font-bold text-gold tracking-[0.07em] uppercase group-hover:tracking-[0.12em] transition-all">
                  Learn more
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
