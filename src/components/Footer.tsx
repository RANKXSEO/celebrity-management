import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[hsl(240,10%,2%)] pt-20 pb-10" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16">
          <div>
            <Link to="/"><Logo light /></Link>
            <p className="text-sm text-primary-foreground/30 leading-relaxed mt-4 mb-6">
              Specialist <Link to="/services" className="text-primary-foreground/50 hover:text-gold-light transition-colors">online reputation management</Link> for celebrities, athletes, entertainers, influencers, executives, and public figures. Serving the <strong className="text-primary-foreground/45">United States</strong>, <strong className="text-primary-foreground/45">United Kingdom</strong>, and internationally since 2009.
            </p>
            <address className="not-italic flex flex-col gap-2">
              <a href="tel:+18005550199" className="flex items-center gap-2.5 text-[13px] text-primary-foreground/45 hover:text-gold-light transition-colors">
                <span className="text-gold text-sm" aria-hidden="true">📞</span> 1-800-555-0199 (24/7)
              </a>
              <a href="mailto:hello@celebrity-reputation-management.com" className="flex items-center gap-2.5 text-[13px] text-primary-foreground/45 hover:text-gold-light transition-colors">
                <span className="text-gold text-sm" aria-hidden="true">✉️</span> hello@celebrity-reputation-management.com
              </a>
            </address>
          </div>

          <nav aria-label="Reputation management services">
            <div className="text-[12px] tracking-[2px] uppercase text-gold font-semibold mb-5">Services</div>
            <div className="flex flex-col gap-2.5">
              <Link to="/services/negative-search-results" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Negative Search Result Suppression</Link>
              <Link to="/services/google-results-removal" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Google Content Removal</Link>
              <Link to="/services/celebrity-crisis-management" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Celebrity Crisis Management</Link>
              <Link to="/services/wikipedia-for-celebrities" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Wikipedia Page Management</Link>
              <Link to="/services/knowledge-panel-management" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Knowledge Panel Optimisation</Link>
              <Link to="/services/ai-search-reputation" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">AI Search Reputation (GEO)</Link>
              <Link to="/services/social-media-reputation" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Social Media Reputation Defence</Link>
              <Link to="/services/review-management" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Review & Rating Management</Link>
              <Link to="/services/reputation-protection" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Reputation Monitoring & Protection</Link>
            </div>
          </nav>

          <nav aria-label="Client industries and reputation solutions">
            <div className="text-[12px] tracking-[2px] uppercase text-gold font-semibold mb-5">Who We Serve</div>
            <div className="flex flex-col gap-2.5 mb-6">
              <Link to="/who-we-serve/actors-entertainers" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Actors & Entertainers</Link>
              <Link to="/who-we-serve/musicians-artists" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Musicians & Recording Artists</Link>
              <Link to="/who-we-serve/athletes-sports-stars" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Athletes & Sports Stars</Link>
              <Link to="/who-we-serve/influencers-content-creators" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Influencers & Content Creators</Link>
              <Link to="/who-we-serve/executives-ceos" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">CEOs & High-Profile Executives</Link>
              <Link to="/who-we-serve/politicians-public-officials" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Politicians & Public Officials</Link>
            </div>
            <div className="text-[12px] tracking-[2px] uppercase text-gold font-semibold mb-5">Solutions</div>
            <div className="flex flex-col gap-2.5">
              <Link to="/solutions/cancel-culture-reputation-repair" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Cancel Culture Reputation Repair</Link>
              <Link to="/solutions/defamation-fake-news-removal" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Defamation & Fake News Removal</Link>
              <Link to="/solutions/scandal-recovery" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Scandal Recovery</Link>
              <Link to="/solutions/leaked-content-removal" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Leaked Content Removal</Link>
            </div>
          </nav>

          <nav aria-label="Resources and company information">
            <div className="text-[12px] tracking-[2px] uppercase text-gold font-semibold mb-5">Resources</div>
            <div className="flex flex-col gap-2.5">
              <Link to="/blog/what-is-celebrity-reputation-management" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Celebrity Reputation Guide</Link>
              <Link to="/blog/first-48-hours-celebrity-crisis" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Crisis Management Checklist</Link>
              <Link to="/resources" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Frequently Asked Questions</Link>
              <Link to="/blog" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Expert Blog & Guides</Link>
              <Link to="/about" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">About the Agency</Link>
              <Link to="/solutions" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Solutions</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors">Contact Us</Link>
              <Link to="/free-consultation" className="text-sm text-gold hover:text-gold-light transition-colors font-medium">Free Reputation Audit</Link>
            </div>
          </nav>
        </div>

        <div className="pt-8 border-t border-primary-foreground/[0.06] flex items-center justify-between flex-wrap gap-4">
          <div className="text-[13px] text-primary-foreground/20">
            © {new Date().getFullYear()} Celebrity Reputation Management Agency. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-[12px] text-primary-foreground/20 hover:text-primary-foreground/40 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-[12px] text-primary-foreground/20 hover:text-primary-foreground/40 transition-colors">Terms of Service</Link>
          </div>
        </div>

        <p className="text-[11px] text-primary-foreground/[0.12] mt-4 text-center leading-relaxed">
          Disclaimer: All client references are anonymised. Past campaign results do not guarantee future outcomes. Each reputation management engagement is unique. This website does not constitute legal advice.
        </p>

        <div className="flex justify-center mt-4">
          <div className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 rounded-full px-3.5 py-1.5 text-[11px] text-gold tracking-[1px] uppercase">
            NDA-Protected Client Engagements
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
