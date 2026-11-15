import React from 'react';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-white border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
            <span>06</span>
            <span className="w-8 h-[1px] bg-stone-300" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 uppercase">
            CERTIFICATIONS
          </h2>
          <p className="mt-2 text-stone-500 text-sm sm:text-base font-serif italic max-w-xl">
            Recognized industry credentials verified by Google Cloud (NPTEL), ServiceNow, and Infosys Springboard.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              key={idx}
              className="editorial-card p-6 rounded-2xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-stone-100 text-stone-900">
                    <ShieldCheck className="w-5 h-5 text-stone-900" />
                  </div>
                  {cert.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600">
                      {cert.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-stone-950 uppercase tracking-tight leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-stone-500 font-medium">
                    {cert.issuer}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-stone-50 border border-stone-200 text-stone-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-black/[0.05] flex items-center gap-1.5 text-xs text-stone-900 font-mono">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Certification</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
