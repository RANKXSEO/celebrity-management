import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import usePageSEO from "@/hooks/usePageSEO";

const TermsOfService = () => {
  usePageSEO({
    title: "Terms of Service | Celebrity Reputation Management Agency",
    description: "Terms of service for Celebrity Reputation Management Agency. Engagement terms, confidentiality, and service conditions.",
  });

  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(40px,5vw,60px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-primary-foreground font-bold tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-primary-foreground/40 text-sm">Last updated: February 22, 2026</p>
        </div>
      </section>

      <section className="py-[clamp(40px,6vw,72px)] bg-background">
        <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <div className="space-y-8 text-foreground/80 text-[15px] leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">1. Agreement to Terms</h2>
              <p>By accessing or using the website <strong>celebrity-reputation-management.com</strong> ("the Site"), operated by Celebrity Reputation Management Agency ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">2. Services Description</h2>
              <p>We provide online reputation management services for celebrities, athletes, entertainers, influencers, executives, and other public figures. Services include, but are not limited to, search result suppression, content removal, crisis management, Wikipedia page management, Google Knowledge Panel optimisation, AI search reputation management, and social media reputation defence.</p>
              <p className="mt-2">Specific services, deliverables, timelines, and fees are defined in individual client engagement agreements, which are separate from these website terms.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3. No Guarantee of Results</h2>
              <p>While we have a strong track record (94% page-one clearance rate across 500+ campaigns), reputation management outcomes depend on many factors outside our control, including search engine algorithms, platform policies, third-party actions, and the specific nature of each case. <strong>We do not guarantee specific search engine rankings or outcomes.</strong></p>
              <p className="mt-2">Statistics and case studies referenced on this Site are based on historical results and do not guarantee future performance.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">4. Confidentiality</h2>
              <p>We take client confidentiality seriously. All enquiries submitted through our website are treated as confidential. Formal client engagements are protected by mutual Non-Disclosure Agreements (NDAs) executed prior to substantive discussion.</p>
              <p className="mt-2">All client references, testimonials, and case studies on this Site are anonymised. No client is identified without their explicit prior written consent.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">5. Intellectual Property</h2>
              <p>All content on this Site — including text, graphics, logos, design, and software — is the property of Celebrity Reputation Management Agency or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our written permission.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">6. Website Use Restrictions</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Use the Site for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to any part of the Site</li>
                <li>Submit false, misleading, or fraudulent information through our forms</li>
                <li>Use automated tools to scrape, mine, or extract content from the Site</li>
                <li>Interfere with the Site's operation or security</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">7. Disclaimer of Warranties</h2>
              <p>This Site is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the Site's accuracy, reliability, availability, or fitness for a particular purpose. We do not warrant that the Site will be uninterrupted or error-free.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">8. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Celebrity Reputation Management Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site. Our total liability for any claim related to the Site shall not exceed the amount you paid for services, if any.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">9. External Links</h2>
              <p>Our Site may contain links to third-party websites. We do not endorse and are not responsible for the content, terms, or privacy practices of linked sites.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">10. Not Legal Advice</h2>
              <p>Content on this Site, including blog articles and guides, is provided for informational purposes only and does not constitute legal advice. For legal matters, consult a qualified attorney in your jurisdiction.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">11. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. For clients based in the United Kingdom, UK consumer protection laws apply where applicable.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">12. Changes to These Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Material changes will be posted on this page with an updated date. Continued use of the Site after changes constitutes acceptance of the revised terms.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">13. Contact</h2>
              <p>For questions about these Terms, contact us:</p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:hello@celebrity-reputation-management.com" className="text-gold hover:text-gold-light transition-colors">hello@celebrity-reputation-management.com</a><br />
                <strong>Phone:</strong> <a href="tel:+18005550199" className="text-gold hover:text-gold-light transition-colors">1-800-555-0199</a>
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/free-consultation" className="inline-block bg-gold text-primary-foreground px-6 py-3 rounded-lg text-sm font-bold hover:bg-gold-light hover:-translate-y-0.5 transition-all shadow-gold">
              Request a Confidential Consultation →
            </Link>
          </div>
        </article>
      </section>
    </PageLayout>
  );
};

export default TermsOfService;
