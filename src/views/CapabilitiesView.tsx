import React, { useState } from 'react';
import { 
  Cog, 
  Wrench, 
  Gauge, 
  Cpu, 
  Layers, 
  RotateCw, 
  ArrowRight, 
  Check, 
  X,
  ChevronRight
} from 'lucide-react';
import { CAPABILITIES, Capability } from '../data/websiteData.ts';

interface CapabilitiesViewProps {
  onNavigate: (page: string) => void;
  onOpenEnquiryModal: (topic?: string) => void;
}

export const CapabilitiesView: React.FC<CapabilitiesViewProps> = ({
  onNavigate,
  onOpenEnquiryModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalCap, setActiveModalCap] = useState<Capability | null>(null);

  const categories = [
    'All',
    'Engineering Solutions',
    'Modernization',
    'Industrial Technologies',
    'Project Support'
  ];

  const filteredCapabilities = selectedCategory === 'All'
    ? CAPABILITIES
    : CAPABILITIES.filter((c) => c.category === selectedCategory);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'wrench':
        return <Wrench className="w-5 h-5 text-white" />;
      case 'gauge':
        return <Gauge className="w-5 h-5 text-white" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-white" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-white" />;
      case 'refresh':
        return <RotateCw className="w-5 h-5 text-white" />;
      case 'gear':
      default:
        return <Cog className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="w-full bg-white">
      {/* 1. PAGE HEADER (Matches v2_capabilities.png) */}
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
            <span className="text-slate-900 font-semibold">Capabilities</span>
          </nav>

          <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-[0.16em] block mb-2">
            Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a2540] tracking-tight mb-4">
            Engineering Capabilities
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Ten capabilities across four categories &mdash; from early advisory through long-term lifecycle support.
          </p>

          {/* Category Filter Buttons */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0a2540] text-white shadow-sm'
                    : 'bg-white/80 text-slate-700 hover:bg-white border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID (Sections matching v2_capabilities.png) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Group by category if "All" is selected, else display filtered */}
          {(selectedCategory === 'All' 
            ? ['Engineering Solutions', 'Modernization', 'Industrial Technologies', 'Project Support']
            : [selectedCategory]
          ).map((catName) => {
            const items = filteredCapabilities.filter((c) => c.category === catName);
            if (items.length === 0) return null;

            return (
              <div key={catName} className="space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xs font-mono font-bold text-sky-800 uppercase tracking-[0.16em]">
                    {catName}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((cap) => (
                    <div
                      key={cap.id}
                      className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        {/* Capability Icon Box (Navy rounded square matching screenshot) */}
                        <div className="w-12 h-12 rounded-xl bg-[#0a2540] flex items-center justify-center mb-6 shadow-sm">
                          {renderIcon(cap.icon)}
                        </div>

                        <h3 className="text-xl font-bold text-[#0a2540] mb-3 leading-snug">
                          {cap.title}
                        </h3>

                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                          {cap.shortDesc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => setActiveModalCap(cap)}
                          className="text-xs font-semibold text-slate-500 hover:text-slate-900 inline-flex items-center gap-1"
                        >
                          View Scope <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => onOpenEnquiryModal(`Capability Inquiry: ${cap.title}`)}
                          className="text-sm font-bold text-[#0066cc] hover:text-[#0a2540] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          Enquire <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CAPABILITY DETAIL MODAL */}
      {activeModalCap && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setActiveModalCap(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 z-10 border border-slate-200 my-8">
            <button
              onClick={() => setActiveModalCap(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#0a2540] flex items-center justify-center shadow-sm">
                {renderIcon(activeModalCap.icon)}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider block">
                  {activeModalCap.category}
                </span>
                <h3 className="text-2xl font-bold text-[#0a2540]">
                  {activeModalCap.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6 pt-2">
              {activeModalCap.fullDesc}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Technical Focus Areas
                </h4>
                <ul className="space-y-2">
                  {activeModalCap.focusAreas.map((area, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Typical Industrial Outcomes
                </h4>
                <ul className="space-y-2">
                  {activeModalCap.typicalOutcomes.map((outcome, i) => (
                    <li key={i} className="text-xs text-emerald-800 bg-emerald-50/60 p-2 rounded-lg flex items-start gap-2 border border-emerald-100">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalCap(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeModalCap.title;
                  setActiveModalCap(null);
                  onOpenEnquiryModal(`Capability: ${title}`);
                }}
                className="px-5 py-2.5 bg-[#0a2540] hover:bg-[#0c2f52] text-white text-xs font-semibold rounded-lg shadow-sm"
              >
                Enquire About This Capability
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. CTA BAND */}
      <section className="py-16 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2540]">
            Identify the Right Engineering Approach
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Describe your application and our team will identify the right engineering approach.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenEnquiryModal('Capabilities Page Advisory')}
              className="px-7 py-3 bg-[#0a2540] hover:bg-[#0c2f52] text-white font-semibold text-sm rounded-lg shadow-md transition-colors"
            >
              Discuss Your Engineering Challenge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
