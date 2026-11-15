import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Tag, Layers, Sparkles } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-stone-200 shadow-2xl p-6 sm:p-8 space-y-6 text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors focus:outline-none"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-stone-100 text-stone-700 border border-stone-200">
            <Sparkles className="w-3.5 h-3.5 text-stone-900" />
            <span>{project.category}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 uppercase tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-stone-600 font-serif italic">
            "{project.tagline}"
          </p>
        </div>

        {/* Full Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-stone-700" />
            <span>Project Architecture</span>
          </h4>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Architectural Highlights */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 flex items-center gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-stone-700" />
            <span>Verified Highlights</span>
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-2 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Chip Cloud */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-stone-700" />
            <span>Technology Stack</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-stone-100 border border-stone-200 text-stone-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-300 ml-1" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-all"
              >
                <span>Live View / Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
