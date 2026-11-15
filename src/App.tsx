import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { BeyondCode } from './components/BeyondCode';
import { Certifications } from './components/Certifications';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'journey',
      'beyond-code',
      'certifications',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-stone-900 selection:bg-stone-900 selection:text-white">
      {/* Desktop Inverting Cursor */}
      <CustomCursor />

      {/* Modern Minimal Navigation */}
      <Navbar 
        activeSection={activeSection} 
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onResumeClick={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <BeyondCode />
        <Certifications />
        <GitHubSection />
        <Contact onResumeClick={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
