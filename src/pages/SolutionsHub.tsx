import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { solutionPages } from "@/data/solutionPages";

const SolutionsHub = () => {
  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(52px,7vw,80px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-primary-foreground font-bold tracking-tight mb-4">
            Reputation <em className="text-gold-light italic">Solutions</em> by Problem
          </h1>
          <p className="text-primary-foreground/50 text-lg leading-relaxed">
            Whatever your reputation challenge — from <Link to="/solutions/cancel-culture-reputation-repair" className="text-gold-light hover:underline">cancel culture recovery</Link> to <Link to="/solutions/leaked-content-removal" className="text-gold-light hover:underline">leaked content removal</Link> — we have a proven solution.
          </p>
        </div>
      </section>

      <section className="py-[clamp(52px,7vw,80px)] bg-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutionPages.map((sol, i) => (
              <motion.article key={sol.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/solutions/${sol.slug}`} className="block bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md-custom transition-all group h-full">
                  <div className="text-3xl mb-3">{sol.icon}</div>
                  <h2 className="font-body text-[16px] font-bold text-primary mb-2 group-hover:text-gold transition-colors">{sol.h1}</h2>
                  <p className="text-sm text-ink-muted leading-relaxed mb-3">{sol.heroDesc.slice(0, 120)}...</p>
                  <span className="text-sm font-semibold text-gold">Learn more →</span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SolutionsHub;
