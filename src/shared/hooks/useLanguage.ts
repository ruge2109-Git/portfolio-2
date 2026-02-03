import { useEffect, useSyncExternalStore } from 'react';
import type { Language } from '@domain/types/Language';
import {
  getLanguage,
  initLanguage,
  setLanguage,
  subscribeLanguage,
} from '@shared/stores/language';

export function useLanguage(initialLang: Language) {
  useEffect(() => {
    initLanguage(initialLang);
  }, [initialLang]);

  const lang = useSyncExternalStore(
    subscribeLanguage,
    getLanguage,
    () => initialLang
  );

  return {
    lang,
    setLanguage,
  };
}
