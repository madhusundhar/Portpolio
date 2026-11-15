import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Calendar 
} from 'lucide-react';
import { JOURNEY_DATA } from '../data/portfolioData';
import type { JourneyMilestone } from '../types';

export const Journey: React.FC = () => {
  const getIcon = (type: JourneyMilestone['type']) => {
    switch (type) {
      case 'Internship':
        return <Briefcase className="w-4 h-4 text-stone-900" />;
      case 'Achievement':
        return <Trophy className="w-4 h-4 text-stone-900" />;
      default:
        return <GraduationCap className="w-4 h-4 text-stone-900" />;
    }
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-white border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
            <span>04</span>
            <span className="w-8 h-[1px] bg-stone-300" />
            <span>Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 uppercase">
            MY JOURNEY
          </h2>
          <p className="mt-2 text-stone-500 text-sm sm:text-base font-serif italic max-w-xl">
            A chronological progression of technical education, industry internship, and software development milestones.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="max-w-4xl mx-auto relative pl-4 sm:pl-8 border-l border-stone-200 space-y-10">
          {JOURNEY_DATA.map((milestone, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[23px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-stone-900 flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
              </div>

              {/* Card Container */}
              <div className="editorial-card p-6 sm:p-7 rounded-2xl space-y-3.5">
                
                {/* Milestone Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-black/[0.05]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-stone-100">
                      {getIcon(milestone.type)}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
                      {milestone.type}
                    </span>
                    {milestone.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-amber-100 text-amber-800 border border-amber-200">
                        {milestone.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-stone-600">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{milestone.year}</span>
                  </div>
                </div>

                {/* Title & Organization */}
                <div className="space-y-0.5">
                  <h3 className="text-lg sm:text-xl font-bold text-stone-950 uppercase tracking-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-stone-600">
                    {milestone.organization}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  {milestone.description}
                </p>

                {/* Tags */}
                {milestone.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-stone-100 text-stone-600 border border-stone-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
