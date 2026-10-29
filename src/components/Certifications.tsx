import React from 'react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Recognized industry certifications from Google Cloud (NPTEL), ServiceNow, and Infosys Springboard.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              key={idx}
              className="glass-panel group relative p-6 rounded-3xl border border-white/[0.08] hover:border-violet-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon & Issuer */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/30 text-violet-300 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-violet-400" />
                  </div>
                  {cert.badge && (
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400">
                      {cert.badge}
                    </span>
                  )}
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400 font-mono font-medium">
                    {cert.issuer}
                  </p>
                </div>

                {/* Skills covered */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status footer */}
              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Certification</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

