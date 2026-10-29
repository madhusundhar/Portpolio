import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Code2, 
  Mail, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Hero3DCanvas } from './Hero3DCanvas';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  const roles = PERSONAL_INFO.roles;

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(120);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        setTypingSpeed(40);
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(200);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-violet-500/[0.08] border border-violet-500/20 text-violet-300 text-xs sm:text-sm font-medium w-fit backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
              <span>Full-Stack Development & AI/DS Enthusiast</span>
            </div>

            {/* Main Headline & Identity */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Hi, I'm <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
              </h1>
              
              {/* Typewriter role cycling */}
              <div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 min-h-[40px]">
                <span className="text-slate-400 font-normal">I am an</span>
                <span className="text-cyan-400 font-mono font-medium underline decoration-violet-500/40 decoration-2 underline-offset-4">
                  {displayedText}
                </span>
                <span className="w-[3px] h-6 sm:h-8 bg-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* Headline statement & bio */}
            <div className="space-y-4 max-w-2xl">
              <p className="text-lg sm:text-xl font-medium text-slate-200 leading-snug">
                "{PERSONAL_INFO.headline}"
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-500 shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 transition-all duration-200 transform hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Madhusundharan_P_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-violet-500/40 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm group focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                <Download className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Verified Social & Code Platform Links */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Connect & Code:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.08] hover:border-violet-500/40 transition-all transform hover:-translate-y-0.5"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.08] hover:border-violet-500/40 transition-all transform hover:-translate-y-0.5"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-amber-400 border border-white/[0.08] hover:border-amber-500/40 transition-all transform hover:-translate-y-0.5"
                  title="LeetCode Profile"
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-400 border border-white/[0.08] hover:border-cyan-500/40 transition-all transform hover:-translate-y-0.5"
                  title="Send Direct Email"
                  aria-label="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Canvas + Profile Centerpiece */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* The Three.js Interactive Geometry Canvas */}
            <div className="w-full h-[400px] sm:h-[480px] relative">
              <Hero3DCanvas />

              {/* Floating verified GitHub avatar & status pill */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#0b0e1b]/85 border border-white/10 backdrop-blur-xl shadow-2xl z-20 max-w-[90%] pointer-events-auto hover:border-violet-500/40 transition-all">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-violet-400/50 flex-shrink-0">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full" />
                </div>
                <div className="flex flex-col text-left truncate">
                  <span className="text-xs font-semibold text-slate-200 truncate">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono truncate">
                    B.Tech AI & Data Science
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="w-full flex justify-center pt-8">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-violet-400 transition-colors group focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-8 rounded-full border border-slate-600 group-hover:border-violet-400 flex items-start justify-center p-1 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-violet-400 animate-bounce" />
            </div>
            <ChevronDown className="w-3.5 h-3.5 -mt-1 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
