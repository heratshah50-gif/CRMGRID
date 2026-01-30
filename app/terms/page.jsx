import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions – CRM Basegrid",
  description: "Terms of Service and conditions for using CRM Basegrid.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <header className="border-b border-[var(--border)] bg-[var(--bg-card)] px-6 py-4">
        <div className="max-w-[900px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline text-[var(--text)] font-bold text-xl">
            <span className="logo-icon text-[1.1rem]">C</span>
            CRM Basegrid
          </Link>
          <Link href="/" className="text-[var(--text-muted)] text-sm hover:text-[var(--accent)] transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[var(--text)] mb-2">Terms and Conditions</h1>
        <p className="text-[var(--text-muted)] text-sm mb-10">Last updated: January 2026</p>

        <div className="prose prose-slate max-w-none space-y-10 text-[var(--text)]">
          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">1. Agreement to Terms</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the CRM Basegrid platform, website, and related services (&quot;Service&quot;) provided by CRM Basegrid (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By registering for an account, logging in (including via one-time password), or otherwise using the Service, you agree to be bound by these Terms. If you do not agree, you may not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">2. Account Registration and Eligibility</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              You must be at least 18 years of age and have the legal capacity to enter into a binding agreement to use the Service. You are responsible for providing accurate and complete registration information and for keeping your account credentials (including email and one-time passwords) secure. You are responsible for all activity under your account. You must notify us promptly of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">3. Subscription, Billing, and Free Trial</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Access to the Service may be subject to a subscription plan (e.g., Starter, Professional, Enterprise). Fees, billing cycles, and payment terms are as described at the time of sign-up or in your order form. We may offer a free trial; after the trial ends, your subscription will convert to a paid plan unless you cancel. Subscriptions typically renew automatically unless you cancel before the renewal date. You may cancel in accordance with our cancellation policy. Refunds are handled in accordance with our refund policy as stated at the time of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">4. License and Use of the Service</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Subject to your compliance with these Terms and payment of applicable fees, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your internal business purposes during the subscription term. You may not: (a) copy, modify, distribute, sell, or create derivative works of the Service or our content; (b) reverse engineer, decompile, or disassemble the Service except where permitted by law; (c) use the Service to build a competing product or service; (d) remove or alter any proprietary notices; or (e) use the Service in any way that violates applicable law or these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">5. Intellectual Property</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We retain all right, title, and interest in and to the Service, including all software, designs, text, graphics, and other content we provide, and all intellectual property rights therein. You retain ownership of the data and content you upload or create in the Service (&quot;Your Data&quot;). You grant us a license to use, store, and process Your Data as necessary to provide and improve the Service and as described in our Privacy Policy. You represent that you have the right to provide Your Data and that doing so does not infringe any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">6. Acceptable Use</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 text-[var(--text-muted)] space-y-2 mb-4">
              <li>Violate any applicable law, regulation, or third-party rights.</li>
              <li>Send spam, unsolicited messages, or engage in phishing or fraudulent activity.</li>
              <li>Upload or transmit malware, viruses, or other harmful code.</li>
              <li>Attempt to gain unauthorized access to the Service, other accounts, or our systems or networks.</li>
              <li>Interfere with or disrupt the integrity or performance of the Service.</li>
              <li>Use the Service to store or transmit illegal, defamatory, or infringing content.</li>
              <li>Resell or sublicense the Service without our prior written consent.</li>
            </ul>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We may suspend or terminate your account and access to the Service if we reasonably believe you have violated these Terms or our Acceptable Use policy. We may also remove or disable content that violates these Terms or applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">7. Data Privacy and Security</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Our collection, use, and protection of your data are described in our Privacy Policy. By using the Service, you consent to such processing. You are responsible for ensuring that your use of the Service and Your Data comply with applicable data protection laws (e.g., GDPR, CCPA) and that you have any necessary consents from your customers or contacts whose data you store in the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">8. Service Availability and Modifications</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We strive to keep the Service available but do not guarantee uninterrupted or error-free access. We may modify, suspend, or discontinue the Service or any part of it with reasonable notice where practicable. We may also update these Terms from time to time; we will notify you of material changes by posting the updated Terms on this page and updating the &quot;Last updated&quot; date. Continued use of the Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">9. Disclaimers</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE. YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">10. Limitation of Liability</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE (AND OUR AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS) SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, DATA, REVENUE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM (OR, IF NO FEES WERE PAID, ONE HUNDRED U.S. DOLLARS ($100)). SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES; IN SUCH CASES, THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">11. Indemnification</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless CRM Basegrid and its affiliates, officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to: (a) your use of the Service; (b) Your Data or your violation of any third-party rights; (c) your violation of these Terms or applicable law; or (d) any dispute between you and a third party related to the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">12. Termination</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              You may terminate your account at any time through the Service or by contacting us. We may suspend or terminate your account and access to the Service at any time for cause, including breach of these Terms, non-payment, or as required by law. Upon termination, your right to use the Service ceases. We may retain Your Data in accordance with our Privacy Policy and data retention practices. Sections that by their nature should survive (e.g., Intellectual Property, Disclaimers, Limitation of Liability, Indemnification, Governing Law) will survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">13. Governing Law and Disputes</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              These Terms are governed by the laws of [Your jurisdiction], without regard to conflict of law principles. Any dispute arising out of or related to these Terms or the Service shall be resolved exclusively in the courts of [Your jurisdiction]. You agree to submit to the personal jurisdiction of such courts. Where permitted, you and we may agree to resolve disputes by binding arbitration in accordance with applicable arbitration rules; in such case, the arbitrator&apos;s award shall be final and binding.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">14. General</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              These Terms, together with our Privacy Policy and any order form or subscription agreement, constitute the entire agreement between you and CRM Basegrid regarding the Service. If any provision of these Terms is held invalid or unenforceable, the remaining provisions will remain in effect. Our failure to enforce any right or provision does not waive that right or provision. You may not assign these Terms without our prior written consent; we may assign these Terms in connection with a merger, acquisition, or sale of assets. Nothing in these Terms creates a partnership, joint venture, or agency relationship between you and us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)] mb-3">15. Contact</h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              For questions about these Terms or the Service, contact us at:
            </p>
            <p className="text-[var(--text)] font-medium">
              CRM Basegrid – Legal<br />
              Email: legal@crmbasegrid.com<br />
              Address: [Your company address]
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-wrap gap-4">
          <Link href="/" className="text-[var(--accent)] font-medium hover:underline">Back to home</Link>
          <Link href="/privacy-policy" className="text-[var(--accent)] font-medium hover:underline">Privacy Policy</Link>
          <Link href="/login" className="text-[var(--accent)] font-medium hover:underline">Log in</Link>
        </div>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--bg-card)] py-6 mt-12">
        <p className="text-center text-[var(--text-muted)] text-sm">© 2026 CRM Basegrid. All rights reserved.</p>
      </footer>
    </div>
  );
}
