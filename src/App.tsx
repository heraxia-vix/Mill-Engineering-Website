import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { EnquiryModal } from './components/EnquiryModal.tsx';
import { HomeView } from './views/HomeView.tsx';
import { CapabilitiesView } from './views/CapabilitiesView.tsx';
import { IndustriesView } from './views/IndustriesView.tsx';
import { AboutView } from './views/AboutView.tsx';
import { TechnologyPartnersView } from './views/TechnologyPartnersView.tsx';
import { ResourcesView } from './views/ResourcesView.tsx';
import { ContactView } from './views/ContactView.tsx';
import { LegalView } from './views/LegalView.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('steel-metals');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryTopic, setEnquiryTopic] = useState('');

  // Synchronize with URL hash for easy sharing & back-button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash) {
        if (hash.startsWith('industry-')) {
          const indId = hash.replace('industry-', '');
          setSelectedIndustryId(indId);
          setCurrentPage('industries');
        } else {
          setCurrentPage(hash);
        }
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    const meta: Record<string, [string, string]> = {
      home: ['Mill Engineering | Engineering Solutions Company', 'Engineering solutions for Steel & Metals, Mining, Hydropower, Cement and Automotive industries.'],
      about: ['About Mill Engineering | Engineering Solutions', 'Engineering-led solutions, modernization and technology integration for demanding industrial applications.'],
      industries: ['Industries | Mill Engineering', 'Engineering solutions across Steel & Metals, Mining, Hydropower, Cement and Automotive.'],
      capabilities: ['Capabilities | Mill Engineering', 'Engineering solutions, modernization, industrial technologies and project support.'],
      'technology-partners': ['Technology Partners | Mill Engineering', 'Global industrial technologies integrated through application-focused engineering.'],
      resources: ['Resources | Mill Engineering', 'Technical resources, engineering notes and industrial knowledge from Mill Engineering.'],
      contact: ['Contact Mill Engineering', 'Discuss your industrial engineering challenge with Mill Engineering.']
    };
    const updateMeta = () => {
      const key = window.location.hash.replace('#','') || 'home';
      const [title, description] = meta[key] || meta.home;
      document.title = title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    };
    updateMeta();
    window.addEventListener('hashchange', updateMeta);

    window.addEventListener('hashchange', handleHashChange);
    return () => { window.removeEventListener('hashchange', handleHashChange); window.removeEventListener('hashchange', updateMeta); };
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (topic?: string) => {
    setEnquiryTopic(topic || '');
    setEnquiryModalOpen(true);
  };

  const handleSelectIndustry = (id: string) => {
    setSelectedIndustryId(id);
    window.location.hash = `industry-${id}`;
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900">Skip to content</a>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-sky-200 selection:text-sky-950">
      {/* Universal Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiryModal={() => handleOpenEnquiry()}
      />

      {/* Main Page Content Router */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenEnquiryModal={handleOpenEnquiry}
            onSelectIndustry={handleSelectIndustry}
          />
        )}

        {currentPage === 'capabilities' && (
          <CapabilitiesView
            onNavigate={handleNavigate}
            onOpenEnquiryModal={handleOpenEnquiry}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesView
            onNavigate={handleNavigate}
            onOpenEnquiryModal={handleOpenEnquiry}
            initialIndustryId={selectedIndustryId}
          />
        )}

        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenEnquiryModal={() => handleOpenEnquiry('General About Inquiry')}
          />
        )}

        {currentPage === 'technology-partners' && (
          <TechnologyPartnersView
            onNavigate={handleNavigate}
            onOpenEnquiryModal={handleOpenEnquiry}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesView
            onNavigate={handleNavigate}
            onOpenEnquiryModal={handleOpenEnquiry}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            prefilledTopic={enquiryTopic}
          />
        )}

        {currentPage === 'privacy-policy' && (
          <LegalView
            type="privacy-policy"
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'terms-of-service' && (
          <LegalView
            type="terms-of-service"
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Reusable Enquiry Dialog */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        defaultTopic={enquiryTopic}
      />
      </div>
    </>
  );
}
