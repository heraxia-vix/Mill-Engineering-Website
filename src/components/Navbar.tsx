import React, { useState } from 'react';
import { MillLogo } from './MillLogo.tsx';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenEnquiryModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenEnquiryModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDarkHero = currentPage === 'home';
  const navItems = [
    { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'industries', label: 'Industries' },
    { id: 'capabilities', label: 'Capabilities' }, { id: 'technology-partners', label: 'Technology Partners' },
    { id: 'resources', label: 'Resources' }, { id: 'contact', label: 'Contact' },
  ];
  const handleLinkClick = (id: string) => { onNavigate(id); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <header className={`sticky top-0 z-50 transition-colors duration-200 border-b ${isDarkHero ? 'bg-[#041528]/95 backdrop-blur-md border-sky-950/60 text-white' : 'bg-[#eaf4fd]/95 backdrop-blur-md border-slate-200/80 text-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-24 sm:min-h-28 gap-6">
          <button onClick={() => handleLinkClick('home')} className="flex items-center gap-2 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1" aria-label="Mill Engineering Home">
            <MillLogo className="h-14 sm:h-16 lg:h-[72px]" theme={isDarkHero ? 'dark' : 'light'} />
          </button>
          <nav className="hidden xl:flex items-center gap-7 text-sm font-semibold tracking-normal">
            {navItems.map((item) => { const isActive = currentPage === item.id; return <button key={item.id} onClick={() => handleLinkClick(item.id)} className={`relative py-2 whitespace-nowrap shrink-0 transition-colors ${isDarkHero ? (isActive ? 'text-white' : 'text-slate-300 hover:text-white') : (isActive ? 'text-slate-950' : 'text-slate-600 hover:text-slate-950')}`}>{item.label}{isActive && <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0284c7] rounded-full shadow-[0_0_8px_rgba(2,132,199,0.5)]" aria-hidden="true" />}</button>; })}
          </nav>
          <div className="hidden lg:flex items-center gap-3 shrink-0"><button onClick={onOpenEnquiryModal} className={`px-5 py-2.5 text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 whitespace-nowrap shrink-0 active:scale-[0.98] ${isDarkHero ? 'bg-[#0a2540] hover:bg-[#0e3153] text-white border border-sky-600/40 shadow-[0_4px_16px_rgba(2,132,199,0.2)] hover:border-sky-400' : 'bg-[#0a2540] hover:bg-[#0c2f52] text-white shadow-[0_4px_14px_rgba(10,37,64,0.25)]'}`}>Discuss Your Engineering Challenge</button></div>
          <div className="flex xl:hidden items-center gap-2"><button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${isDarkHero ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-200/70'}`} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button></div>
        </div>
      </div>
      {mobileMenuOpen && <div id="mobile-navigation" className={`xl:hidden border-b px-4 pt-3 pb-6 space-y-2 shadow-xl ${isDarkHero ? 'bg-[#051a33] border-sky-950 text-white' : 'bg-white border-slate-200 text-slate-900'}`}><div className="flex flex-col space-y-1">{navItems.map((item) => { const isActive = currentPage === item.id; return <button key={item.id} onClick={() => handleLinkClick(item.id)} className={`text-left px-3 py-2.5 rounded-md text-base font-semibold transition-colors flex items-center justify-between ${isActive ? (isDarkHero ? 'bg-sky-950/80 text-sky-300' : 'bg-sky-50 text-[#0066cc]') : (isDarkHero ? 'text-slate-300 hover:bg-slate-800/60 hover:text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900')}`}><span>{item.label}</span>{isActive && <span className="w-2 h-2 rounded-full bg-[#0066cc]" />}</button>; })}</div><div className="pt-4 border-t border-slate-200/20"><button onClick={() => { setMobileMenuOpen(false); onOpenEnquiryModal(); }} className="w-full py-3 px-4 bg-[#0a2540] hover:bg-[#0c2f52] text-white text-sm font-semibold rounded-lg text-center shadow-md transition-colors">Discuss Your Engineering Challenge</button></div></div>}
    </header>
  );
};