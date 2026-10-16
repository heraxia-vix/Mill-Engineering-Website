import React, { useState } from 'react';
import { 
  ArrowRight, 
  Cog, 
  Wrench, 
  Gauge, 
  Cpu, 
  Layers, 
  RotateCw, 
  CheckCircle2, 
  Activity,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { 
  INDUSTRIES, 
  CAPABILITIES, 
  ENGINEERING_PROCESS, 
  WHY_MILL_ENGINEERING 
} from '../data/websiteData.ts';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onOpenEnquiryModal: (topic?: string) => void;
  onSelectIndustry: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenEnquiryModal,
  onSelectIndustry
}) => {
  // Interactive Diagnostic Tool State
  const [selectedIndustryKey, setSelectedIndustryKey] = useState('steel');
  const [selectedSystem, setSelectedSystem] = useState('extrusion');

  const diagnosticScenarios = {
    steel: {
      extrusion: {
        title: 'Extrusion Press Main Ram & High-Pressure Hydraulic Circuit',
        symptoms: ['Uneven extrusion ram velocity during billet push', 'Excessive hydraulic shock causing flange leaks at 315 bar', 'Prefill valve decompression chatter during rapid return stroke'],
        recommendation: 'Modernize the manifold with high-speed proportional cartridge valves, install high-flow active decompression logic, and integrate closed-loop linear transducer feedback for constant profile density.'
      },
      rolling: {
        title: 'Hot Strip Mill Descaling & Roll Bending Hydraulics',
        symptoms: ['Descaling valve seat wear due to suspended particulates', 'Pressure drops during header discharge', 'Thermal fatigue in valve solenoids'],
        recommendation: 'Implement high-response hardened cartridge descaling valves with dual piston accumulators and offline particulate conditioning to maintain 180 bar descaling pressure.'
      }
    },
    hydropower: {
      valves: {
        title: 'Turbine Main Inlet Valve (MIV) & Spherical Guard Hydraulics',
        symptoms: ['Slow emergency gravity drop times exceeding trip threshold', 'Hydraulic bypass valve packing leakage', 'Pressure drops in nitrogen accumulator bank'],
        recommendation: 'Retrofit dual-redundant solenoid safety trip blocks, install self-lubricating bronze-graphite trunnion seals, and implement continuous nitrogen pre-charge pressure transducers.'
      },
      governor: {
        title: 'Digital Electro-Hydraulic Turbine Governor OPU',
        symptoms: ['Governor oil temperature creeping above 55°C', 'Proportional pilot valve hysteresis causing frequency hunting', 'Micro-particulate oil breakdown'],
        recommendation: 'Replace legacy analog servo valves with modern industrial fieldbus digital servo valves, add a continuous kidney-loop water removal filter, and upgrade to variable speed pump drive.'
      }
    },
    mining: {
      crusher: {
        title: 'Cone Crusher Tramp Iron Release & Hydraulic Clamping',
        symptoms: ['Accumulator nitrogen membrane rupture from uncrushable ore shocks', 'Hydraulic relief valve hunting causing gap variation', 'Dust ingress damaging cylinder rod chrome'],
        recommendation: 'Install high-shock bladder accumulator banks with relief response under 15ms, paired with stainless steel armored wiper seals and pressurized reservoir breathers.'
      }
    }
  };

  const currentDiagnostic = (diagnosticScenarios as any)[selectedIndustryKey]?.[selectedSystem] || diagnosticScenarios.steel.extrusion;

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Matches v2_hero.png) */}
      <section className="relative bg-[#041528] text-white overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 border-b border-sky-950/80">
        {/* Technical Blueprint Grid & Coordinate Dots */}
        <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-80" />
        <div className="absolute inset-0 blueprint-dots pointer-events-none opacity-60" />

        {/* Ambient Radial Glows */}
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sky-400 inline-block" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-sky-400 font-mono">
                Engineering Solutions Company
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Engineering Begins With Understanding.
            </h1>

            {/* Lede Text */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed pt-2">
              Mill Engineering partners with industrial customers to evaluate engineering challenges before recommending technologies, modernization strategies or implementation solutions &mdash; across Steel &amp; Metals, Mining, Hydropower, Cement and Automotive industries.
            </p>

            {/* Hero CTAs */}
            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenEnquiryModal('General Inquiry from Homepage Hero')}
                className="px-7 py-3.5 bg-[#0a2540] hover:bg-[#0d3154] text-white font-semibold text-base rounded-lg border border-sky-500/30 shadow-[0_4px_24px_rgba(2,132,199,0.25)] hover:border-sky-400 transition-all text-center cursor-pointer active:scale-[0.99]"
              >
                Discuss Your Engineering Challenge
              </button>

              <button
                onClick={() => onNavigate('capabilities')}
                className="px-7 py-3.5 bg-transparent hover:bg-slate-800/60 text-white font-semibold text-base rounded-lg border border-slate-600/80 hover:border-slate-400 transition-colors text-center cursor-pointer active:scale-[0.99]"
              >
                Explore Capabilities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MESSAGE STRIP (From user HTML) */}
      <section className="bg-[#030e1c] border-b border-sky-950/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-4 rounded-lg bg-slate-900/40 border border-sky-950/40">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block mb-1">
                Within 5 seconds
              </span>
              <p className="text-sm font-medium text-slate-300">
                Perceive a premium, technically credible brand.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-900/40 border border-sky-950/40">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block mb-1">
                Within 30 seconds
              </span>
              <p className="text-sm font-medium text-slate-300">
                Understand what Mill Engineering does and for whom.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-900/40 border border-sky-950/40">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block mb-1">
                Within 1 minute
              </span>
              <p className="text-sm font-medium text-slate-300">
                Feel confident enough to start a conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY MILL ENGINEERING (Matches screenshot & HTML) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-[0.15em] block mb-2">
              Why Mill Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] tracking-tight">
              Industrial organizations need better engineering decisions, not more products.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Mill Engineering focuses on understanding applications before recommending technologies &mdash; engineering judgement first, catalogue second.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_MILL_ENGINEERING.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0a2540] text-sky-300 flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#0066cc] group-hover:text-white transition-colors">
                  <Cog className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES (With Generated Industrial Photos) */}
      <section className="py-20 bg-[#f8fafc] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-[0.15em] block mb-2">
                Industries
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] tracking-tight">
                Engineering Across Critical Industries
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-3">
                Five industries, equal engineering attention. No single sector defines how we show up for the rest.
              </p>
            </div>

            <button
              onClick={() => onNavigate('industries')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0066cc] hover:text-[#0a2540] transition-colors"
            >
              Explore all industries <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => {
                  onSelectIndustry(ind.id);
                  onNavigate('industries');
                }}
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={ind.image}
                    alt={ind.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-mono font-bold text-sky-300 tracking-wider">
                    {ind.index} &bull; SECTOR
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0a2540] mb-2 group-hover:text-[#0066cc] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {ind.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0066cc]">
                    <span>View Engineering Scope</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE CHALLENGE NAVIGATOR / SOLUTION FINDER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0a2540] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-sky-900">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative max-w-3xl mb-8">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block mb-2">
                Interactive Engineering Diagnostic
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Evaluate Your Equipment Challenge
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Select your industry and subsystem to review how our application-led methodology diagnoses root mechanical &amp; hydraulic causes.
              </p>
            </div>

            {/* Diagnostic Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-xs font-mono text-sky-300 uppercase mb-2">
                  1. Select Industry
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'steel', label: 'Steel & Metals' },
                    { key: 'hydropower', label: 'Hydropower' },
                    { key: 'mining', label: 'Mining' }
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => {
                        setSelectedIndustryKey(tab.key);
                        if (tab.key === 'steel') setSelectedSystem('extrusion');
                        if (tab.key === 'hydropower') setSelectedSystem('valves');
                        if (tab.key === 'mining') setSelectedSystem('crusher');
                      }}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg transition-colors text-center truncate ${
                        selectedIndustryKey === tab.key
                          ? 'bg-sky-500 text-slate-950 font-bold'
                          : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-sky-300 uppercase mb-2">
                  2. Select System Focus
                </label>
                <div className="flex gap-2">
                  {selectedIndustryKey === 'steel' && (
                    <>
                      <button
                        onClick={() => setSelectedSystem('extrusion')}
                        className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors ${
                          selectedSystem === 'extrusion' ? 'bg-white text-[#0a2540]' : 'bg-slate-800/80 text-slate-200'
                        }`}
                      >
                        Extrusion Press
                      </button>
                      <button
                        onClick={() => setSelectedSystem('rolling')}
                        className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors ${
                          selectedSystem === 'rolling' ? 'bg-white text-[#0a2540]' : 'bg-slate-800/80 text-slate-200'
                        }`}
                      >
                        Descaling &amp; Rolling
                      </button>
                    </>
                  )}
                  {selectedIndustryKey === 'hydropower' && (
                    <>
                      <button
                        onClick={() => setSelectedSystem('valves')}
                        className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors ${
                          selectedSystem === 'valves' ? 'bg-white text-[#0a2540]' : 'bg-slate-800/80 text-slate-200'
                        }`}
                      >
                        MIV &amp; Guard Valves
                      </button>
                      <button
                        onClick={() => setSelectedSystem('governor')}
                        className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors ${
                          selectedSystem === 'governor' ? 'bg-white text-[#0a2540]' : 'bg-slate-800/80 text-slate-200'
                        }`}
                      >
                        Governor OPU
                      </button>
                    </>
                  )}
                  {selectedIndustryKey === 'mining' && (
                    <button
                      onClick={() => setSelectedSystem('crusher')}
                      className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-white text-[#0a2540]"
                    >
                      Cone Crusher Tramp Release
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Diagnostic Result Card */}
            <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-sky-800/60 space-y-6">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
                  Identified Application
                </span>
                <h3 className="text-xl font-bold text-white">
                  {currentDiagnostic.title}
                </h3>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Typical Chronic Operating Symptoms:
                </h4>
                <div className="space-y-2">
                  {currentDiagnostic.symptoms.map((symptom: string, i: number) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Activity className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                  Mill Engineering Recommended Engineering Path:
                </h4>
                <div className="flex items-start gap-3 bg-slate-950/60 p-4 rounded-xl border border-emerald-950/60">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">
                    {currentDiagnostic.recommendation}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-mono">
                  Facing this equipment challenge at your site
                </span>
                <button
                  onClick={() => onOpenEnquiryModal(`Diagnostic Inquiry: ${currentDiagnostic.title}`)}
                  className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm rounded-lg transition-colors text-center"
                >
                  Schedule Engineering Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CAPABILITIES PREVIEW (Matches screenshot & HTML) */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-[0.15em] block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] tracking-tight">
              Engineering Capabilities
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Ten capabilities across four categories &mdash; from early advisory through long-term lifecycle support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.slice(0, 8).map((cap) => (
              <div
                key={cap.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-sky-700 uppercase tracking-wider block mb-4">
                    {cap.category}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#0a2540] text-sky-300 flex items-center justify-center mb-5 shadow-sm">
                    {cap.icon === 'gear' && <Cog className="w-6 h-6" />}
                    {cap.icon === 'wrench' && <Wrench className="w-6 h-6" />}
                    {cap.icon === 'gauge' && <Gauge className="w-6 h-6" />}
                    {cap.icon === 'cpu' && <Cpu className="w-6 h-6" />}
                    {cap.icon === 'layers' && <Layers className="w-6 h-6" />}
                    {cap.icon === 'refresh' && <RotateCw className="w-6 h-6" />}
                  </div>
                  <h3 className="text-base font-bold text-[#0a2540] mb-2 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cap.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('capabilities')}
                    className="text-xs font-bold text-[#0066cc] hover:text-[#0a2540] inline-flex items-center gap-1 transition-colors"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('capabilities')}
              className="px-6 py-3 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-2"
            >
              View All 10 Capabilities <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. ENGINEERING PROCESS (7 Steps Timeline on Navy Background) */}
      <section className="py-20 bg-[#0a2540] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-[0.15em] block mb-2">
              Engineering Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              A consistent process, applied to every engagement.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              Seven steps, followed in order, regardless of industry or scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {ENGINEERING_PROCESS.map((step) => (
              <div
                key={step.step}
                className="bg-slate-900/60 border border-sky-950 p-5 rounded-xl hover:border-sky-500/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-bold text-sky-400 block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY PARTNERS TEASER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-[0.15em] block">
                Technology Partners
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] tracking-tight">
                Collaboration with international technology companies.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Mill Engineering welcomes collaboration with technology companies seeking a technically capable representative and engineering partner in India.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">Local engineering representation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">Technical support capability</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">Multi-industry market access</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">Long-term collaboration model</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('technology-partners')}
                  className="px-6 py-3 bg-[#0a2540] hover:bg-[#0d3154] text-white font-semibold text-sm rounded-lg shadow-md transition-colors inline-flex items-center gap-2"
                >
                  Become a Technology Partner <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 aspect-[4/3] relative">
              <img
                src="/src/assets/images/hero_industrial_plant_1792053324132.jpg"
                alt="Modern industrial heavy manufacturing plant and engineering facility"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <p className="text-xs font-mono text-sky-300">
                  Industrial engineering presence &bull; Chhattisgarh &amp; National Industrial Hubs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA BAND */}
      <section className="py-20 bg-[#06182c] text-white border-t border-sky-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">
            Direct Discussion
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white text-balance">
            Discuss Your Engineering Challenge
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you are planning a modernization project, evaluating a new technology, or seeking an experienced engineering partner &mdash; our team is ready to discuss your application.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenEnquiryModal('Homepage Bottom CTA')}
              className="px-8 py-4 bg-white hover:bg-slate-100 text-[#0a2540] font-bold text-base rounded-lg shadow-xl transition-all cursor-pointer"
            >
              Talk to Our Engineering Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
