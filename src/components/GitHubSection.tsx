import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Star, 
  GitFork, 
  Code2, 
  Terminal, 
  RefreshCw,
  FolderGit2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import type { GitHubRepo } from '../types';
import { GithubIcon } from './Icons';

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  // Verified baseline fallback
  const fallbackRepos: GitHubRepo[] = [
    {
      name: 'URL-Shortener-with-Analytics',
      html_url: 'https://github.com/madhusundhar/URL-Shortener-with-Analytics',
      description: 'A full-stack URL shortener with analytics, click tracking, and user auth.',
      language: 'JavaScript',
      stargazers_count: 1,
      forks_count: 0,
      updated_at: '2026-10-17T07:21:23Z'
    },
    {
      name: 'leetcode-problems',
      html_url: 'https://github.com/madhusundhar/leetcode-problems',
      description: 'Data structures and algorithmic solutions in Java for competitive programming.',
      language: 'Java',
      stargazers_count: 0,
      forks_count: 0,
      updated_at: '2026-10-14T15:35:52Z'
    },
    {
      name: 'JAVA',
      html_url: 'https://github.com/madhusundhar/JAVA',
      description: 'Object-oriented programming, core Java concepts, and design patterns repository.',
      language: 'Java',
      stargazers_count: 0,
      forks_count: 0,
      updated_at: '2026-10-14T15:35:52Z'
    },
    {
      name: 'IOS-SWIFT',
      html_url: 'https://github.com/madhusundhar/IOS-SWIFT',
      description: 'iOS application development exercises and Swift UI exploratory projects.',
      language: 'Swift',
      stargazers_count: 0,
      forks_count: 0,
      updated_at: '2026-10-14T15:35:52Z'
    }
  ];

  useEffect(() => {
    let isMounted = true;
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/madhusundhar/repos?sort=updated&per_page=6');
        if (!response.ok) throw new Error('API Rate Limit or Network error');
        const data = await response.json();
        if (isMounted && Array.isArray(data) && data.length > 0) {
          // Filter out profile readme repo
          const filtered = data
            .filter((r: any) => r.name !== 'madhusundhar' && r.name !== 'Portpolio')
            .slice(0, 4);
          setRepos(filtered.length > 0 ? filtered : fallbackRepos);
          setIsLive(true);
        }
      } catch {
        if (isMounted) {
          setRepos(fallbackRepos);
          setIsLive(false);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchGitHubData();
    return () => { isMounted = false; };
  }, []);

  const getLanguageColor = (lang: string | null) => {
    switch (lang) {
      case 'JavaScript':
        return 'bg-amber-400';
      case 'Java':
        return 'bg-red-400';
      case 'Swift':
        return 'bg-orange-400';
      case 'Python':
        return 'bg-blue-400';
      case 'C++':
        return 'bg-pink-400';
      default:
        return 'bg-violet-400';
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#07080e]/60 border-t border-white/[0.04]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Open Source & Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Developer Activity & Repositories
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Directly connected to verified profiles on GitHub and LeetCode. Real repositories, commit history, and algorithmic problem-solving.
          </p>
        </div>

        {/* LeetCode & GitHub Banner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* GitHub Profile Card */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel group p-6 rounded-3xl border border-white/[0.08] hover:border-violet-500/40 hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.08] text-white group-hover:scale-105 group-hover:border-violet-500/40 transition-all">
                <GithubIcon className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                    GitHub / madhusundhar
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    {isLive ? 'Live Sync' : 'Verified'}
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Explore public repositories, commits, and source code.
                </p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* LeetCode Profile Card */}
          <a
            href={PERSONAL_INFO.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel group p-6 rounded-3xl border border-white/[0.08] hover:border-amber-500/40 hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-105 group-hover:border-amber-500/40 transition-all">
                <Code2 className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    LeetCode / madhusundhar
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Competitive
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Algorithmic challenges, data structures, and optimization.
                </p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

        </div>

        {/* Public Repositories Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>Public Repositories</span>
            </h4>
            {isLoading && (
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <RefreshCw className="w-3 h-3 animate-spin text-violet-400" />
                Connecting to GitHub...
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel group p-5 rounded-2xl border border-white/[0.07] hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <span className="font-semibold text-sm sm:text-base text-white group-hover:text-violet-300 transition-colors flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-slate-500 group-hover:text-violet-400" />
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {repo.description || 'Repository maintained by Madhusundharan P.'}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-white/[0.04]">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}`} />
                      <span>{repo.language}</span>
                    </div>
                  )}

                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1 text-slate-400">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-1 text-slate-400">
                    <GitFork className="w-3 h-3 text-slate-500" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
