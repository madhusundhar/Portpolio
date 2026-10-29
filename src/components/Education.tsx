import React from 'react';
import { GraduationCap, Calendar, MapPin, School } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#07080e]/60 border-t border-white/[0.04]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Continuous technical learning from electrical engineering foundations to artificial intelligence and software systems.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel group relative p-6 sm:p-7 rounded-3xl border border-white/[0.08] hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Year Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                  <School className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    {edu.institution}
                  </p>
                </div>

                {/* Highlights */}
                {edu.highlights && (
                  <ul className="space-y-2 pt-2 border-t border-white/[0.06]">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Location Footer */}
              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

