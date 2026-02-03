import type { Language } from '../types/Language';

export type Translations = {
  readonly nav: { home: string; about: string; projects: string; skills: string; experience: string; contact: string; lang: string; langEs: string; langEn: string };
  readonly hero: { greeting: string; role: string; description: string; github: string; cv: string; viewProjects: string };
  readonly about: { title: string; subtitle: string };
  readonly projects: {
    readonly featured: string;
    readonly subtitle: string;
    readonly all: string;
    readonly filter: string;
    readonly filterAll: string;
    readonly sortBy: string;
    readonly sortDate: string;
    readonly sortStars: string;
    readonly viewCode: string;
    readonly viewDemo: string;
    readonly noProjects: string;
    readonly descriptions: Record<string, string>;
  };
  readonly skills: { title: string; subtitle: string; frontend: string; backend: string; cloud: string };
  readonly experience: { title: string; subtitle: string; downloadCV: string };
  readonly contact: {
    readonly title: string;
    readonly subtitle: string;
    readonly name: string;
    readonly email: string;
    readonly message: string;
    readonly send: string;
    readonly sending: string;
    readonly success: string;
    readonly error: string;
    readonly or: string;
  };
  readonly footer: { builtWith: string; and: string; rights: string };
};

export interface ITranslationService {
  getTranslations(lang: Language): Translations;
  getTranslation(lang: Language, key: string): string | undefined;
  getNestedTranslation(
    lang: Language,
    keys: readonly string[]
  ): string | undefined;
}
