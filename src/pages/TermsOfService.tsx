import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import usePageSEO from "@/hooks/usePageSEO";

const TermsOfService = () => {
  usePageSEO({
    title: "Terms of Service | Celebrity Reputation Management Agency",
    description: "Terms of service for Celebrity Reputation Management Agency. Engagement terms, confidentiality, intellectual property, and service conditions.",
  });

  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(40px,5vw,60px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-primary-foreground font-bold tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-primary-foreground/40 text-sm">Last updated: February 28, 2026</p>
        </div>
      </section>

      <section className="py-[clamp(40px,6vw,72px)] bg-background">
        <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <div className="space-y-8 text-foreground/80 text-[15px] leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">1. Agreement to Terms</h2>
              <p>By accessing or using the website <strong>celebrity-reputation-management.com</strong> ("the Site"), operated by Celebrity Reputation Management Agency ("we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site.</p>
              <p className="mt-2">These Terms constitute a legally binding agreement between you and Celebrity Reputation Management Agency. We may update these Terms at any time, and your continued use of the Site constitutes acceptance of any changes.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">2. Eligibility</h2>
              <p>You must be at least 18 years of age to use this Site or engage our services. By using the Site, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms. If you are accessing the Site on behalf of an organisation, you represent that you have the authority to bind that organisation to these Terms.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3. Services Description</h2>
              <p>We provide online reputation management services for celebrities, athletes, entertainers, influencers, executives, and other public figures. Services include, but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Negative search result suppression and content removal</li>
                <li>Google content removal and de-indexing assistance</li>
                <li>Crisis management and rapid response</li>
                <li>Wikipedia page creation, editing, and monitoring</li>
                <li>Google Knowledge Panel optimisation and management</li>
                <li>AI search reputation management (Generative Engine Optimisation)</li>
                <li>Social media reputation defence and monitoring</li>
                <li>Review and rating management</li>
                <li>Reputation monitoring and protection</li>
                <li>Google review removal assistance</li>
              </ul>
              <p className="mt-2">Specific services, deliverables, timelines, fees, and payment terms are defined in individual client engagement agreements, which are separate from these website Terms and take precedence where they conflict.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">4. No Guarantee of Results</h2>
              <p>While we have a strong track record (94% page-one clearance rate across 500+ campaigns), reputation management outcomes depend on many factors outside our control, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Search engine algorithm changes and updates</li>
                <li>Platform policies and enforcement decisions</li>
                <li>Third-party actions, including new content publication</li>
                <li>The specific nature, severity, and volume of existing content</li>
                <li>Jurisdictional legal frameworks and enforcement</li>
                <li>AI model training data and update cycles</li>
              </ul>
              <p className="mt-2"><strong>We do not guarantee specific search engine rankings, content removal, or outcomes.</strong> Statistics and case studies referenced on this Site are based on historical results and do not guarantee future performance. Any projections provided during consultations are estimates based on experience and should not be construed as guarantees.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">5. Confidentiality</h2>
              <p>We take client confidentiality extremely seriously. All enquiries submitted through our website are treated as confidential from the moment of receipt. Formal client engagements are protected by mutual Non-Disclosure Agreements (NDAs) executed prior to substantive discussion.</p>
              <p className="mt-2">All client references, testimonials, and case studies on this Site are anonymised. No client is identified without their explicit prior written consent. Our team members are bound by individual confidentiality agreements, and we maintain strict access controls on all client data.</p>
              <p className="mt-2">Our confidentiality obligations survive the termination of any engagement and are not subject to expiry.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">6. Client Responsibilities</h2>
              <p>When engaging our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Provide accurate and truthful information about your situation</li>
                <li>Respond to communications in a timely manner to avoid delays</li>
                <li>Not engage in conduct that would undermine the reputation management work being performed</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Make payments in accordance with the agreed engagement terms</li>
                <li>Not disclose our strategies, methods, or proprietary processes to third parties</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">7. Intellectual Property</h2>
              <p>All content on this Site — including text, graphics, logos, design, software, methodologies, and proprietary tools — is the property of Celebrity Reputation Management Agency or its licensors and is protected by intellectual property laws including copyright, trademark, and trade secret law.</p>
              <p className="mt-2">You may not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit our content without our prior written permission. Limited personal, non-commercial use is permitted for informational purposes, provided attribution is given.</p>
              <p className="mt-2">Content created as part of a client engagement (e.g., positive articles, press releases, media assets) is subject to the terms of the individual engagement agreement.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">8. Website Use Restrictions</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Use the Site for any unlawful purpose or in violation of any applicable law</li>
                <li>Attempt to gain unauthorised access to any part of the Site, its servers, or connected systems</li>
                <li>Submit false, misleading, or fraudulent information through our forms</li>
                <li>Use automated tools (bots, scrapers, crawlers) to extract content from the Site</li>
                <li>Interfere with the Site's operation, security, or availability</li>
                <li>Impersonate any person or entity, or misrepresent your affiliation</li>
                <li>Transmit malware, viruses, or other harmful code</li>
                <li>Attempt to reverse-engineer our proprietary tools or methodologies</li>
                <li>Use information obtained from the Site to compete with us or solicit our clients</li>
              </ul>
              <p className="mt-2">Violations may result in immediate termination of access and may be referred to law enforcement where appropriate.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">9. Payment Terms</h2>
              <p>Payment terms for our services are specified in individual engagement agreements. General terms include:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Initial consultations and reputation audits are provided free of charge</li>
                <li>Retainer fees are billed monthly in advance unless otherwise agreed</li>
                <li>All fees are in US Dollars unless specified otherwise</li>
                <li>Late payments may incur interest at the rate of 1.5% per month or the maximum permitted by law</li>
                <li>We reserve the right to suspend services for accounts more than 30 days overdue</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">10. Termination</h2>
              <p>Either party may terminate an engagement in accordance with the terms of the individual engagement agreement. Upon termination:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>All outstanding fees become immediately due and payable</li>
                <li>Confidentiality obligations survive termination indefinitely</li>
                <li>We will provide a final status report of all work performed</li>
                <li>Content created during the engagement remains subject to the engagement agreement</li>
                <li>We will securely delete or return client data upon request, subject to legal retention requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">11. Disclaimer of Warranties</h2>
              <p>This Site is provided on an "AS IS" and "AS AVAILABLE" basis. To the maximum extent permitted by applicable law, we disclaim all warranties, express or implied, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                <li>Warranties regarding the accuracy, reliability, completeness, or timeliness of content</li>
                <li>Warranties that the Site will be uninterrupted, error-free, or free of viruses</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">12. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Celebrity Reputation Management Agency, its officers, directors, employees, and agents shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, goodwill, or anticipated savings</li>
                <li>Damages arising from third-party actions, including search engine algorithm changes</li>
              </ul>
              <p className="mt-2">Our total aggregate liability for any claim related to the Site or our services shall not exceed the total amount you have paid us for services in the twelve (12) months preceding the claim.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">13. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless Celebrity Reputation Management Agency and its officers, directors, employees, and agents from any claims, losses, damages, liabilities, and expenses (including reasonable attorneys' fees) arising from:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Your use of the Site or our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any law or the rights of any third party</li>
                <li>Any false or misleading information you provide</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">14. External Links</h2>
              <p>Our Site may contain links to third-party websites. We do not endorse and are not responsible for the content, terms, privacy practices, or availability of linked sites. Your use of third-party sites is at your own risk.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">15. Not Legal Advice</h2>
              <p>Content on this Site, including blog articles, guides, and resource pages, is provided for informational purposes only and does not constitute legal, financial, or professional advice. For legal matters relating to defamation, privacy, intellectual property, or any other area of law, consult a qualified attorney in your jurisdiction. Our services are not a substitute for legal representation.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">16. Dispute Resolution</h2>
              <p>In the event of a dispute arising from these Terms or your use of the Site:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li><strong>Informal Resolution:</strong> The parties shall first attempt to resolve the dispute through good-faith negotiation for a period of 30 days</li>
                <li><strong>Mediation:</strong> If negotiation fails, the parties agree to submit to non-binding mediation before a mutually agreed mediator</li>
                <li><strong>Arbitration:</strong> If mediation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association (AAA), unless you are a consumer in the UK or EU, in which case your local consumer rights apply</li>
              </ul>
              <p className="mt-2"><strong>Class Action Waiver:</strong> To the extent permitted by law, you agree to resolve disputes on an individual basis and waive the right to participate in a class action or class-wide arbitration.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">17. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. For clients based in the United Kingdom, UK consumer protection laws apply where applicable. For clients in the European Union, mandatory consumer protection provisions of your country of residence shall apply to the extent they cannot be waived.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">18. Force Majeure</h2>
              <p>Neither party shall be liable for failure to perform obligations due to circumstances beyond its reasonable control, including but not limited to: natural disasters, pandemics, government actions, internet outages, search engine algorithm changes, platform policy changes, war, terrorism, or civil unrest.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">19. Severability</h2>
              <p>If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its original intent.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">20. Entire Agreement</h2>
              <p>These Terms, together with our Privacy Policy and any individual engagement agreements, constitute the entire agreement between you and Celebrity Reputation Management Agency regarding your use of the Site. These Terms supersede all prior or contemporaneous communications and proposals, whether oral or written.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">21. Changes to These Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Material changes will be posted on this page with an updated date. Where required by law or by the terms of an active engagement, we will provide direct notice of significant changes. Continued use of the Site after changes constitutes acceptance of the revised Terms.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">22. Contact</h2>
              <p>For questions about these Terms, contact us:</p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:contact@celebrity-reputation-management.com" className="text-gold hover:text-gold-light transition-colors">contact@celebrity-reputation-management.com</a><br />
                <strong>Phone:</strong> <a href="tel:+16462224346" className="text-gold hover:text-gold-light transition-colors">(646) 222-4346</a>
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