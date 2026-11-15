import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Code2, 
  Mail, 
  MapPin,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  const roles = PERSONAL_INFO.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(120);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        setTypingSpeed(45);
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(250);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Editorial Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-black/[0.08]">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-stone-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for 2025/2026 Opportunities</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
            <MapPin className="w-3.5 h-3.5 text-stone-700" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-stone-500 font-medium">
                Software Developer & AI Engineer
              </span>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-950 uppercase leading-[1.05]">
                {PERSONAL_INFO.name}
              </h1>

              {/* Animated Role Text */}
              <div className="flex items-center gap-2.5 text-lg sm:text-2xl font-mono text-stone-700 min-h-[38px] pt-1">
                <span className="text-stone-400 font-normal">I am an</span>
                <span className="font-semibold text-stone-900 border-b-2 border-stone-900 pb-0.5">
                  {displayedText}
                </span>
                <span className="w-2 h-5 sm:h-6 bg-stone-900 animate-pulse" />
              </div>
            </div>

            {/* Headline statement & Introduction */}
            <div className="space-y-4 max-w-2xl border-l-2 border-stone-300 pl-5">
              <p className="font-serif italic text-2xl sm:text-3xl text-stone-900 leading-snug">
                "{PERSONAL_INFO.headline}"
              </p>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                {PERSONAL_INFO.introduction}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-stone-950 hover:bg-stone-800 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 group focus:outline-none"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Madhusundharan_P_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 hover:border-stone-500 transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs group focus:outline-none"
              >
                <Download className="w-4 h-4 text-stone-600 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Verified Social Profile Links */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 mr-2">
                Profiles:
              </span>
              
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 hover:text-stone-950 border border-stone-200 transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 hover:text-blue-600 border border-stone-200 transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 hover:text-amber-600 border border-stone-200 transition-all"
                title="LeetCode Profile"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 hover:text-rose-600 border border-stone-200 transition-all"
                title="Send Direct Email"
                aria-label="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Actual Photograph Centerpiece */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] mx-auto">
              
              {/* Elegant Portrait Frame with Subtle Double Border */}
              <div className="portrait-frame bg-stone-100 border border-stone-200/80 p-2 sm:p-2.5">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-200">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                  {/* Subtle tonal overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating badge inside portrait */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 text-stone-900 shadow-md flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-xs tracking-tight text-stone-900">
                        {PERSONAL_INFO.name}
                      </div>
                      <div className="text-[11px] font-mono text-stone-600">
                        B.Tech AI & Data Science
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-[10px] font-mono font-medium text-stone-700">
                      <Sparkles className="w-3 h-3 text-stone-900" />
                      <span>Karpagam '27</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative background outline offset */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border border-stone-300/80 -z-10 hidden sm:block pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="w-full flex justify-center pt-12">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="flex flex-col items-center gap-1.5 text-stone-400 hover:text-stone-900 transition-colors group focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
