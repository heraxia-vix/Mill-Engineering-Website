import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Cog, Package, Layers3 } from 'lucide-react';
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

const APPLICATIONS_BY_INDUSTRY: Record<string, string[]> = {
  'steel-metals': [
    'Aluminium and copper extrusion press hydraulics',
    'Hot rolling mill descaling and roll-bending systems',
    'High-pressure hydraulic power units and manifolds',
    'Continuous casting and heavy-duty actuator systems'
  ],
  mining: [
    'Crusher tramp-release and hydraulic clamping systems',
    'Mineral processing and heavy-duty actuator packages',
    'Slurry-service valve actuation and hydraulic systems',
    'Remote-site hydraulic power and cooling systems'
  ],
  hydropower: [
    'Main inlet valve and penstock valve actuation',
    'Turbine governor and electro-hydraulic control systems',
    'Emergency gate, bypass and fail-safe hydraulic systems',
    'Hydro-mechanical inspection and measurement applications'
  ],
  cement: [
    'HPGR and grinding circuit hydraulic systems',
    'Roller press clamping and protection circuits',
    'Kiln, cooler and material-handling actuator systems',
    'Plant hydraulic filtration, cooling and condition monitoring'
  ],
  automotive: [
    'Press-line and forming-machine hydraulics',
    'Servo-hydraulic motion and clamping systems',
    'Production-line automation and measurement',
    'Machine retrofit and factory modernization'
  ]
};

const HYDROPOWER_SOLUTION_DETAILS = [
  { title: 'System Analysis & Retrofit Solutions', description: 'Engineering assessment, system analysis and retrofit solutions to improve the performance, reliability and maintainability of existing hydropower systems.' },
  { title: 'Filtration Systems', description: 'Advanced filtration solutions for hydraulic oil, lubrication systems, cooling water and other critical fluid circuits, helping protect equipment and improve system reliability.' },
  { title: 'MIV Seal Opening & Closing Solutions', description: 'Hydraulic actuation solutions for MIV maintenance seals, including conversion of manual arrangements to more reliable and controlled hydraulic operation.' },
  { title: 'Hydraulic Actuation & Trash Rack Systems', description: 'Hydraulic actuation and cleaning solutions for trash racks and other intake systems, designed to improve operation, reduce manual intervention and support reliable plant availability.' },
  { title: 'Pumping Solutions', description: 'Application-specific pumping solutions for drainage, dewatering, cooling, service water and other critical auxiliary requirements.' },
  { title: 'Condition Monitoring & Advanced Sensors', description: 'Advanced sensing and monitoring technologies for vibration, temperature, pressure and other operating parameters to help identify developing equipment problems.' },
  { title: 'Inspection & Diagnostic Technologies', description: 'Specialised inspection, diagnostic and sensing technologies for equipment and areas where conventional inspection methods may not provide sufficient information.' },
  { title: 'Automation & Instrumentation', description: 'Instrumentation, monitoring and control upgrades for existing hydro installations, including integration of modern technologies with legacy systems.' }
];

const STEEL_METALS_SOLUTION_DETAILS = [
  { title: 'Hot Stamping & Marking Solutions', description: 'Automated stamping, marking and identification solutions for billets, blooms, slabs, rails and other steel products.' },
  { title: 'Profile & Surface Measurement', description: 'Non-contact measurement solutions for product profile, dimensions, surface condition, flatness and other critical parameters.' },
  { title: 'Length, Speed & Velocity Measurement', description: 'Precision measurement solutions for continuous casting, rolling, cutting and material handling applications.' },
  { title: 'Hot & Cold Cutting Solutions', description: 'Precision cutting solutions for billets, blooms, slabs, rails and other steel products, with accurate process measurement and control.' },
  { title: 'Descaling Systems', description: 'High-pressure descaling solutions for removing scale and supporting consistent surface quality in demanding steel-processing applications.' },
  { title: 'Hydraulic & Extrusion Press Upgrades', description: 'Modernisation of extrusion press hydraulics, hydraulic circuits, controls and associated systems to improve reliability, performance and productivity.' },
  { title: 'Pumping Solutions', description: 'Application-specific pumping systems for descaling, cooling water, process water and other critical steel-plant services.' },
  { title: 'Filtration Systems', description: 'Hydraulic, lubrication, cooling-water and process-fluid filtration solutions for protecting critical equipment and maintaining system performance.' },
  { title: 'Advanced Sensors & Process Monitoring', description: 'Sensors and measurement technologies for monitoring production speed, dimensions, profile, surface condition and process performance.' },
  { title: 'Custom Engineering & Upgradation', description: 'Engineering solutions for application-specific challenges, equipment modernisation and system upgrades aimed at improving productivity, performance, reliability and operational efficiency.' }
];

