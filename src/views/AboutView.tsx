import React from 'react';
import { CheckCircle2, Shield, Cog, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: string) => void;
  onOpenEnquiryModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenEnquiryModal
}) => {
  const steps = [
    { num: 'Step 01', text: 'Understand the application before discussing technology.' },
    { num: 'Step 02', text: 'Study the operating conditions before recommending equipment.' },
    { num: 'Step 03', text: 'Evaluate alternatives objectively.' },
    { num: 'Step 04', text: 'Select solutions that create measurable long-term value.' },
    { num: 'Step 05', text: 'Support implementation with engineering expertise.' },
    { num: 'Step 06', text: 'Remain available throughout the asset lifecycle.' }
  ];

  const reasons = [
    'Engineering-first mindset',
    'Practical modernization strategies',
    'Independent technology evaluation',
    'Long-term technical partnership',
    'Focus on lifecycle value',
    'Multi-industry engineering experience',
    'Commitment to technical integrity'
  ];

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
            <span className="text-slate-900 font-semibold">About</span>
          </nav>

          <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-[0.16em] block mb-2">
            About Mill Engineering
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a2540] tracking-tight mb-4">
            Engineering judgement, applied consistently.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            Mill Engineering is an Engineering Solutions Company committed to delivering practical, application-focused engineering solutions to process industries.
          </p>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
              <h2 className="text-3xl font-bold text-[#0a2540] tracking-tight">
                Company Overview
              </h2>
              <p>
                We work with customers from the earliest stage of identifying operational challenges through technology evaluation, engineering studies, modernization planning and execution support.
              </p>
              <p>
                Our philosophy is simple: every engineering challenge deserves careful evaluation, every application deserves individual attention and every recommendation should be based on engineering judgement &mdash; not short-term trends.
              </p>
              <p>
                We serve Steel &amp; Metals, Mining &amp; Mineral Processing, Hydropower, Cement and Automotive industries, helping customers improve reliability, maintainability, efficiency and long-term asset performance through thoughtful engineering.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-sky-700 font-bold">
                <span>HEADQUARTERED IN BHILAI</span>
                <span>&bull;</span>
                <span>CENTRAL INDUSTRIAL REGION</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[4/3] relative">
              <img
                src="/src/assets/images/hero_industrial_plant_1792053324132.jpg"
                alt="Mill Engineering industrial facility and equipment oversight"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <p className="text-xs font-mono text-sky-300">
                  Engineering first principles &bull; Application-led rigor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENGINEERING APPROACH */}
      <section className="py-16 bg-[#f8fafc] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-wider block mb-1">
              Engineering Approach
            </span>
            <h2 className="text-3xl font-bold text-[#0a2540]">
              How we work, every time.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-3"
              >
                <span className="text-xs font-mono font-bold text-[#0066cc] uppercase tracking-wider block">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {step.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CLIENTS CHOOSE MILL ENGINEERING */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-wider block mb-1">
              Value Proposition
            </span>
            <h2 className="text-3xl font-bold text-[#0a2540]">
              Seven reasons customers keep coming back.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5 hover:bg-sky-50/50 hover:border-sky-300 transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#0066cc] shrink-0" />
                <span className="text-base font-semibold text-slate-800">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BAND */}
      <section className="py-16 bg-[#0a2540] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
            Direct Discussion
          </span>
          <h2 className="text-3xl font-bold">
            Let's discuss your engineering challenge.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Our team is ready to talk through your application and identify practical engineering solutions.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenEnquiryModal}
              className="px-6 py-3 bg-white text-[#0a2540] hover:bg-slate-100 font-bold text-sm rounded-lg shadow-md transition-colors"
            >
              Discuss Your Engineering Challenge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
