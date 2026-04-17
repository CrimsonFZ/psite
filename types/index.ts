export type Lang = "en" | "zh";

export type Localized<T = string> = {
  en: T;
  zh: T;
};

export interface Profile {
  name: string;
  chineseName: string;
  title: Localized<string>;
  university: Localized<string>;
  location?: Localized<string>;
  email: string;
  github: string;
  bio: Localized<string>;
  tagline: Localized<string>;
  interests: Localized<string[]>;
}

export interface EducationItem {
  institution: Localized<string>;
  program: Localized<string>;
  period: string | Localized<string>;
  gpa?: string;
  score?: string;
  description?: Localized<string>;
}

export type ProjectTag =
  | "Forecasting"
  | "Simulation"
  | "Web Platform"
  | "AI / NLP"
  | "Power Systems"
  | "Optimization"
  | "Multimodal";

export interface ProjectLinks {
  github?: string;
  paper?: string;
  demo?: string;
  pdf?: string;
}

export interface Project {
  slug: string;
  title: Localized<string>;
  subtitle?: Localized<string>;
  period: string | Localized<string>;
  featured?: boolean;
  summary: Localized<string>;
  background: Localized<string>;
  coreWork: Localized<string[]>;
  methods: Localized<string[]>;
  outcomes: Localized<string[]>;
  tags: ProjectTag[];
  tech: string[];
  coverImage?: string;
  gallery?: { src: string; alt: Localized<string> }[];
  links?: ProjectLinks;
}

export interface Award {
  title: Localized<string>;
  period: string;
  category?: Localized<string>;
  description?: Localized<string>;
}

export interface SkillGroup {
  category: Localized<string>;
  items: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
  phone?: string;
  note?: Localized<string>;
}

export interface NavItem {
  label: Localized<string>;
  href: string;
}

export interface SiteConfig {
  name: string;
  url: string;
  description: Localized<string>;
  author: string;
  nav: NavItem[];
  links: {
    github: string;
    email: string;
  };
}
