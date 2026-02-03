export type Language = 'es' | 'en';

export const SUPPORTED_LANGUAGES: readonly Language[] = ['es', 'en'] as const;

export const DEFAULT_LANGUAGE: Language = 'es';

export function isValidLanguage(lang: string): lang is Language {
  return SUPPORTED_LANGUAGES.includes(lang as Language);
}

export function normalizeLanguage(lang: string | null | undefined): Language {
  if (!lang) return DEFAULT_LANGUAGE;
  const normalized = lang.toLowerCase().trim();
  return isValidLanguage(normalized) ? normalized : DEFAULT_LANGUAGE;
}
