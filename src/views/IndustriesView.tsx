import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Cog, Package } from 'lucide-react';
import { INDUSTRIES } from '../data/websiteData.ts';

interface IndustriesViewProps {
  onNavigate: (page: string) => void;
  onOpenEnquiryModal: (topic?: string) => void;
  initialIndustryId?: string;
}

const PRODUCTS_BY_INDUSTRY: Record<string, string[]> = {
  'steel-metals': [
    'Extrusion press hydraulic systems and modernization packages',
    'High-response cartridge and proportional valve systems',
    'Descaling valve and accumulator systems',
    'Offline filtration and hydraulic oil conditioning systems',
    'Servo, measurement and control technologies'
  ],
  mining: [
    'Hydraulic power units and accumulator systems',
    'Heavy-duty valve actuation packages',
    'Abrasive-service sealing and cylinder solutions',
    'Hydraulic oil cooling and filtration systems',
    'Inspection, measurement and condition-monitoring technologies'
  ],
  hydropower: [
    'Main inlet valve hydraulic actuation systems',
    'Governor and electro-hydraulic power units',
    'Emergency and fail-safe hydraulic systems',
    'Hydraulic filtration and oil-conditioning systems',
    'Inspection, measurement and laser-based technologies'
  ],
  cement: [
    'HPGR and grinding-system hydraulic solutions',
    'Hydraulic power units and accumulator packages',
    'Valve, actuator and cooling systems',
    'Offline filtration and oil-conditioning systems',
    'Automation, measurement and condition-monitoring technologies'
  ],
  automotive: [
    'Press-line hydraulic and servo-hydraulic systems',
    'Hydraulic power units, manifolds and valve packages',
    'Motion control and automation technologies',
    'Inspection and dimensional measurement systems',
    'Factory and machine modernization technologies'
  ]
};

export const IndustriesView: React.FC<IndustriesViewProps> = ({
  onNavigate,
  onOpenEnquiryModal,
  initialIndustryId
}) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(
    initialIndustryId || INDUSTRIES[0].id
  );

  const currentIndustry = INDUSTRIES.find((i) => i.id === selectedIndustryId) || INDUSTRIES[0];
  const products = PRODUCTS_BY_INDUSTRY[currentIndustry.id] || [];

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
            <span className="text-slate-900 font-semibold">Industries</span>
          </nav>

          <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-[0.16em] block mb-2">
            Industries
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a2540] tracking-tight mb-4">
            Engineering Across Critical Industries
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            Five industries, equal engineering attention. No single sector defines how we show up for the rest.
          </p>

          {/* Industry Navigation Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                  selectedIndustryId === ind.id
                    ? 'bg-[#0a2540] text-white shadow-sm'
                    : 'bg-white/80 text-slate-700 hover:bg-white border border-slate-200'
                }`}
              >
                <span className="font-mono text-sky-400">{ind.index}</span>
                <span>{ind.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. INDUSTRY DEEP DIVE */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Visual Media & Quick Stats */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[4/3] relative">
                <img
                  src={currentIndustry.image}
                  alt={currentIndustry.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest block">
                      Sector Focus
                    </span>
                    <h4 className="text-lg font-bold">{currentIndustry.title}</h4>
                  </div>
                </div>
              </div>

              {/* Operating Conditions Box */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                <h4 className="text-xs font-mono font-bold text-[#0a2540] uppercase tracking-wider flex items-center gap-2">
                  <Cog className="w-4 h-4 text-sky-600" />
                  Primary Operating Conditions
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentIndustry.operatingConditions.map((cond, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Engineering Scope & Solutions */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
                  {currentIndustry.index} &bull; Application Engineering
                </span>
                <h2 className="text-3xl font-extrabold text-[#0a2540] mt-1 mb-4">
                  {currentIndustry.title}
                </h2>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {currentIndustry.description}
                </p>
              </div>

              {/* Our Solutions & Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <h4 className="text-xs font-mono font-bold text-[#0a2540] uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    Our Solutions
                  </h4>
                  <ul className="space-y-3 text-xs text-slate-700">
                    {currentIndustry.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <h4 className="text-xs font-mono font-bold text-[#0a2540] uppercase tracking-wider flex items-center gap-2">
                    <Package className="w-4 h-4 text-sky-600" />
                    Products & Technologies
                  </h4>
                  <ul className="space-y-3 text-xs text-slate-700">
                    {products.map((product, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Applications & Enquiry */}
              <div className="pt-5 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider block mb-1">
                      Applications
                    </span>
                    <p className="text-xs text-slate-600">
                      Application-led engineering, technology selection and implementation support for {currentIndustry.title}.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiryModal(`Industry Consultation: ${currentIndustry.title}`)}
                    className="px-6 py-3 bg-[#0a2540] hover:bg-[#0c2f52] text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 shrink-0"
                  >
                    Discuss Your {currentIndustry.title} Requirement <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};