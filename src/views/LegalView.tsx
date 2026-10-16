import React from 'react';
import { OFFICE_INFO } from '../data/websiteData.ts';

interface LegalViewProps {
  type: 'privacy-policy' | 'terms-of-service';
  onNavigate: (page: string) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy-policy';

  return (
    <div className="w-full bg-white">
      {/* PAGE HEADER */}
      <section className="page-header-ambient border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs font-medium text-slate-500 mb-6 flex items-center gap-1.5">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-slate-900 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
            </span>
          </nav>

          <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-[0.16em] block mb-2">
            Legal &amp; Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a2540] tracking-tight mb-2">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
          <p className="text-xs font-mono text-slate-500">
            Last updated: 13 July 2026 &bull; Mill Engineering
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Draft Disclaimer Card (From user HTML) */}
          <div className="p-5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-950 leading-relaxed font-medium">
            Draft document &mdash; generic corporate boilerplate, not legal advice. This has not been reviewed by a lawyer. Have it reviewed by qualified legal counsel, particularly for compliance with India's Digital Personal Data Protection Act (DPDP Act 2023), before relying on it.
          </div>

          {isPrivacy ? (
            <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">1. Introduction</h3>
                <p>
                  Mill Engineering ("we", "us", "our") operates the website www.milleng.in. This Privacy Policy explains how we collect, use and protect information you provide when you visit our website or submit an enquiry.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">2. Information We Collect</h3>
                <p>
                  Contact details submitted through enquiry forms (name, company, designation, email, phone, industry, message); standard technical data collected automatically (IP address, browser type, pages visited) via analytics tools; and any information you voluntarily provide by email or phone.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">3. How We Use Information</h3>
                <p>
                  To respond to enquiries, improve our website, and maintain records of business communication. We do not sell or rent personal information to third parties.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">4. Cookies &amp; Analytics</h3>
                <p>
                  Our website may use cookies and analytics tools such as Google Analytics. You can disable cookies through your browser settings.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">5. Data Sharing</h3>
                <p>
                  We do not share personal information with third parties except where required to respond to your enquiry, comply with law, or with service providers who help operate this website under confidentiality obligations.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">6. Data Retention</h3>
                <p>
                  We retain enquiry information only as long as necessary to respond to your request and maintain reasonable business records.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">7. Your Rights</h3>
                <p>
                  You may request access to, correction of, or deletion of your personal information by contacting us using the details below.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">8. Security</h3>
                <p>
                  We take reasonable technical and organizational measures to protect information submitted through this website, but no method of transmission over the internet is completely secure.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">9. Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy periodically. The date above reflects the most recent revision.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">10. Contact Us</h3>
                <p>
                  Mill Engineering<br />
                  {OFFICE_INFO.address.line1}, {OFFICE_INFO.address.line2}<br />
                  Phone: {OFFICE_INFO.phoneNumbers[0].display} / {OFFICE_INFO.phoneNumbers[1].display}<br />
                  Email: {OFFICE_INFO.email}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">1. Acceptance of Terms</h3>
                <p>
                  By accessing www.milleng.in, you agree to these Terms of Service. If you do not agree, please do not use this website.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">2. Use of Website</h3>
                <p>
                  This website is provided for informational purposes about the engineering services offered by Mill Engineering. You may not use it for any unlawful purpose or transmit harmful code, and may not copy, reproduce or redistribute content without written permission.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">3. Intellectual Property</h3>
                <p>
                  All content on this website, including text, graphics, logos and images, is the property of Mill Engineering unless otherwise stated, and is protected by applicable intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">4. No Warranty</h3>
                <p>
                  This website and its content are provided "as is" without warranties of any kind, express or implied. We do not guarantee the website will be error-free or uninterrupted.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">5. Limitation of Liability</h3>
                <p>
                  Mill Engineering shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">6. Enquiries &amp; Communications</h3>
                <p>
                  Submitting an enquiry through this website does not create a binding contractual relationship. Any business engagement will be governed by a separate written agreement.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">7. External Links</h3>
                <p>
                  This website may contain links to third-party websites. We are not responsible for the content or practices of external sites.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">8. Governing Law</h3>
                <p>
                  These Terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts in Chhattisgarh.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">9. Changes to These Terms</h3>
                <p>
                  We may update these Terms periodically. Continued use of the website after changes constitutes acceptance of the revised Terms.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0a2540] mb-1">10. Contact Us</h3>
                <p>
                  Mill Engineering<br />
                  {OFFICE_INFO.address.line1}, {OFFICE_INFO.address.line2}<br />
                  Phone: {OFFICE_INFO.phoneNumbers[0].display} / {OFFICE_INFO.phoneNumbers[1].display}<br />
                  Email: {OFFICE_INFO.email}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
