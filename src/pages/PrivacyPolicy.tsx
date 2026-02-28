import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import usePageSEO from "@/hooks/usePageSEO";

const PrivacyPolicy = () => {
  usePageSEO({
    title: "Privacy Policy | Celebrity Reputation Management Agency",
    description: "Privacy policy for Celebrity Reputation Management Agency. How we collect, use, and protect your personal information.",
  });

  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(40px,5vw,60px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-primary-foreground font-bold tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/40 text-sm">Last updated: February 28, 2026</p>
        </div>
      </section>

      <section className="py-[clamp(40px,6vw,72px)] bg-background">
        <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <div className="space-y-8 text-foreground/80 text-[15px] leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">1. Introduction</h2>
              <p>Celebrity Reputation Management Agency ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>celebrity-reputation-management.com</strong> or engage our services.</p>
              <p className="mt-2">By using our website or services, you consent to the practices described in this policy. If you do not agree, please discontinue use of our site.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">2. Information We Collect</h2>
              <p><strong>Personal Information You Provide:</strong> When you submit our contact or consultation forms, we collect your name, email address, phone number, industry, and the details you share about your situation. All submissions are treated as strictly confidential.</p>
              <p className="mt-2"><strong>Automatically Collected Information:</strong> We may collect your IP address, browser type, operating system, device identifiers, referring URLs, pages visited, and timestamps through standard web server logs and analytics tools.</p>
              <p className="mt-2"><strong>Cookies and Tracking Technologies:</strong> We use essential cookies for site functionality, performance cookies for speed optimisation, and analytics cookies to understand how visitors use our site. We also use local storage for user preferences. You can control cookie preferences through your browser settings. For more information, see Section 12 below.</p>
              <p className="mt-2"><strong>Third-Party Data:</strong> We may receive information from publicly available sources during the course of our reputation management services. This data is used solely for the purposes of client engagements and is subject to all confidentiality protections described herein.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3. Legal Basis for Processing (GDPR / UK GDPR)</h2>
              <p>Where applicable under the General Data Protection Regulation (GDPR) or UK GDPR, we process your personal data on the following legal bases:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li><strong>Consent:</strong> When you voluntarily submit a form or subscribe to communications</li>
                <li><strong>Contractual Necessity:</strong> When processing is necessary to perform our services under an engagement agreement</li>
                <li><strong>Legitimate Interest:</strong> For website analytics, security, and fraud prevention, balanced against your privacy rights</li>
                <li><strong>Legal Obligation:</strong> When we are required to retain or disclose data under applicable law</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">4. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>To respond to your enquiries and provide reputation management services</li>
                <li>To conduct reputation audits you have requested</li>
                <li>To communicate with you about our services, including service updates and follow-ups</li>
                <li>To improve our website, services, and user experience</li>
                <li>To detect, prevent, and address fraud, abuse, or technical issues</li>
                <li>To comply with legal obligations, resolve disputes, and enforce our agreements</li>
                <li>To send you relevant industry insights or updates (only with your prior consent, and you may unsubscribe at any time)</li>
              </ul>
              <p className="mt-2">We will <strong>never</strong> sell, rent, or share your personal information with third parties for their marketing purposes.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">5. Confidentiality</h2>
              <p>We understand the highly sensitive nature of reputation management. All client enquiries are treated with the highest level of confidentiality. Upon engagement, a mutual Non-Disclosure Agreement (NDA) is executed before any substantive discussion takes place. We do not maintain a public client list and have never disclosed a client's identity without their explicit prior consent.</p>
              <p className="mt-2">All team members are bound by confidentiality agreements, and access to client data is restricted on a need-to-know basis. We employ role-based access controls and audit trails for all client data access.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">6. Data Security</h2>
              <p>We implement industry-standard and enterprise-grade security measures to protect your information, including:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>TLS/SSL encryption for all data transmitted between your browser and our servers</li>
                <li>Encryption at rest for all stored personal data</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Multi-factor authentication for all internal systems</li>
                <li>Access controls and audit logs for client data</li>
                <li>Employee security training and background checks</li>
              </ul>
              <p className="mt-2">However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security. In the event of a data breach, we will notify affected individuals and relevant authorities in accordance with applicable law.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">7. Data Retention</h2>
              <p>We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law. Specific retention periods include:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li><strong>Contact form submissions:</strong> Retained for up to 24 months unless you request earlier deletion</li>
                <li><strong>Client engagement data:</strong> Retained for the duration of the engagement plus 7 years for legal and regulatory compliance</li>
                <li><strong>Website analytics data:</strong> Aggregated and anonymised within 26 months</li>
                <li><strong>Financial records:</strong> Retained for 7 years as required by tax and accounting regulations</li>
              </ul>
              <p className="mt-2">Upon expiry of retention periods, data is securely deleted or irreversibly anonymised.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">8. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the following rights under GDPR, UK GDPR, CCPA, or other applicable privacy laws:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong>Restriction:</strong> Request that we restrict processing of your data</li>
                <li><strong>Data Portability:</strong> Request a machine-readable copy of your data</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests or direct marketing</li>
                <li><strong>Withdraw Consent:</strong> Where processing is based on consent, withdraw it at any time without affecting the lawfulness of prior processing</li>
                <li><strong>Non-Discrimination (CCPA):</strong> California residents will not be discriminated against for exercising their privacy rights</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:contact@celebrity-reputation-management.com" className="text-gold hover:text-gold-light transition-colors font-medium">contact@celebrity-reputation-management.com</a>. We will respond within 30 days (or sooner where required by law).</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">9. California Privacy Rights (CCPA / CPRA)</h2>
              <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>The right to know what personal information we collect, use, disclose, and sell</li>
                <li>The right to delete your personal information</li>
                <li>The right to opt-out of the sale or sharing of your personal information</li>
                <li>The right to correct inaccurate personal information</li>
                <li>The right to limit use of sensitive personal information</li>
              </ul>
              <p className="mt-2">We do <strong>not</strong> sell personal information. We do <strong>not</strong> share personal information for cross-context behavioural advertising. To submit a CCPA request, email <a href="mailto:contact@celebrity-reputation-management.com" className="text-gold hover:text-gold-light transition-colors">contact@celebrity-reputation-management.com</a>.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">10. International Data Transfers</h2>
              <p>We operate in the United States, United Kingdom, and internationally. Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place in accordance with applicable data protection laws, including:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>UK International Data Transfer Agreements (IDTAs) where applicable</li>
                <li>Ensuring receiving countries provide adequate levels of data protection</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">11. Third-Party Services and Sharing</h2>
              <p>We may share your information with the following categories of third parties, solely for the purposes described in this policy:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li><strong>Service providers:</strong> Hosting, analytics, email delivery, and payment processing partners who are contractually bound to protect your data</li>
                <li><strong>Professional advisors:</strong> Legal counsel, accountants, and auditors under professional confidentiality obligations</li>
                <li><strong>Law enforcement:</strong> When required by law, subpoena, or court order</li>
              </ul>
              <p className="mt-2">We do not share client data with other clients, competitors, media outlets, or any party outside the scope of our engagement.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">12. Cookies Policy</h2>
              <p>Our website uses the following categories of cookies:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li><strong>Strictly Necessary:</strong> Required for the website to function (session management, security). These cannot be disabled.</li>
                <li><strong>Performance:</strong> Help us understand how visitors interact with our site by collecting anonymised usage data.</li>
                <li><strong>Functional:</strong> Remember your preferences and settings to enhance your experience.</li>
              </ul>
              <p className="mt-2">You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality. We do not use advertising or tracking cookies.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">13. Children's Privacy</h2>
              <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete it promptly. If you believe we may have collected information from a child, please contact us immediately.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">14. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites and encourage you to review their privacy policies independently before providing any personal information.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">15. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Material changes will be posted on this page with an updated "Last updated" date. Where required by law, we will notify you directly of significant changes. Continued use of our website after changes constitutes acceptance of the revised policy.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">16. Data Protection Officer</h2>
              <p>For GDPR and UK GDPR purposes, our designated Data Protection contact can be reached at:</p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:contact@celebrity-reputation-management.com" className="text-gold hover:text-gold-light transition-colors">contact@celebrity-reputation-management.com</a><br />
                <strong>Phone:</strong> <a href="tel:+16462224346" className="text-gold hover:text-gold-light transition-colors">(646) 222-4346</a> (available 24/7)
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">17. Complaints</h2>
              <p>If you are not satisfied with our response to a privacy concern, you have the right to lodge a complaint with a supervisory authority:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li><strong>UK:</strong> Information Commissioner's Office (ICO) — <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">ico.org.uk</a></li>
                <li><strong>EU:</strong> Your local Data Protection Authority</li>
                <li><strong>US:</strong> Federal Trade Commission (FTC) — <a href="https://ftc.gov" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">ftc.gov</a></li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">18. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or wish to exercise your data rights, contact us:</p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:contact@celebrity-reputation-management.com" className="text-gold hover:text-gold-light transition-colors">contact@celebrity-reputation-management.com</a><br />
                <strong>Phone:</strong> <a href="tel:+16462224346" className="text-gold hover:text-gold-light transition-colors">(646) 222-4346</a> (available 24/7)
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

export default PrivacyPolicy;