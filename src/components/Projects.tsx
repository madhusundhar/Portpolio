import React, { useState } from 'react';
import { 
  FolderGit2, 
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

  // Render an original domain-specific SVG/CSS abstract preview
  const renderAbstractGraphic = (id: string) => {
    switch (id) {
      case 'ai-fitness-platform':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-950/40 via-[#0a0d1a] to-black">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative flex flex-col items-center gap-3 z-10">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-600/20 border border-violet-500/40 text-violet-300 shadow-xl shadow-violet-600/30">
                <Activity className="w-8 h-8 animate-pulse text-violet-400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                <span className="text-[11px] font-mono text-violet-300 tracking-wider uppercase">Gemini AI Engine • Cloud Run</span>
              </div>
            </div>
            {/* SVG Pulse Line */}
            <svg className="absolute bottom-2 inset-x-0 w-full h-16 opacity-30 text-violet-400" viewBox="0 0 400 100" fill="none">
              <path d="M0 50 Q50 50 80 50 L110 20 L130 80 L160 10 L180 60 L210 50 Q280 50 400 50" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </div>
        );

      case 'url-shortener-analytics':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-950/40 via-[#0a0d1a] to-black">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative flex flex-col items-center gap-3 z-10">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-500/20 border border-sky-400/40 text-sky-300 shadow-xl shadow-sky-500/30">
                <Link2 className="w-8 h-8 text-sky-400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span className="text-[11px] font-mono text-sky-300 tracking-wider uppercase">Hash Generator • Click Telemetry</span>
              </div>
            </div>
            {/* Abstract Analytics Bar Chart SVG */}
            <div className="absolute bottom-3 flex items-end gap-2 opacity-25">
              <div className="w-4 h-6 bg-sky-400 rounded-t" />
              <div className="w-4 h-12 bg-sky-400 rounded-t" />
              <div className="w-4 h-8 bg-sky-400 rounded-t" />
              <div className="w-4 h-16 bg-sky-400 rounded-t" />
              <div className="w-4 h-10 bg-sky-400 rounded-t" />
            </div>
          </div>
        );

      case 'erp-student-doc-management':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950/40 via-[#0a0d1a] to-black">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative flex flex-col items-center gap-3 z-10">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 shadow-xl shadow-indigo-500/30">
                <FileCheck2 className="w-8 h-8 text-indigo-400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="text-[11px] font-mono text-indigo-300 tracking-wider uppercase">RBAC Matrix • Django Backend</span>
              </div>
            </div>
          </div>
        );

      case 'iot-smart-home':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-950/40 via-[#0a0d1a] to-black">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative flex flex-col items-center gap-3 z-10">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 shadow-xl shadow-emerald-500/30">
                <Cpu className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-emerald-300 tracking-wider uppercase">ESP32 • MQTT Broker • Firebase</span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-950/40 via-[#0a0d1a] to-black">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative flex flex-col items-center gap-3 z-10">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 shadow-xl shadow-amber-500/30">
                <Binary className="w-8 h-8 text-amber-400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-[11px] font-mono text-amber-300 tracking-wider uppercase">LeetCode • Algorithms • Java</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#07080e]/60 border-t border-white/[0.04]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Projects & Engineering Work
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real solutions designed with clean architecture, cloud integrations, and verifiable source code.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedFilter === tab
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30'
                  : 'bg-white/[0.03] text-slate-400 hover:text-slate-200 hover:bg-white/[0.06] border border-white/[0.06]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel group rounded-3xl overflow-hidden border border-white/[0.08] hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Graphic Header */}
                <div className="h-48 w-full border-b border-white/[0.06] overflow-hidden relative">
                  {renderAbstractGraphic(project.id)}
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-20">
                    <span 
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md border"
                      style={{ 
                        backgroundColor: `${project.accentColor}20`,
                        borderColor: `${project.accentColor}40`,
                        color: project.accentColor
                      }}
                    >
                      <Sparkles className="w-3 h-3" />
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-white/[0.04] border border-white/[0.07] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-[11px] font-mono rounded-lg bg-white/[0.02] text-slate-500">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-white/[0.06] mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Details & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.08] hover:border-violet-500/40 transition-colors"
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-cyan-400 border border-white/[0.08] hover:border-cyan-500/40 transition-colors"
                      title="View Live Platform"
                      aria-label="View Live Platform"
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

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
