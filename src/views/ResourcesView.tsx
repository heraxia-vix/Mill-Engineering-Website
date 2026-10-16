import React, { useState } from 'react';
import { FileText, Download, BookOpen, ArrowRight, X, CheckCircle2, Clock } from 'lucide-react';
import { RESOURCES, ResourceItem } from '../data/websiteData.ts';

interface ResourcesViewProps {
  onNavigate: (page: string) => void;
  onOpenEnquiryModal: (topic?: string) => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({
  onNavigate,
  onOpenEnquiryModal
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [requestItem, setRequestItem] = useState<ResourceItem | null>(null);
  const [requestSent, setRequestSent] = useState(false);
  const [requestEmail, setRequestEmail] = useState('');

  const types = ['All', 'Engineering Notes', 'Technical Brochure', 'FAQ', 'Download'];

  const filtered = selectedType === 'All'
    ? RESOURCES
    : RESOURCES.filter((r) => r.type === selectedType);

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSent(true);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. PAGE HEADER */}
      <section className="page-header-ambient border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs font-medium text-slate-500 mb-6 flex items-center gap-1.5">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-slate-900 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Resources</span>
          </nav>

          <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-[0.16em] block mb-2">
            Knowledge Centre
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a2540] tracking-tight mb-4">
            Resources
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            Engineering notes, technical brochures and downloads &mdash; built to demonstrate expertise before commercial discussion.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedType === type
                    ? 'bg-[#0a2540] text-white shadow-sm'
                    : 'bg-white/80 text-slate-700 hover:bg-white border border-slate-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. RESOURCES GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between p-7"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-sky-700 uppercase tracking-wider">
                      {item.type}
                    </span>
                    {item.readTime && (
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3" />
                        {item.readTime}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#0a2540] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setRequestItem(item);
                      setRequestSent(false);
                      setRequestEmail('');
                    }}
                    className="text-xs font-bold text-[#0066cc] hover:text-[#0a2540] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    Request Access <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REQUEST ACCESS MODAL */}
      {requestItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setRequestItem(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 z-10 border border-slate-200 my-8">
            <button
              onClick={() => setRequestItem(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {requestSent ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Access Link Dispatched
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  We've recorded your technical document request for <span className="font-semibold text-slate-900">{requestItem.title}</span>. A download link has been sent to {requestEmail}.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setRequestItem(null)}
                    className="px-5 py-2 bg-[#0a2540] text-white text-xs font-semibold rounded-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-[11px] font-mono font-bold text-sky-700 uppercase tracking-wider block mb-1">
                  Document Dispatch
                </span>
                <h3 className="text-xl font-bold text-[#0a2540] mb-2">
                  {requestItem.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Enter your engineering corporate email to receive immediate access to this technical document.
                </p>

                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Corporate Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="engineer@plant.com"
                      value={requestEmail}
                      onChange={(e) => setRequestEmail(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setRequestItem(null)}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-[#0a2540] hover:bg-[#0c2f52] text-white text-xs font-semibold rounded-xl shadow-md transition-colors"
                    >
                      Send Document
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. NOTE SECTION */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-wider block">
            Notice
          </span>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Resource titles above demonstrate the knowledge repository structure. Real engineering notes, technical brochures and downloadable whitepapers are available on request to plant technical teams.
          </p>
        </div>
      </section>

      {/* 5. CTA BAND */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2540]">
            Request Specific Technical Documentation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Get in touch and our engineers will provide the relevant technical resource or calculation sheet.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-[#0a2540] hover:bg-[#0c2f52] text-white font-semibold text-sm rounded-lg shadow-md transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
