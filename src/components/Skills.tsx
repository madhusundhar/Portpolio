import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Server, 
  Wrench, 
  Brain, 
  Layout, 
  Sparkles,
  Search
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

type CategoryType = 'All' | 'Programming' | 'Frontend' | 'Backend & APIs' | 'Databases & Cloud' | 'Tools' | 'AI & Data Science';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { label: CategoryType; icon: React.ReactNode }[] = [
    { label: 'All', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: 'Programming', icon: <Terminal className="w-3.5 h-3.5" /> },
    { label: 'Frontend', icon: <Layout className="w-3.5 h-3.5" /> },
    { label: 'Backend & APIs', icon: <Server className="w-3.5 h-3.5" /> },
    { label: 'Databases & Cloud', icon: <Database className="w-3.5 h-3.5" /> },
    { label: 'Tools', icon: <Wrench className="w-3.5 h-3.5" /> },
    { label: 'AI & Data Science', icon: <Brain className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Category badge color lookup
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Programming':
        return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'Frontend':
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'Backend & APIs':
        return 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20';
      case 'Databases & Cloud':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Tools':
        return 'text-pink-400 bg-pink-400/10 border-pink-400/20';
      case 'AI & Data Science':
        return 'text-violet-400 bg-violet-400/10 border-violet-400/20';
      default:
        return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Core Technologies & Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Compiled from active academic coursework, full-stack projects, and verified repositories. Structured without artificial ratings.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat.label}
                type="button"
                onClick={() => setSelectedCategory(cat.label)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat.label
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search skill (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/60 transition-all"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel group relative p-4 rounded-2xl border border-white/[0.07] hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${getCategoryColor(skill.category)}`}>
                  {skill.category.split(' ')[0]}
                </span>
              </div>
              <div className="font-semibold text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors">
                {skill.name}
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl border border-white/[0.08]">
            <p className="text-slate-400 text-sm">No skills matching "{searchQuery}" in {selectedCategory}.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-violet-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