const HYDROPOWER_DESCRIPTION = 'Mill Engineering supports hydropower plants with application-focused engineering, retrofit and technology integration solutions — from analysing existing systems to implementing specialised technologies for critical plant equipment.';
const STEEL_METALS_DESCRIPTION = 'Mill Engineering supports steel and metal processing plants with application-focused engineering, specialised technologies and retrofit solutions — including process measurement, cutting, descaling, hydraulics, pumping, filtration and custom system upgrades.';

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onNavigate, onOpenEnquiryModal, initialIndustryId }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(initialIndustryId || INDUSTRIES[0].id);

  // Keep the active industry synchronized with URL-driven navigation from the footer,
  // navbar, home page and browser back/forward navigation.
  useEffect(() => {
    if (initialIndustryId && INDUSTRIES.some((industry) => industry.id === initialIndustryId)) {
      setSelectedIndustryId(initialIndustryId);
    }
  }, [initialIndustryId]);

  const selectIndustry = (id: string) => {
    setSelectedIndustryId(id);
    window.location.hash = `industry-${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentIndustry = INDUSTRIES.find((i) => i.id === selectedIndustryId) || INDUSTRIES[0];
  const products = PRODUCTS_BY_INDUSTRY[currentIndustry.id] || [];
  const applications = APPLICATIONS_BY_INDUSTRY[currentIndustry.id] || [];
  const isHydropower = currentIndustry.id === 'hydropower';
  const isSteelMetals = currentIndustry.id === 'steel-metals';

  return (
    <div className="w-full bg-white">
      <section className="page-header-ambient border-b border-slate-200/80 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs font-medium text-slate-500 mb-6 flex items-center gap-1.5">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-900 transition-colors">Home</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Industries</span>
          </nav>
          <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-[0.16em] block mb-2">Industries</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a2540] tracking-tight mb-4">Engineering Across Critical Industries</h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">Application-led engineering solutions, technologies and products for demanding industrial environments.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => (
              <button key={ind.id} onClick={() => selectIndustry(ind.id)} className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${selectedIndustryId === ind.id ? 'bg-[#0a2540] text-white shadow-sm' : 'bg-white/80 text-slate-700 hover:bg-white border border-slate-200'}`}>
                <span className="font-mono text-sky-400">{ind.index}</span><span>{ind.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[4/3] relative">
                <img src={currentIndustry.image} alt={currentIndustry.imageAlt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6"><div className="text-white"><span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest block">Sector Focus</span><h4 className="text-lg font-bold">{currentIndustry.title}</h4></div></div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                <h4 className="text-xs font-mono font-bold text-[#0a2540] uppercase tracking-wider flex items-center gap-2"><Cog className="w-4 h-4 text-sky-600" /> Primary Operating Conditions</h4>
                <ul className="space-y-2 text-xs text-slate-700">{currentIndustry.operatingConditions.map((cond, idx) => <li key={idx} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" /><span>{cond}</span></li>)}</ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">{currentIndustry.index} &bull; Application Engineering</span>
                <h2 className="text-3xl font-extrabold text-[#0a2540] mt-1 mb-4">{currentIndustry.title}</h2>
                <p className="text-base text-slate-700 leading-relaxed font-normal">{isHydropower ? HYDROPOWER_DESCRIPTION : isSteelMetals ? STEEL_METALS_DESCRIPTION : currentIndustry.description}</p>
              </div>

              {isHydropower || isSteelMetals ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{(isHydropower ? HYDROPOWER_SOLUTION_DETAILS : STEEL_METALS_SOLUTION_DETAILS).map((solution) => <div key={solution.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-sky-200 hover:shadow-sm transition-all"><h4 className="text-sm font-bold text-[#0a2540] mb-2">{solution.title}</h4><p className="text-xs text-slate-600 leading-relaxed">{solution.description}</p></div>)}</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-[#0a2540] uppercase tracking-wider flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-600" /> Our Solutions</h4>
                    <ul className="space-y-3 text-xs text-slate-700">{currentIndustry.solutions.map((solution, i) => <li key={i} className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" /><span>{solution}</span></li>)}</ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                    <h4 className="text-xs font-mono font-bold text-[#0a2540] uppercase tracking-wider flex items-center gap-2"><Package className="w-4 h-4 text-sky-600" /> Products & Technologies</h4>
                    <ul className="space-y-3 text-xs text-slate-700">{products.map((product, i) => <li key={i} className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" /><span>{product}</span></li>)}</ul>
                  </div>
                </div>
              )}

              {(isHydropower || isSteelMetals) && <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4"><h4 className="text-xs font-mono font-bold text-[#0a2540] uppercase tracking-wider flex items-center gap-2"><Package className="w-4 h-4 text-sky-600" /> Products & Technologies</h4><ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs text-slate-700">{products.map((product, i) => <li key={i} className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" /><span>{product}</span></li>)}</ul></div>}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4"><div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center"><Layers3 className="w-4 h-4 text-sky-700" /></div><div><span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider block">Applications</span><h3 className="text-lg font-bold text-[#0a2540]">Where our engineering is applied</h3></div></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">{applications.map((application, i) => <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700"><CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" /><span>{application}</span></div>)}</div>
              </div>

              <div className="pt-2 border-t border-slate-100"><div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div><span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider block mb-1">Talk to our engineering team</span><p className="text-xs text-slate-600">Share your application, equipment or modernization requirement and we will evaluate the right technical route.</p></div><button onClick={() => onOpenEnquiryModal(`Industry Consultation: ${currentIndustry.title}`)} className="px-6 py-3 bg-[#0a2540] hover:bg-[#0c2f52] text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 shrink-0">Discuss Your Requirement <ArrowRight className="w-4 h-4" /></button></div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
