import React from 'react';
import { 
  Code, 
  Cpu, 
  Cloud, 
  Terminal, 
  Award,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const personalFacts = [
    { label: 'Degree', value: 'B.Tech AI & Data Science' },
    { label: 'University', value: 'Karpagam Academy of Higher Education' },
    { label: 'Timeline', value: '2024 – 2027' },
    { label: 'Diploma', value: 'EEE, Sri Ramakrishna Mission Polytechnic' },
    { label: 'Certifications', value: 'Google Cloud, ServiceNow' },
    { label: 'Focus Areas', value: 'Full-Stack, Python/FastAPI, AI & Cloud' },
  ];

  const focusAreas = [
    {
      title: 'Full-Stack Engineering',
      desc: 'Developing scalable web architectures using React, Vite, Node.js, and Django.',
      icon: <Code className="w-4 h-4 text-stone-900" />
    },
    {
      title: 'AI & Data Science',
      desc: 'Integrating machine learning models, Gemini API services, and data analytics.',
      icon: <Cpu className="w-4 h-4 text-stone-900" />
    },
    {
      title: 'Backend & Cloud Systems',
      desc: 'Building RESTful APIs with FastAPI and containerizing on Google Cloud Run.',
      icon: <Cloud className="w-4 h-4 text-stone-900" />
    },
    {
      title: 'Problem-Solving & DSA',
      desc: 'Practicing algorithmic efficiency and clean data structure design in Java and C++.',
      icon: <Terminal className="w-4 h-4 text-stone-900" />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
            <span>01</span>
            <span className="w-8 h-[1px] bg-stone-300" />
            <span>Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 uppercase">
            A LITTLE ABOUT ME
          </h2>
          <p className="mt-2 text-stone-500 text-sm sm:text-base font-serif italic max-w-xl">
            Passionate about turning practical ideas into scalable, functional software.
          </p>
        </div>

        {/* Editorial Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Portrait Composition */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-6">
              
              {/* Image Frame */}
              <div className="portrait-frame bg-stone-100 p-2 sm:p-2.5">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-stone-200">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle tonal caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-stone-950/85 backdrop-blur-md text-white text-xs flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white tracking-wide">
                        {PERSONAL_INFO.name}
                      </div>
                      <div className="text-[10px] font-mono text-stone-400">
                        {PERSONAL_INFO.location}
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Quick Fact Matrix */}
              <div className="editorial-card p-5 rounded-2xl space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 pb-2 border-b border-black/[0.06] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-stone-700" />
                  <span>Key Facts at a Glance</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {personalFacts.map((fact, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="text-[10px] font-mono text-stone-400 uppercase">{fact.label}</span>
                      <p className="font-semibold text-stone-900 leading-snug">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Biography & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Biography Narrative */}
            <div className="space-y-5 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p className="font-serif text-2xl sm:text-3xl text-stone-950 leading-snug font-normal">
                "I believe the most valuable code is the code that solves tangible friction for real people."
              </p>

              <p>
                I am <strong className="text-stone-950 font-semibold">{PERSONAL_INFO.name}</strong>, currently pursuing my B.Tech in Artificial Intelligence & Data Science at <span className="text-stone-950 font-medium">Karpagam Academy of Higher Education</span> (2024–2027). My technical foundation began with a Diploma in Electrical and Electronics Engineering from <span className="text-stone-950 font-medium">Sri Ramakrishna Mission Polytechnic College</span> (2021–2024), where I discovered the thrill of connecting embedded hardware with digital software.
              </p>

              <p>
                My focus centers on full-stack development, modern backend microservices, and practical machine learning applications. Whether architecting an <span className="text-stone-950 font-medium">AI-powered wellness application</span> deployed on Google Cloud Run, designing an <span className="text-stone-950 font-medium">ERP academic document portal</span> in Django, or engineering an <span className="text-stone-950 font-medium">authenticated URL shortener</span> with click analytics, I write clean, well-tested code with maintainable architecture.
              </p>
            </div>

            {/* Core Interest Pillars */}
            <div className="space-y-4 pt-4 border-t border-black/[0.06]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Core Engineering Interests
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="editorial-card p-5 rounded-2xl space-y-2 border border-black/[0.06]"
                  >
                    <div className="p-2 rounded-xl bg-stone-100 w-fit">
                      {area.icon}
                    </div>
                    <h4 className="font-semibold text-stone-900 text-sm">
                      {area.title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic & Professional Milestones highlight */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                <Award className="w-4 h-4 text-stone-900" />
                <span>Continuous Learning Mindset</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Certified in <strong className="text-stone-900 font-semibold">Google Cloud Computing (NPTEL)</strong> and <strong className="text-stone-900 font-semibold">ServiceNow (CSA & CAD)</strong>, with a continuous focus on full-stack web applications, cloud infrastructure, and algorithmic problem-solving.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
