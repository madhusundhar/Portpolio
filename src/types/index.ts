export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  category: 'Full-Stack' | 'AI / ML' | 'IoT / Embedded' | 'Algorithms';
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  accentColor: string; // Hex or gradient
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Frontend' | 'Backend & APIs' | 'Databases & Cloud' | 'Tools' | 'AI & Data Science';
  level?: string;
  iconName?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badge?: string;
  skills: string[];
}

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

