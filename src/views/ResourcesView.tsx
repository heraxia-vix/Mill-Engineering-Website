import React, { useState } from 'react';
import { FileText, ArrowRight, X, CheckCircle2, Clock, BookOpen, Printer } from 'lucide-react';
import { RESOURCES, ResourceItem } from '../data/websiteData.ts';

interface ResourcesViewProps {
  onNavigate: (page: string) => void;
  onOpenEnquiryModal: (topic?: string) => void;
}

const MODERNIZATION_NOTE = {
  title: 'Understanding Modernization Readiness',
  subtitle: 'A practical engineering framework for deciding whether existing industrial equipment should be modernized, upgraded or replaced.',
  sections: [
    {
      heading: 'Why modernization readiness matters',
      paragraphs: [
        'Industrial assets are often kept in service for decades. The question is rarely simply whether a machine is old. The more useful engineering question is whether its mechanical structure, hydraulic architecture, controls, safety systems and interfaces still provide a sound platform for improvement.',
        'Modernization can deliver substantial lifecycle value when the underlying asset remains mechanically viable. Conversely, a retrofit can become uneconomic when structural integrity, obsolete interfaces or fundamental process limitations make replacement the more reliable path.'
      ]
    },
    {
      heading: '1. Establish the operating baseline',
      paragraphs: [
        'Begin with the actual operating duty rather than the original catalogue specification. Record production rate, cycle time, pressure and flow requirements, temperature, contamination exposure, duty cycle, shutdown history and the consequences of failure.',
        'The baseline should include recurring failures, maintenance interventions, unavailable spare parts, operator workarounds and performance that has already degraded. These observations often reveal modernization opportunities that a nameplate inspection will miss.'
      ],
      bullets: [
        'Current production requirement versus original design duty',
        'Actual pressure, flow, speed, temperature and cycle characteristics',
        'Downtime history and recurring failure modes',
        'Availability of critical spares and obsolete components',
        'Maintenance effort, leakage and contamination problems'
      ]
    },
    {
      heading: '2. Assess the mechanical foundation',
      paragraphs: [
        'A modernization project should first determine whether the machine has sufficient remaining mechanical life. Frames, cylinders, guide systems, bearings, piping, manifolds, structural members and pressure-containing components should be assessed for wear, fatigue, leakage and dimensional deterioration.',
        'If the mechanical foundation is sound, modern controls, hydraulics, instrumentation or process equipment can often be integrated without replacing the complete machine.'
      ]
    },
    {
      heading: '3. Evaluate the hydraulic system',
      paragraphs: [
        'Hydraulic performance is frequently the most visible modernization opportunity in heavy industrial equipment. Review pump capacity, valve response, accumulator sizing, filtration, cooling, piping configuration, pressure stability and contamination control.',
        'Particular attention should be given to hydraulic shock, heat generation, pressure losses and unstable actuator behaviour. A modern manifold or control architecture is useful only when it is correctly matched to the actual duty cycle and existing mechanical interfaces.'
      ],
      bullets: [
        'Pump and motor condition and available flow capacity',
        'Valve technology, response and obsolescence',
        'Filtration and fluid cleanliness',
        'Accumulator condition and stored-energy safety',
        'Cooling capacity and thermal balance',
        'Pipework integrity, vibration and pressure losses'
      ]
    },
    {
      heading: '4. Examine controls and instrumentation',
      paragraphs: [
        'Obsolete PLCs, servo cards, sensors and proprietary control electronics can create a disproportionate reliability risk. Modernization should identify which controls must be replaced, which interfaces can be retained and how the new system will communicate with existing plant automation.',
        'The objective is not to replace electronics simply because newer technology exists. The objective is to create a maintainable control architecture with reliable diagnostics, appropriate safety logic and readily available components.'
      ]
    },
    {
      heading: '5. Check process and safety requirements',
      paragraphs: [
        'A retrofit must be evaluated against the current process requirement, not only the historical machine design. Changes in product mix, production speed, safety expectations and plant automation may require additional sensors, interlocks, guarding or control functions.',
        'Safety-related functions should be reviewed separately and validated against the applicable plant requirements before commissioning.'
      ]
    },
    {
      heading: '6. Compare three possible paths',
      paragraphs: [
        'A disciplined modernization study should compare at least three scenarios: continue with targeted maintenance, modernize selected subsystems, or replace the asset. The comparison should consider more than initial Capex.',
        'Lifecycle cost, shutdown duration, technical risk, spare-parts availability, expected reliability, future maintainability and the ability to integrate with the plant should all be considered.'
      ],
      bullets: [
        'Targeted repair or maintenance',
        'Phased modernization / retrofit',
        'Complete equipment replacement'
      ]
    },
    {
      heading: 'A practical readiness scorecard',
      paragraphs: [
        'A modernization candidate is generally stronger when its mechanical structure remains sound, the process requirement is still compatible with the machine, the major interfaces can be retained or adapted, and the expected performance improvement justifies the engineering and shutdown effort.',
        'A replacement case becomes stronger when structural deterioration is extensive, the process requirement has fundamentally changed, critical safety architecture cannot be brought to an acceptable standard, or retrofit risk approaches the risk of a new installation.'
      ]
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'Modernization should not be treated as simply replacing old components with new ones. It is an engineering decision about how much useful life remains in an existing asset and where targeted intervention can create the greatest improvement in reliability, performance and maintainability.',
        'The best modernization projects begin with understanding the machine, the operating environment and the failure history. Technology selection comes after that assessment — not before it.'
      ]
    }
  ]
};

