export type ProjectStatus = 'shipped' | 'building' | 'experimental' | 'paused';
export type ProjectCategory = 'ai' | 'software' | 'data' | 'design' | 'community';
export type ExperimentStatus = 'building' | 'experimental' | 'paused' | 'shipped';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  status: ProjectStatus;
  featured: boolean;
  categories: ProjectCategory[];
  role: string[];
  stack: string[];
  problem: string;
  solution: string;
  outcome?: string[];
  cover: string;
  links: {
    github?: string;
    live?: string;
  };
}

export interface Experiment {
  id: string;
  title: string;
  description: string;
  status: ExperimentStatus;
  technologies: string[];
}

export interface CommunityActivity {
  id: string;
  organization: string;
  role: string;
  description: string;
  year: string;
  activities: string[];
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  summary: string;
  bio: string;
  email: string;
  github: string;
  linkedin?: string;
  currentFocus: string[];
}
