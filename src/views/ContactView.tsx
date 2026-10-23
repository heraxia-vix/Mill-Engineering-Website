import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { OFFICE_INFO } from '../data/websiteData.ts';
import { submitWebsiteForm } from '../utils/formSubmission';

interface ContactViewProps {
  onNavigate: (page: string) => void;
  prefilledTopic?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, prefilledTopic = '' }) => {
  const emptyForm = {
    name: '', company: '', designation: '', industry: '', email: '', phone: '',
    message: prefilledTopic ? `Regarding: ${prefilledTopic}\n\n` : ''
  };
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await submitWebsiteForm(
        OFFICE_INFO.email,
        `Website Enquiry | ${formData.company} | ${formData.industry || 'General'}`,
        {
          name: formData.name,
          company: formData.company,
          designation: formData.designation || 'Not provided',
          industry: formData.industry || 'Not provided',
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message
        }
      );
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to submit the enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white">
      <section className="page-header-ambient border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs font-medium text-slate-500 mb-6 flex items-center gap-1.5">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-900 transition-colors">Home</button>
            <span>/</span><span className="text-slate-900 font-semibold">Contact</span>
          </nav>
          <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-[0.16em] block mb-2">Contact</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a2540] tracking-tight mb-4">Discuss Your Engineering Challenge</h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">Whether you are planning a modernization project, evaluating a new technology or seeking an experienced engineering partner, our team is ready to discuss your application and identify practical engineering solutions tailored to your objectives.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0a2540] mb-6">Office</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-100/80 text-sky-700 flex items-center justify-center shrink-0 mt-0.5"><MapPin className="w-5 h-5" /></div>
                    <div><span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Address</span><p className="text-sm font-bold text-slate-900 mt-0.5">{OFFICE_INFO.name}</p><p className="text-sm text-slate-700 leading-snug mt-0.5">{OFFICE_INFO.address.line1}, {OFFICE_INFO.address.line2}</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-100/80 text-sky-700 flex items-center justify-center shrink-0 mt-0.5"><Phone className="w-5 h-5" /></div>
                    <div><span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Phone</span><div className="mt-0.5 space-y-0.5">{OFFICE_INFO.phoneNumbers.map((p, idx) => <div key={idx}><a href={`tel:${p.raw}`} className="text-sm font-semibold text-slate-800 hover:text-[#0066cc] transition-colors">{p.display}</a></div>)}</div></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-100/80 text-sky-700 flex items-center justify-center shrink-0 mt-0.5"><Mail className="w-5 h-5" /></div>
                    <div><span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Email</span><a href={`mailto:${OFFICE_INFO.email}`} className="text-sm font-semibold text-[#0066cc] hover:underline mt-0.5 block">{OFFICE_INFO.email}</a></div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[4/3] bg-slate-100">
                <iframe title="Mill Engineering location map" width="100%" height="100%" style={{ border: 0, display: 'block' }} loading="lazy" src="https://www.google.com/maps?q=Surya%20Treasure%20Island%2C%20Junwani%2C%20Bhilai%2C%20Chhattisgarh&output=embed" />
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600"><span className="font-semibold text-slate-800">Response commitment: </span>{OFFICE_INFO.responseCommitment}</div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-100">
              <div className="mb-6"><h2 className="text-2xl font-bold text-[#0a2540]">Send an Enquiry</h2><p className="text-xs text-slate-500 mt-1">Fields marked * are required.</p></div>
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto"><CheckCircle2 className="w-10 h-10" /></div>
                  <h3 className="text-2xl font-bold text-slate-900">Your enquiry has been received.</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">Thank you. Your enquiry has been securely submitted to Mill Engineering. A member of our engineering team will respond within one business day.</p>
                  <div className="pt-4 flex justify-center gap-4">
                    <button onClick={() => onNavigate('home')} className="px-5 py-2.5 bg-[#0a2540] hover:bg-[#0c2f52] text-white font-semibold text-xs rounded-lg">Back to Home</button>
                    <button onClick={() => { setSubmitted(false); setError(''); }} className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg">Send Another Enquiry</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="block text-xs font-semibold text-slate-700 mb-1">Name *</label><input type="text" required placeholder="Enter your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" /></div>
                    <div><label className="block text-xs font-semibold text-slate-700 mb-1">Company *</label><input type="text" required placeholder="Enter company or organization" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" /></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="block text-xs font-semibold text-slate-700 mb-1">Designation</label><input type="text" placeholder="Enter designation or role" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" /></div>
                    <div><label className="block text-xs font-semibold text-slate-700 mb-1">Industry</label><select value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white"><option value="">Select an industry</option><option value="Steel & Metals">Steel &amp; Metals</option><option value="Mining & Mineral Processing">Mining &amp; Mineral Processing</option><option value="Hydropower">Hydropower</option><option value="Cement">Cement</option><option value="Automotive">Automotive</option><option value="Other">Other</option></select></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="block text-xs font-semibold text-slate-700 mb-1">Email *</label><input type="email" required placeholder="Enter your work email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" /></div>
                    <div><label className="block text-xs font-semibold text-slate-700 mb-1">Phone</label><input type="tel" placeholder="Enter phone or mobile number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" /></div>
                  </div>
                  <div><label className="block text-xs font-semibold text-slate-700 mb-1">Message *</label><textarea rows={5} required placeholder="Tell us about your engineering challenge..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full p-3.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 leading-relaxed" /></div>
                  {error && <div className="p-3 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs leading-relaxed">{error}</div>}
                  <div className="pt-2"><button type="submit" disabled={isSubmitting} className="w-full py-3.5 px-6 bg-[#0a2540] hover:bg-[#0c2f52] text-white font-semibold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50">{isSubmitting ? 'Submitting Enquiry...' : <><Send className="w-4 h-4" />Submit Enquiry</>}</button></div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
