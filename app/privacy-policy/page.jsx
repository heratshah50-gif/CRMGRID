import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – CRM Basegrid",
  description: "How CRM Basegrid collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <header className="border-b border-[var(--border)] bg-[var(--bg-card)] px-6 py-4">
        <div className="max-w-[900px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline text-[var(--text)] font-bold text-xl">
            <div className="w-9 h-9 grid grid-cols-2 grid-rows-2 gap-0.5 flex-shrink-0 rounded-sm overflow-hidden">
              <div className="bg-[var(--accent)]" /><div className="bg-[var(--accent)]" />
              <div className="bg-[var(--accent)]" /><div className="bg-[var(--accent)]" />
            </div>
            CRM Basegrid
          </Link>
          <Link href="/" className="text-[var(--text-muted)] text-sm hover:text-[var(--accent)] transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[var(--text)] mb-2">Privacy Policy</h1>
        <p className="text-[var(--text-muted)] text-sm mb-10">Last updated: January 2026</p>

        <div className="prose prose-slate max-w-none space-y-10 text-[var(--text)]">
          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">1. Introduction</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              CRM Basegrid (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our customer relationship management (CRM) platform and related services. By using CRM Basegrid, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">2. Information We Collect</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We collect information that you provide directly and information that we obtain automatically when you use our services.
            </p>
            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 text-[var(--text-muted)] space-y-2 mb-4">
              <li><strong className="text-[var(--text)]">Account data:</strong> Name, email address, phone number, company name, job title, and billing/shipping addresses when you register or update your account.</li>
              <li><strong className="text-[var(--text)]">Customer and contact data:</strong> Information you store in the CRM about your customers, leads, and contacts (e.g., names, emails, phone numbers, notes, and custom fields).</li>
              <li><strong className="text-[var(--text)]">Communications:</strong> Messages you send to us, feedback, and support requests.</li>
              <li><strong className="text-[var(--text)]">Payment information:</strong> Billing details processed by our payment providers; we do not store full card numbers on our servers.</li>
            </ul>
            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">2.2 Information We Collect Automatically</h3>
            <ul className="list-disc pl-6 text-[var(--text-muted)] space-y-2 mb-4">
              <li><strong className="text-[var(--text)]">Usage data:</strong> How you use the platform (features used, pages viewed, actions taken) to improve our services and analytics.</li>
              <li><strong className="text-[var(--text)]">Device and log data:</strong> IP address, browser type, operating system, device identifiers, and access times.</li>
              <li><strong className="text-[var(--text)]">Cookies and similar technologies:</strong> We use cookies and similar technologies for authentication, preferences, and analytics. You can manage cookie preferences in your browser.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">3. How We Use Your Information</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-[var(--text-muted)] space-y-2 mb-4">
              <li>Provide, operate, and maintain the CRM platform and related services.</li>
              <li>Process your registration, authenticate you (including via one-time passwords), and manage your account.</li>
              <li>Process payments and manage subscriptions and billing.</li>
              <li>Send you service-related communications, security alerts, and product updates.</li>
              <li>Improve our products and services, including through analytics and research.</li>
              <li>Comply with legal obligations and enforce our terms and policies.</li>
              <li>Respond to your requests and provide customer support.</li>
            </ul>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We do not sell your personal information or your customers&apos; data to third parties for advertising. We use your data only for the purposes you request or instruct, consistent with this policy and our agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">4. Data Protection and Security</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your data, including encryption in transit and at rest, access controls, and regular security assessments. We follow industry standards and, where applicable, frameworks such as GDPR and the EU-U.S. Data Privacy Framework. Our approach is based on transparency, control, security, compliance, and partnership with our customers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">5. Third-Party Sharing</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-[var(--text-muted)] space-y-2 mb-4">
              <li><strong className="text-[var(--text)]">Service providers:</strong> Third parties that help us operate our platform (e.g., hosting, payment processing, email delivery, analytics). They are contractually bound to use data only for providing services to us and to protect your information.</li>
              <li><strong className="text-[var(--text)]">Legal and safety:</strong> When required by law, to protect our rights and safety, or to respond to valid legal process.</li>
              <li><strong className="text-[var(--text)]">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, subject to the same privacy commitments.</li>
            </ul>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We do not sell your data to third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">6. Your Rights and Choices</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 text-[var(--text-muted)] space-y-2 mb-4">
              <li>Access and receive a copy of your personal data.</li>
              <li>Correct or update inaccurate data.</li>
              <li>Request deletion of your personal data, subject to legal and contractual retention requirements.</li>
              <li>Object to or restrict certain processing of your data.</li>
              <li>Data portability (receive your data in a structured, machine-readable format).</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Lodge a complaint with a supervisory authority in your jurisdiction.</li>
            </ul>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              To exercise these rights or for privacy-related questions, contact us at the email address provided below. We will respond within the timeframes required by applicable law. We may need to verify your identity before processing requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">7. Data Retention</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We retain your information for as long as your account is active or as needed to provide you services, comply with legal obligations, resolve disputes, and enforce our agreements. When you delete your account or request deletion, we will delete or anonymize your personal data in accordance with our retention policy and applicable law, except where we must retain data for legal or legitimate business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">8. International Transfers</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards (such as standard contractual clauses or adequacy decisions) are in place where required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">9. Changes to This Policy</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically. Continued use of CRM Basegrid after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">10. Contact Us</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              For privacy inquiries, to exercise your rights, or to report a concern, contact us at:
            </p>
            <p className="text-[var(--text)] font-medium">
              CRM Basegrid – Privacy<br />
              Email: privacy@crmbasegrid.com<br />
              Address: [Your company address]
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-wrap gap-4">
          <Link href="/" className="text-[var(--accent)] font-medium hover:underline">Back to home</Link>
          <Link href="/terms" className="text-[var(--accent)] font-medium hover:underline">Terms and Conditions</Link>
          <Link href="/login" className="text-[var(--accent)] font-medium hover:underline">Log in</Link>
        </div>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--bg-card)] py-6 mt-12">
        <p className="text-center text-[var(--text-muted)] text-sm">© 2026 CRM Basegrid. All rights reserved.</p>
      </footer>
    </div>
  );
}
