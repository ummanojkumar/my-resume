
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  client?: string;
  description: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
