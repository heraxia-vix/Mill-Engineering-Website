import React, { useState, useEffect } from 'react';
import { MillLogo } from './MillLogo.tsx';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import { OFFICE_INFO } from '../data/websiteData.ts';

interface FooterProps {
  onNavigate: (page: string) => void;
  onSelectIndustry?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectIndustry }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIndustryNav = (id: string) => {
    if (onSelectIndustry) {
      onSelectIndustry(id);
    } else {
      onNavigate('industries');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051527] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-8">
            <button onClick={() => handleNav('home')} className="flex items-center gap-2 hover:opacity-95 transition-opacity text-left max-w-sm">
              <MillLogo className="w-full max-w-[280px]" theme="dark" variant="full" />
            </button>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              <span className="font-semibold text-white">Engineering Begins With Understanding.</span> An Engineering Solutions Company serving Steel &amp; Metals, Mining, Hydropower, Cement and Automotive industries.
            </p>
            <div className="pt-2 text-xs font-mono text-sky-400">Bhilai, Chhattisgarh &bull; India</div>
          </div>

          <div className="space-y-4">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Quick Links</h5>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => handleNav('about')} className="hover:text-white transition-colors text-slate-400">About Us</button></li>
              <li><button onClick={() => handleNav('industries')} className="hover:text-white transition-colors text-slate-400">Industries</button></li>
              <li><button onClick={() => handleNav('capabilities')} className="hover:text-white transition-colors text-slate-400">Capabilities</button></li>
              <li><button onClick={() => handleNav('resources')} className="hover:text-white transition-colors text-slate-400">Resources &amp; Notes</button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Industries</h5>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => handleIndustryNav('steel-metals')} className="hover:text-white transition-colors text-slate-400">Steel &amp; Metals</button></li>
              <li><button onClick={() => handleIndustryNav('mining')} className="hover:text-white transition-colors text-slate-400">Mining &amp; Minerals</button></li>
              <li><button onClick={() => handleIndustryNav('hydropower')} className="hover:text-white transition-colors text-slate-400">Hydropower</button></li>
              <li><button onClick={() => handleIndustryNav('cement')} className="hover:text-white transition-colors text-slate-400">Cement</button></li>
              <li><button onClick={() => handleIndustryNav('automotive')} className="hover:text-white transition-colors text-slate-400">Automotive</button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Contact</h5>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" /><span className="text-xs leading-relaxed">{OFFICE_INFO.address.line1}, {OFFICE_INFO.address.line2}</span></div>
              <div className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-sky-400 shrink-0" /><a href={`tel:${OFFICE_INFO.phoneNumbers[0].raw}`} className="hover:text-white transition-colors text-xs">{OFFICE_INFO.phoneNumbers[0].display}</a></div>
              <div className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-sky-400 shrink-0" /><a href={`mailto:${OFFICE_INFO.email}`} className="hover:text-white transition-colors text-xs">{OFFICE_INFO.email}</a></div>
              <div className="pt-2"><button onClick={() => handleNav('contact')} className="text-xs font-semibold text-sky-400 hover:text-sky-300 underline underline-offset-4">Open Contact &amp; Map &rarr;</button></div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Mill Engineering. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('technology-partners')} className="hover:text-slate-300 transition-colors">Technology Partners</button>
            <button onClick={() => handleNav('privacy-policy')} className="hover:text-slate-300 transition-colors">Privacy Policy</button>
            <button onClick={() => handleNav('terms-of-service')} className="hover:text-slate-300 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 p-3 rounded-full bg-[#0a2540] text-sky-400 hover:text-white hover:bg-sky-700 shadow-xl border border-sky-800 transition-all duration-200 z-40 active:scale-95" aria-label="Back to top">
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};
