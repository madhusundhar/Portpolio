import React, { useState } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Terminal, 
  Cpu, 
  Code, 
  Layers, 
  BookOpen, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [copiedTerminal, setCopiedTerminal] = useState(false);

  const terminalContent = `{
  "developer": "Madhusundharan P",
  "education": "B.Tech AI & Data Science (2024–2027)",
  "institution": "Karpagam Academy of Higher Education",
  "location": "Coimbatore, Tamil Nadu, India",
  "core_focus": ["Full-Stack Development", "FastAPI & Django", "AI Integration"],
  "currently_learning": "Advanced Microservices & LLM Engineering",
  "open_to": ["Software Engineer Internships", "Full-Stack Roles", "Collaborations"]
}`;

  const copyTerminal = () => {
    navigator.clipboard.writeText(terminalContent);
    setCopiedTerminal(true);
    setTimeout(() => setCopiedTerminal(false), 2000);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07080e]/50 border-t border-white/[0.04]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering Systems, Solving Practical Challenges
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A student of Artificial Intelligence & Data Science with a deep passion for scalable software engineering, full-stack web platforms, and applied machine learning.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Biography & Core Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-5 border border-white/[0.08]">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span>Who I Am</span>
                <span className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent" />
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am <strong className="text-white font-semibold">Madhusundharan P</strong>, currently pursuing my B.Tech in Artificial Intelligence & Data Science at <span className="text-violet-300">Karpagam Academy of Higher Education</span> (2024–2027). My technical journey started with a Diploma in Electrical and Electronics Engineering from <span className="text-cyan-300">Sri Ramakrishna Mission Polytechnic College</span> (2021–2024), where I discovered the power of bridging hardware intelligence with software logic.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Whether creating an <strong className="text-slate-100">AI-powered wellness application</strong> deployed on Google Cloud Run, architecting an <strong className="text-slate-100">ERP document management platform</strong> in Django, or analyzing click telemetry for an authenticated <strong className="text-slate-100">URL shortener</strong>, I prioritize clean architecture, maintainability, and solving actual friction points.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Full-Stack Craft</h4>
                    <p className="text-xs text-slate-400 mt-0.5">React, FastAPI, Django, and modern cloud deployment pipelines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">AI & Data Science</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Practical ML models, data analysis, and Gemini API integration.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">System Design & IoT</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Microcontroller integration with ESP32, MQTT protocols, and cloud sync.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Algorithmic Rigor</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Data structures & algorithmic problem solving with Java & C++.</p>
                  </div>
                </div>
              </div>

              {/* Location & Status Bar */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-violet-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Available for 2025/2026 Internships</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal & Key Badges */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Terminal Card */}
            <div className="rounded-3xl bg-[#090b14] border border-white/[0.1] shadow-2xl overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#0d101d] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-violet-400" />
                    madhu-env ~ developer.json
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyTerminal}
                  className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
                  title="Copy JSON configuration"
                  aria-label="Copy terminal config"
                >
                  {copiedTerminal ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] text-slate-300 leading-relaxed overflow-x-auto">
                <div className="text-slate-500 mb-2">// Active developer profile snapshot</div>
                <pre className="text-violet-300">
                  <code>{terminalContent}</code>
                </pre>
              </div>
            </div>

            {/* Quick Metrics & Certifications Highlight */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-2xl border border-white/[0.08] space-y-1">
                <span className="text-xs font-mono uppercase text-slate-500">Education</span>
                <div className="text-xl font-bold text-white">B.Tech</div>
                <div className="text-xs text-violet-400 font-medium truncate">AI & Data Science</div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/[0.08] space-y-1">
                <span className="text-xs font-mono uppercase text-slate-500">Experience</span>
                <div className="text-xl font-bold text-white">Full Stack</div>
                <div className="text-xs text-cyan-400 font-medium truncate">Neural Arc Global</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