export const ResourcesView: React.FC<ResourcesViewProps> = ({
  onNavigate,
  onOpenEnquiryModal
}) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [requestItem, setRequestItem] = useState<ResourceItem | null>(null);
  const [requestSent, setRequestSent] = useState(false);
  const [requestEmail, setRequestEmail] = useState('');
  const [showModernizationNote, setShowModernizationNote] = useState(false);

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
      <section className="page-header-ambient border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs font-medium text-slate-500 mb-6 flex items-center gap-1.5">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-900 transition-colors">Home</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Resources</span>
          </nav>
          <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-[0.16em] block mb-2">Knowledge Centre</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a2540] tracking-tight mb-4">Resources</h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">Engineering notes, technical brochures and downloads &mdash; built to demonstrate expertise before commercial discussion.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {types.map((type) => (
              <button key={type} onClick={() => setSelectedType(type)} className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${selectedType === type ? 'bg-[#0a2540] text-white shadow-sm' : 'bg-white/80 text-slate-700 hover:bg-white border border-slate-200'}`}>{type}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between p-7">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-sky-700 uppercase tracking-wider">{item.type}</span>
                    {item.readTime && <span className="text-[11px] text-slate-500 flex items-center gap-1 font-mono"><Clock className="w-3 h-3" />{item.readTime}</span>}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a2540] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.topics.map((t, idx) => <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium">{t}</span>)}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  {item.id === 'res-1' ? (
                    <button onClick={() => setShowModernizationNote(true)} className="text-xs font-bold text-[#0066cc] hover:text-[#0a2540] inline-flex items-center gap-1.5 transition-colors cursor-pointer">
                      Read Engineering Note <BookOpen className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button onClick={() => { setRequestItem(item); setRequestSent(false); setRequestEmail(''); }} className="text-xs font-bold text-[#0066cc] hover:text-[#0a2540] inline-flex items-center gap-1.5 transition-colors cursor-pointer">
                      Request Access <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModernizationNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={() => setShowModernizationNote(false)} />
          <article className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 border border-slate-200">
            <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-200 px-6 sm:px-10 py-5 flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-sky-700 uppercase tracking-wider">Engineering Note · 8 min read</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2540] mt-1">{MODERNIZATION_NOTE.title}</h2>
                <p className="text-sm text-slate-600 mt-2 max-w-3xl">{MODERNIZATION_NOTE.subtitle}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => window.print()} className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100" title="Print / save as PDF"><Printer className="w-5 h-5" /></button>
                <button onClick={() => setShowModernizationNote(false)} className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100" aria-label="Close"><X className="w-5 h-5" /></button>
              </div>
            </div>
            <div className="px-6 sm:px-10 py-8 sm:py-10">
              <div className="max-w-3xl mx-auto space-y-8">
                {MODERNIZATION_NOTE.sections.map((section, index) => (
                  <section key={index}>
                    <h3 className="text-xl font-bold text-[#0a2540] mb-3">{section.heading}</h3>
                    <div className="space-y-3">
                      {section.paragraphs.map((paragraph, pIndex) => <p key={pIndex} className="text-sm sm:text-base text-slate-700 leading-7">{paragraph}</p>)}
                    </div>
                    {section.bullets && <ul className="mt-4 space-y-2 list-disc pl-5 text-sm sm:text-base text-slate-700 leading-6">{section.bullets.map((bullet, bIndex) => <li key={bIndex}>{bullet}</li>)}</ul>}
                  </section>
                ))}
                <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">Mill Engineering · Engineering Begins With Understanding.</div>
              </div>
            </div>
          </article>
        </div>
      )}

      {requestItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={() => setRequestItem(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 z-10 border border-slate-200 my-8">
            <button onClick={() => setRequestItem(null)} className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"><X className="w-5 h-5" /></button>
            {requestSent ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto"><CheckCircle2 className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold text-slate-900">Access Request Recorded</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">Your request for <span className="font-semibold text-slate-900">{requestItem.title}</span> has been recorded. Our team will provide the document to {requestEmail}.</p>
                <button onClick={() => setRequestItem(null)} className="px-5 py-2 bg-[#0a2540] text-white text-xs font-semibold rounded-lg">Close</button>
              </div>
            ) : (
              <div>
                <span className="text-[11px] font-mono font-bold text-sky-700 uppercase tracking-wider block mb-1">Document Request</span>
                <h3 className="text-xl font-bold text-[#0a2540] mb-2">{requestItem.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">Enter your engineering corporate email and our team will provide access to this technical document.</p>
                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <input type="email" required placeholder="Enter your work email" value={requestEmail} onChange={(e) => setRequestEmail(e.target.value)} className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500" />
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button type="button" onClick={() => setRequestItem(null)} className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900">Cancel</button>
                    <button type="submit" className="px-5 py-2.5 bg-[#0a2540] hover:bg-[#0c2f52] text-white text-xs font-semibold rounded-xl shadow-md transition-colors">Request Document</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-wider block">Knowledge Centre</span>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Engineering notes are available directly for technical reading. Additional brochures, FAQs and project documentation can be requested from our engineering team.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2540]">Request Specific Technical Documentation</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">Get in touch and our engineers will provide the relevant technical resource or calculation sheet.</p>
          <div className="pt-2"><button onClick={() => onNavigate('contact')} className="px-6 py-3 bg-[#0a2540] hover:bg-[#0c2f52] text-white font-semibold text-sm rounded-lg shadow-md transition-colors">Contact Us</button></div>
        </div>
      </section>
    </div>
  );
};
