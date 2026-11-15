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
        return 'bg-stone-500';
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#FAF9F6] border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
            <span>07</span>
            <span className="w-8 h-[1px] bg-stone-300" />
            <span>Open Source</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 uppercase">
            DEVELOPER ACTIVITY
          </h2>
          <p className="mt-2 text-stone-500 text-sm sm:text-base font-serif italic max-w-xl">
            Directly connected to verified profiles on GitHub and LeetCode. Real repositories, code practice and problem-solving.
          </p>
        </div>

        {/* LeetCode & GitHub Banner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* GitHub Profile Card */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-card group p-6 sm:p-7 rounded-2xl flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-stone-100 text-stone-950 group-hover:scale-105 transition-transform">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-stone-950 uppercase tracking-tight">
                    GitHub / madhusundhar
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                    {isLive ? 'Live Sync' : 'Verified'}
                  </span>
                </div>
                <p className="text-xs text-stone-500">
                  Explore public repositories, commits, and source code.
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-stone-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* LeetCode Profile Card */}
          <a
            href={PERSONAL_INFO.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-card group p-6 sm:p-7 rounded-2xl flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-amber-50 text-amber-600 group-hover:scale-105 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-stone-950 uppercase tracking-tight">
                    LeetCode / madhusundhar
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                    Competitive
                  </span>
                </div>
                <p className="text-xs text-stone-500">
                  Algorithmic challenges, data structures, and optimization practice.
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

        </div>

        {/* Public Repositories Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-stone-900" />
              <span>Verified Repositories</span>
            </h4>
            {isLoading && (
              <span className="flex items-center gap-1.5 text-xs text-stone-500">
                <RefreshCw className="w-3 h-3 animate-spin" />
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
                className="editorial-card group p-5 rounded-2xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between">
                    <span className="font-semibold text-sm sm:text-base text-stone-950 group-hover:text-stone-700 transition-colors flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-stone-400" />
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-950" />
                  </div>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-normal">
                    {repo.description || 'Repository maintained by Madhusundharan P.'}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-stone-500 pt-3 border-t border-black/[0.05]">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                      <span>{repo.language}</span>
                    </div>
                  )}

                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-stone-400" />
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
