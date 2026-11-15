import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Link2, 
  FileCheck2, 
  Cpu, 
  Binary 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterTabs = ['All', 'Full-Stack', 'AI / ML', 'IoT / Embedded', 'Algorithms'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  const renderAbstractGraphic = (id: string) => {
    switch (id) {
      case 'ai-fitness-platform':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950/60 via-[#121422] to-black p-6">
            <div className="relative flex flex-col items-center gap-3 z-10 text-center">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 flex items-center justify-center shadow-lg">
                <Activity className="w-7 h-7 text-indigo-400 animate-pulse" />
              </div>
              <div className="text-[11px] font-mono text-indigo-200 tracking-widest uppercase">
                Gemini AI • FastAPI • Cloud Run
              </div>
            </div>
            {/* SVG Wave */}
            <svg className="absolute bottom-0 inset-x-0 w-full h-14 opacity-25 text-indigo-400" viewBox="0 0 400 100" fill="none">
              <path d="M0 50 Q50 20 100 50 T200 50 T300 50 T400 50" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </div>
        );

      case 'url-shortener-analytics':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-950/60 via-[#1a1510] to-black p-6">
            <div className="relative flex flex-col items-center gap-3 z-10 text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shadow-lg">
                <Link2 className="w-7 h-7 text-amber-400" />
              </div>
              <div className="text-[11px] font-mono text-amber-200 tracking-widest uppercase">
                Short URL Hashing • Click Telemetry
              </div>
            </div>
          </div>
        );

      case 'erp-student-doc-management':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950/60 via-[#101726] to-black p-6">
            <div className="relative flex flex-col items-center gap-3 z-10 text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shadow-lg">
                <FileCheck2 className="w-7 h-7 text-blue-400" />
              </div>
              <div className="text-[11px] font-mono text-blue-200 tracking-widest uppercase">
                RBAC Matrix • Django Workflows
              </div>
            </div>
          </div>
        );

      case 'iot-smart-home':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950/60 via-[#0e1a14] to-black p-6">
            <div className="relative flex flex-col items-center gap-3 z-10 text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shadow-lg">
                <Cpu className="w-7 h-7 text-emerald-400" />
              </div>
              <div className="text-[11px] font-mono text-emerald-200 tracking-widest uppercase">
                ESP32 • MQTT Telemetry • Firebase
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950/60 via-[#171022] to-black p-6">
            <div className="relative flex flex-col items-center gap-3 z-10 text-center">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/40 text-purple-300 flex items-center justify-center shadow-lg">
                <Binary className="w-7 h-7 text-purple-400" />
              </div>
              <div className="text-[11px] font-mono text-purple-200 tracking-widest uppercase">
                LeetCode • DSA Practice • Java
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden dark-contrast-section border-t border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-400 mb-2">
              <span>03</span>
              <span className="w-8 h-[1px] bg-stone-600" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
              SELECTED WORK
            </h2>
            <p className="mt-2 text-stone-400 text-sm sm:text-base font-serif italic max-w-lg">
              "Some things I've explored, designed and built."
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedFilter === tab
                    ? 'bg-white text-stone-950 shadow-sm'
                    : 'bg-white/[0.05] text-stone-300 hover:text-white hover:bg-white/[0.1] border border-white/[0.08]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="dark-editorial-card rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview Graphic */}
                <div className="h-52 w-full border-b border-white/[0.08] relative overflow-hidden">
                  {renderAbstractGraphic(project.id)}
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5 z-20">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-mono font-medium backdrop-blur-md bg-black/60 border border-white/20 text-stone-200">
                      <Sparkles className="w-3 h-3" />
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 z-20 font-mono text-xs text-stone-400">
                    0{idx + 1}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-3.5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-stone-200 transition-colors uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-stone-400 font-serif italic">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/[0.05] border border-white/[0.08] text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-[11px] font-mono rounded-md bg-white/[0.02] text-stone-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-0 border-t border-white/[0.06] mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-stone-300 transition-colors group-hover:translate-x-0.5"
                >
                  <span>Read Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-stone-300 hover:text-white border border-white/[0.08] transition-colors"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-stone-300 hover:text-white border border-white/[0.08] transition-colors"
                      title="Live Platform"
                      aria-label="Live Platform"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Specs Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
