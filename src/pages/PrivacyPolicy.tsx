import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Celebrity Reputation Management Agency";
  }, []);

  return (
    <PageLayout>
      <section className="bg-primary pt-[120px] pb-[clamp(40px,5vw,60px)]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-primary-foreground font-bold tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/40 text-sm">Last updated: February 22, 2026</p>
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
              <p><strong>Personal Information You Provide:</strong> When you submit our contact or consultation forms, we collect your name, email address, phone number, industry, and the details you share about your situation. All submissions are treated as confidential.</p>
              <p className="mt-2"><strong>Automatically Collected Information:</strong> We may collect your IP address, browser type, operating system, referring URLs, pages visited, and timestamps through standard web server logs and analytics tools.</p>
              <p className="mt-2"><strong>Cookies:</strong> We use essential cookies for site functionality and analytics cookies to understand how visitors use our site. You can control cookie preferences through your browser settings.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>To respond to your enquiries and provide reputation management services</li>
                <li>To conduct reputation audits you have requested</li>
                <li>To communicate with you about our services</li>
                <li>To improve our website and user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="mt-2">We will <strong>never</strong> sell, rent, or share your personal information with third parties for their marketing purposes.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">4. Confidentiality</h2>
              <p>We understand the sensitive nature of reputation management. All client enquiries are treated with the highest level of confidentiality. Upon engagement, a mutual Non-Disclosure Agreement (NDA) is executed before any substantive discussion takes place. We do not maintain a public client list and have never disclosed a client's identity without their explicit prior consent.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">5. Data Security</h2>
              <p>We implement industry-standard security measures including encryption, access controls, and secure data storage to protect your information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">6. Data Retention</h2>
              <p>We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law. Contact form submissions are retained for up to 24 months unless you request earlier deletion.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data ("right to be forgotten")</li>
                <li>Object to or restrict processing of your data</li>
                <li>Request data portability</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:hello@celebrity-reputation-management.com" className="text-gold hover:text-gold-light transition-colors font-medium">hello@celebrity-reputation-management.com</a>.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">8. International Data Transfers</h2>
              <p>We operate in the United States, United Kingdom, and internationally. Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place in accordance with applicable data protection laws, including UK GDPR and EU GDPR where applicable.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">9. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites and encourage you to review their privacy policies independently.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Material changes will be posted on this page with an updated "Last updated" date. Continued use of our website after changes constitutes acceptance of the revised policy.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-3">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or wish to exercise your data rights, contact us:</p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:hello@celebrity-reputation-management.com" className="text-gold hover:text-gold-light transition-colors">hello@celebrity-reputation-management.com</a><br />
                <strong>Phone:</strong> <a href="tel:+18005550199" className="text-gold hover:text-gold-light transition-colors">1-800-555-0199</a> (available 24/7)
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
