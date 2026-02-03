/**
 * Infrastructure: TranslationService Implementation
 * Concrete implementation of translation service
 */
import type {
  ITranslationService,
  Translations,
} from '../../domain/interfaces/TranslationService';
import type { Language } from '../../domain/types/Language';
import { es } from '../../shared/i18n/es';
import { en } from '../../shared/i18n/en';

const translations: Record<Language, Translations> = {
  es,
  en,
};

export class TranslationService implements ITranslationService {
  getTranslations(lang: Language): Translations {
    return translations[lang] || translations.es;
  }

  getTranslation(lang: Language, key: string): string | undefined {
    const translations = this.getTranslations(lang);
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return undefined;
      }
    }

    return typeof value === 'string' ? value : undefined;
  }

  getNestedTranslation(
    lang: Language,
    keys: readonly string[]
  ): string | undefined {
    const translations = this.getTranslations(lang);
    let value: any = translations;

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return undefined;
      }
    }

    return typeof value === 'string' ? value : undefined;
  }
}
