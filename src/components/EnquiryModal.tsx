import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Send, Building2, User, Mail, Phone } from 'lucide-react';
import { OFFICE_INFO } from '../data/websiteData.ts';
import { submitWebsiteForm } from '../utils/formSubmission';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = ''
}) => {
  const emptyForm = {
    name: '', company: '', designation: '', industry: '', email: '', phone: '', message: ''
  };

  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (defaultTopic) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Regarding: ${defaultTopic}\n\nWe would like to discuss our application requirements.`
      }));
    }
  }, [defaultTopic]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await submitWebsiteForm(
        OFFICE_INFO.email,
        `Engineering Enquiry | ${formData.company} | ${formData.industry || 'General'}`,
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

  const handleReset = () => {
    setSubmitted(false);
    setError('');
    setFormData(emptyForm);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 z-10 border border-slate-200 overflow-hidden my-8">
        <button onClick={onClose} className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close dialog">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Enquiry Received</h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
              Thank you. Your enquiry has been securely submitted to Mill Engineering. Our engineering team will review it and respond within one business day.
            </p>
            <div className="pt-2 p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">Reference Details:</p>
              <p>Contact: {formData.name} &bull; {formData.company}</p>
              <p>Email: {formData.email}</p>
            </div>
            <div className="pt-4">
              <button onClick={handleReset} className="px-6 py-2.5 bg-[#0a2540] hover:bg-[#0e3357] text-white font-semibold text-sm rounded-lg transition-colors">Done</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">Direct Engineering Engagement</span>
              <h2 className="text-2xl font-bold text-[#0a2540] mt-1">Discuss Your Engineering Challenge</h2>
              <p className="text-sm text-slate-600 mt-1">Share your operating context. We evaluate challenges before recommending equipment or modernization strategies.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input type="text" required placeholder="Enter your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization *</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input type="text" required placeholder="Enter company or organization" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Designation / Role</label>
                  <input type="text" placeholder="Enter designation or role" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Industry Sector</label>
                  <select value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white">
                    <option value="">Select an industry</option>
                    <option value="Steel & Metals">Steel &amp; Metals</option>
                    <option value="Mining & Mineral Processing">Mining &amp; Mineral Processing</option>
                    <option value="Hydropower">Hydropower</option>
                    <option value="Cement">Cement</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Other">Other Heavy Industry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input type="email" required placeholder="Enter your work email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / Mobile</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input type="tel" placeholder="Enter phone or mobile number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Describe Your Engineering Challenge *</label>
                <textarea rows={4} required placeholder="Describe your application, equipment, operating conditions, technical challenge or project requirement" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 leading-relaxed" />
              </div>

              {error && <div className="p-3 rounded-lg border border-red-200 bg-red-50 text-red-700 text-xs leading-relaxed">{error}</div>}

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-[11px] text-slate-500">Response within 1 business day &bull; Confidential</span>
                <button type="submit" disabled={isSubmitting} className="px-6 py-2.5 bg-[#0a2540] hover:bg-[#0c2f52] text-white font-semibold text-sm rounded-lg shadow-md transition-all flex items-center gap-2 disabled:opacity-60 cursor-pointer">
                  {isSubmitting ? 'Sending...' : <><Send className="w-4 h-4" />Submit Enquiry</>}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
