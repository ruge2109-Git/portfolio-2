/**
 * Shared: i18n Module
 * Translation utilities and exports
 */
import { es } from './es';
import { en } from './en';
import type { Language } from '../../domain/types/Language';

export type Translations = typeof es;

export const translations = {
  es,
  en,
} as const;

/**
 * Get translations for a specific language
 * @param lang - Language code ('es' | 'en')
 * @returns Translations object for the specified language
 */
export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.es;
}
