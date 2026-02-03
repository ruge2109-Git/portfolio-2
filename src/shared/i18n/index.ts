import type { Language } from '../../domain/types/Language';
import type { Translations } from '../../domain/interfaces/TranslationService';
import { portfolioData } from '@shared/data/portfolio';

export type { Translations } from '../../domain/interfaces/TranslationService';

export const translations = portfolioData.translations;
export function getTranslations(lang: Language): Translations {
  const t = translations[lang] || translations.es;
  return t as Translations;
}
