import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { OFFICE_INFO } from '../data/websiteData.ts';
import { submitWebsiteForm } from '../utils/formSubmission';

interface TechnologyPartnersViewProps {
  onNavigate: (page: string) => void;
  onOpenEnquiryModal: (topic?: string) => void;
}

export const TechnologyPartnersView: React.FC<TechnologyPartnersViewProps> = ({ onNavigate }) => {
  const [partnerForm, setPartnerForm] = useState({ companyName: '', country: '', contactName: '', email: '', message: '' });
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
        `Technology Partnership Enquiry | ${partnerForm.companyName}`,
        {
          company: partnerForm.companyName,
          country: partnerForm.country,
          contact: partnerForm.contactName,
          email: partnerForm.email,
          message: partnerForm.message
        }
      );
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to submit the partnership enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const partners = [
    { name: 'Braun Maschinenfabrik', logo: '/partners/braun.png' },
    { name: 'NEXTSENSE', logo: '/partners/nextsense.jpeg' },
    { name: 'Hydrowatt AG', logo: '/partners/hydrowatt.png' },
    { name: 'Tiefenbach Wasserhydraulik', logo: '/partners/tiefenbach.png' },
    { name: 'Berger Engineering', logo: '/partners/berger-engineering.png' },
    { name: 'Seebach GmbH', logo: '/partners/seebach.png' },
    { name: 'FRAMAG Austria', logo: '/partners/framag.png' },
    { name: 'Polytec GmbH', logo: '/partners/polytec.jpeg' },
    { name: 'JVK Filtration GmbH', logo: '/partners/jvk-filtration.jpeg' }
  ];

  const pillars = [
    { title: 'Local Engineering Representation', desc: 'Ground-level technical presence in key Indian industrial hubs, handling client inquiries with engineering competence rather than sales deflection.' },
    { title: 'Technical Support Capability', desc: 'Hands-on commissioning, flushing oversight, calibration, and routine on-site troubleshooting performed by qualified fluid power and mechanical engineers.' },
    { title: 'Multi-Industry Market Access', desc: 'Direct operational relationships with key plant managers across Steel & Metals, Mining, Hydropower, Cement and Automotive sectors.' },
    { title: 'Long-Term Collaboration Model', desc: 'Sustainable, non-adversarial representation focused on building your brand’s reputation for reliability and rapid local support.' }
  ];

  const scrollToPartnerForm = () => document.getElementById('partner-enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="w-full bg-white">
      <section className="page-header-ambient border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs font-medium text-slate-500 mb-6 flex items-center gap-1.5"><button onClick={() => onNavigate('home')} className="hover:text-slate-900 transition-colors">Home</button><span>/</span><span className="text-slate-900 font-semibold">Technology Partners</span></nav>
          <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-[0.16em] block mb-2">Technology Partners</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a2540] tracking-tight mb-4">Collaboration with International Technology Companies</h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">Mill Engineering welcomes collaboration with technology companies seeking a technically capable representative and engineering partner in India.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-bold text-[#0a2540] tracking-tight">Why Partner With Mill Engineering</h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">We explain the partnership philosophy, areas of collaboration, technical support capabilities and enquiry process — grounded in engineering credibility rather than overstated claims.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">{pillars.map((pillar, idx) => <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2"><div className="flex items-center gap-2 text-sky-700"><ShieldCheck className="w-5 h-5 shrink-0" /><h3 className="text-sm font-bold text-[#0a2540]">{pillar.title}</h3></div><p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p></div>)}</div>
              <div className="pt-4"><button onClick={scrollToPartnerForm} className="px-6 py-3 bg-[#0a2540] hover:bg-[#0c2f52] text-white font-semibold text-sm rounded-lg shadow-md transition-colors">Become a Technology Partner</button></div>
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[4/5] relative"><img src="/src/assets/images/automotive_press_line_1792053362051.jpg" alt="High-precision industrial equipment partner integration" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6"><div className="text-white space-y-1"><span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest block">India Market Technical Gateway</span><p className="text-sm font-medium text-slate-200">Trusted engineering bridge between global innovators and local heavy plants.</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10"><span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-widest">Technology Network</span><h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mt-2">Technology Partners</h2><p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">A selected network of technology companies whose solutions can be evaluated and integrated for demanding industrial applications in India.</p></div>
          <div className="flex flex-wrap justify-center gap-4">{partners.map((partner) => <div key={partner.name} className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(20%-0.8rem)] min-h-32 rounded-2xl border border-slate-200 bg-white p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"><div className="h-20 w-full flex items-center justify-center"><img src={partner.logo} alt={`${partner.name} logo`} className="max-h-20 max-w-full object-contain" loading="lazy" /></div><span className="text-xs font-semibold tracking-tight text-slate-700 text-center">{partner.name}</span></div>)}</div>
        </div>
      </section>

      <section id="partner-enquiry" className="py-16 bg-white scroll-mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg">
            <div className="text-center max-w-xl mx-auto mb-8"><span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest block mb-1">Technology Representation</span><h2 className="text-2xl sm:text-3xl font-bold text-[#0a2540]">Represent Your Technology in India</h2><p className="text-slate-600 text-xs sm:text-sm mt-2">Connect with our team regarding your technology, products, and target industrial sectors.</p></div>
            {submitted ? (
              <div className="py-8 text-center space-y-3"><div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto"><CheckCircle2 className="w-8 h-8" /></div><h3 className="text-xl font-bold text-slate-900">Partnership Details Received</h3><p className="text-xs text-slate-600 max-w-md mx-auto">Thank you. Your partnership enquiry has been securely submitted to Mill Engineering. Our business and engineering leadership will review the opportunity.</p><button onClick={() => { setSubmitted(false); setError(''); setPartnerForm({ companyName: '', country: '', contactName: '', email: '', message: '' }); }} className="mt-3 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg">Submit Another Enquiry</button></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="block text-xs font-semibold text-slate-700 mb-1">Company Name *</label><input type="text" required placeholder="Enter company name" value={partnerForm.companyName} onChange={(e) => setPartnerForm({ ...partnerForm, companyName: e.target.value })} className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500" /></div>
                  <div><label className="block text-xs font-semibold text-slate-700 mb-1">Country of Origin *</label><input type="text" required placeholder="Enter country" value={partnerForm.country} onChange={(e) => setPartnerForm({ ...partnerForm, country: e.target.value })} className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="block text-xs font-semibold text-slate-700 mb-1">Contact Person *</label><input type="text" required placeholder="Enter contact person" value={partnerForm.contactName} onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })} className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500" /></div>
                  <div><label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label><input type="email" required placeholder="Enter business email" value={partnerForm.email} onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })} className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500" /></div>
                </div>
                <div><label className="block text-xs font-semibold text-slate-700 mb-1">Technology &amp; Application Summary *</label><textarea rows={4} required placeholder="Describe your technology, key capabilities, applications and target industries" value={partnerForm.message} onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })} className="w-full p-3 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500" /></div>
                {error && <div className="p-3 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs leading-relaxed">{error}</div>}
                <div className="pt-2 text-center"><button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-[#0a2540] hover:bg-[#0c2f52] text-white font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-60">{isSubmitting ? 'Sending...' : 'Start the Conversation'}</button></div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
