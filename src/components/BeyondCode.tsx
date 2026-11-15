import React, { useState } from 'react';
import { 
  Trophy, 
  Gamepad2, 
  Flame, 
  Compass, 
  Sparkles, 
  ChevronRight,
  Target
} from 'lucide-react';
import { PERSONAL_INTERESTS } from '../data/portfolioData';

export const BeyondCode: React.FC = () => {
  const [activeInterest, setActiveInterest] = useState<string>('football');

  const selectedData = PERSONAL_INTERESTS.find((i) => i.id === activeInterest) || PERSONAL_INTERESTS[0];

  const getInterestIcon = (id: string) => {
    switch (id) {
      case 'football':
        return <Flame className="w-5 h-5 text-rose-600" />;
      case 'cricket':
        return <Target className="w-5 h-5 text-blue-600" />;
      case 'gaming':
        return <Gamepad2 className="w-5 h-5 text-amber-600" />;
      default:
        return <Compass className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="beyond-code" className="py-24 relative overflow-hidden bg-[#FAF9F6] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
            <span>05</span>
            <span className="w-8 h-[1px] bg-stone-300" />
            <span>Dimensions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 uppercase">
            BEYOND THE CODE
          </h2>
          <p className="mt-2 text-stone-500 text-sm sm:text-base font-serif italic max-w-xl">
            "Technology is my career interest. But there's more to my story."
          </p>
        </div>

        {/* Interactive Layout: Left selector pills, Right expansive showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interest Cards Selector */}
          <div className="lg:col-span-5 space-y-3">
            {PERSONAL_INTERESTS.map((interest) => {
              const isSelected = activeInterest === interest.id;
              return (
                <button
                  key={interest.id}
                  type="button"
                  onClick={() => setActiveInterest(interest.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white border-stone-900 shadow-md translate-x-1'
                      : 'bg-white/60 hover:bg-white border-stone-200/80 hover:border-stone-400'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-stone-100 flex items-center justify-center">
                      {getInterestIcon(interest.id)}
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-950 text-base uppercase tracking-tight">
                        {interest.title}
                      </h4>
                      <p className="text-xs text-stone-500 font-mono">
                        {interest.highlight}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-stone-900 translate-x-1' : 'text-stone-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Interest Deep-Dive Stage */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-7 sm:p-9 rounded-3xl space-y-6">
              
              {/* Card Meta & Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-black/[0.06]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-stone-100 text-stone-800 border border-stone-200">
                  <Sparkles className="w-3.5 h-3.5 text-stone-900" />
                  <span>{selectedData.category}</span>
                </div>
                <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">
                  Personal Pillar
                </span>
              </div>

              {/* Title & Highlight */}
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 uppercase tracking-tight">
                  {selectedData.title}
                </h3>
                <p className="font-serif italic text-lg sm:text-xl text-stone-700">
                  "{selectedData.highlight}"
                </p>
              </div>

              {/* Narrative description */}
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                {selectedData.description}
              </p>

              {/* Detailed Bullet Points */}
              <div className="space-y-2.5 pt-2">
                <h5 className="text-xs font-mono uppercase tracking-wider text-stone-400">
                  Key Insights & Philosophy
                </h5>
                <ul className="space-y-2">
                  {selectedData.details.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Decorative Accent */}
              {selectedData.id === 'football' && (
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 text-rose-900 text-xs flex items-center gap-3 font-mono">
                  <Trophy className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>"Dedication, relentless consistency, and high-pressure execution."</span>
                </div>
              )}

              {selectedData.id === 'cricket' && (
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-blue-900 text-xs flex items-center gap-3 font-mono">
                  <Target className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>"Patience, shot selection, and laying a solid opening foundation."</span>
                </div>
              )}

              {selectedData.id === 'gaming' && (
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 text-amber-900 text-xs flex items-center gap-3 font-mono">
                  <Gamepad2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>"Split-second spatial tactical awareness and team communication."</span>
                </div>
              )}

              {selectedData.id === 'technology' && (
                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-indigo-900 text-xs flex items-center gap-3 font-mono">
                  <Compass className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>"Autonomous agents, cloud microservices, and practical problem-solving."</span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

