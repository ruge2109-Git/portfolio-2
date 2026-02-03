/**
 * Domain Interface: TranslationService
 * Defines the contract for translation services
 */
import type { Language } from '../types/Language';

export interface Translations {
  readonly [key: string]: string | Translations;
}

export interface ITranslationService {
  /**
   * Get translations for a specific language
   */
  getTranslations(lang: Language): Translations;

  /**
   * Get a specific translation key
   */
  getTranslation(lang: Language, key: string): string | undefined;

  /**
   * Get nested translation
   */
  getNestedTranslation(
    lang: Language,
    keys: readonly string[]
  ): string | undefined;
}
