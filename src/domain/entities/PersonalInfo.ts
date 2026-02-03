export interface PersonalInfo {
  readonly name: string;
  readonly role: string;
  readonly mainStack: readonly string[];
  readonly email: string;
  readonly github: string;
  readonly linkedin: string;
  readonly twitter?: string;
  readonly cvUrl: string;
}

export interface SkillCategory {
  readonly frontend: readonly string[];
  readonly backend: readonly string[];
  readonly cloud: readonly string[];
}

export interface ExperienceEntry {
  readonly title: string;
  readonly company: string;
  readonly period: string;
  readonly description: {
    readonly es: string;
    readonly en: string;
  };
}

export interface AboutContent {
  readonly es: string;
  readonly en: string;
}

export interface PortfolioConfig {
  readonly personal: PersonalInfo;
  readonly about: AboutContent;
  readonly skills: SkillCategory;
  readonly experience: readonly ExperienceEntry[];
}
