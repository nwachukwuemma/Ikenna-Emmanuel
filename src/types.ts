export interface ProfileInfo {
  name: string;
  brandAlias: string;
  tagline: string;
  title: string;
  secondaryTitle: string;
  bio: string;
  extendedBio: string;
  email: string;
  whatsapp?: string;
  whatsappUrl?: string;
  location: string;
  timezone: string;
  availability: 'Open to opportunities' | 'Available for contract' | 'Currently booked';
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl?: string;
  portfolioUrl?: string;
  avatarUrl: string;
  avatarPosition?: string;
  avatarScale?: number;
  yearsOfExperience: number;
  projectsCompleted: number;
  happyClients: number;
  uploadedPdfFile?: {
    name: string;
    dataUrl: string;
    uploadDate: string;
    fileSize?: string;
  };
  certifications?: {
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    skillsValidated: string[];
  }[];
  creatorBrand?: {
    alias: string;
    focus: string;
    productionStack: string[];
    platform: string;
    productTitle: string;
    productDescription: string;
    productUrl?: string;
  };
  lifestyleAttributes?: {
    category: string;
    title: string;
    description: string;
    icon: string;
  }[];
}

export type ProjectCategory = 
  | 'All' 
  | 'Cybersecurity & SOC' 
  | 'AI & Automation' 
  | 'Infrastructure & Labs' 
  | 'Web & Digital Tools';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Cybersecurity & SOC' | 'AI & Automation' | 'Infrastructure & Labs' | 'Web & Digital Tools';
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image: string;
  stars?: number;
  forks?: number;
  architectureDetails?: {
    problem: string;
    solution: string;
    keyFeatures: string[];
    metrics: string[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Education' | 'Creator';
  summary: string;
  achievements: string[];
  skills: string[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 1-100
    experienceYears: string;
    highlight?: boolean;
  }[];
}

export interface ResumeSection {
  title: string;
  items: {
    heading: string;
    subheading?: string;
    date?: string;
    points: string[];
  }[];
}

export interface ResumeItem {
  id: string;
  title: string;
  targetRole: string;
  version: string;
  lastUpdated: string;
  summary: string;
  downloadFileName: string;
  fileName?: string;
  fileDataUrl?: string; // If user uploaded custom PDF/file
  externalLink?: string; // E.g. Google Drive link
  coreSkills: string[];
  certificationsList?: string[];
  experienceList: {
    role: string;
    company: string;
    period: string;
    points: string[];
  }[];
  education: {
    degree: string;
    school: string;
    year: string;
  }[];
}

export interface GitHubRepoPreview {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updated: string;
  htmlUrl: string;
  tags: string[];
}
