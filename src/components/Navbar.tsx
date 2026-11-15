import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onResumeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);

      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Beyond Code', href: '#beyond-code' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top progress line */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-stone-900 z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-black/[0.06] py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Minimal Brand Monogram / Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center font-mono text-xs font-bold tracking-wider group-hover:scale-105 transition-transform">
                MP
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-stone-900 text-sm tracking-tight group-hover:text-stone-600 transition-colors uppercase">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] font-mono text-stone-500 tracking-tight">
                  Portfolio / 2026
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-stone-100/80 border border-black/[0.05] rounded-full px-4 py-1.5 backdrop-blur-sm">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-stone-900 shadow-sm'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-black/[0.03]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Resume & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  onResumeClick();
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-50 border border-stone-200 rounded-full transition-all duration-200 shadow-xs hover:border-stone-400 group"
              >
                <FileText className="w-3.5 h-3.5 text-stone-600 group-hover:text-stone-900" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-stone-950 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-[480px] opacity-100 border-b border-black/[0.08]' : 'max-h-0 opacity-0'
          } bg-[#FAF9F6]/95 backdrop-blur-xl`}
        >
          <div className="px-5 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-700 hover:bg-black/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-black/[0.06]">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-xl"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
