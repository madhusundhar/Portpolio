import React, { useState } from 'react';
import { 
  Terminal, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Brain, 
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

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#FAF9F6] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
              <span>02</span>
              <span className="w-8 h-[1px] bg-stone-300" />
              <span>Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 uppercase">
              TECHNOLOGIES I WORK WITH
            </h2>
            <p className="mt-2 text-stone-500 text-sm sm:text-base font-serif italic max-w-lg">
              Structured directly from coursework, verified GitHub repositories, and full-stack projects.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Filter by technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-stone-200 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap mb-10 pb-4 border-b border-black/[0.06]">
          {categories.map((cat) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => setSelectedCategory(cat.label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                selectedCategory === cat.label
                  ? 'bg-stone-950 text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:text-stone-950 hover:bg-stone-100 border border-stone-200/80'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="editorial-card group p-4 rounded-2xl flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200">
                  {skill.category.split(' ')[0]}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300 group-hover:bg-stone-950 transition-colors" />
              </div>
              <div className="font-semibold text-stone-900 text-sm sm:text-base group-hover:translate-x-0.5 transition-transform">
                {skill.name}
              </div>
            </div>
          ))}
        </div>

        {/* Empty filter message */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <p className="text-stone-500 text-sm">No technologies match "{searchQuery}" in {selectedCategory}.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs font-semibold text-stone-900 underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
