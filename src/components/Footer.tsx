import React from 'react';
import { ArrowUp, Code2, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 py-16 border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-stone-950 flex items-center justify-center font-mono text-xs font-bold">
                MP
              </div>
              <span className="text-base font-bold text-white tracking-tight uppercase">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-stone-400 max-w-sm">
              Aspiring Software Developer & AI/DS Engineer passionate about building practical, impactful digital applications.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-400 border border-stone-800 transition-colors"
              title="LeetCode"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-rose-400 border border-stone-800 transition-colors"
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors ml-2"
              title="Scroll back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-stone-500">
            Coimbatore, Tamil Nadu, India • B.Tech AI & Data Science
          </p>
        </div>

      </div>
    </footer>
  );
};
