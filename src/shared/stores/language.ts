import {
  DEFAULT_LANGUAGE,
  isValidLanguage,
  normalizeLanguage,
} from '@domain/types/Language';
import type { Language } from '@domain/types/Language';

const STORAGE_KEY = 'preferred-language';
type Listener = (lang: Language) => void;

let currentLanguage: Language = DEFAULT_LANGUAGE;
const listeners = new Set<Listener>();
let initialized = false;

function getStoredLanguage(): Language | null {
  if (typeof window === 'undefined') return null;
  const paramsLang = new URLSearchParams(window.location.search).get('lang');
  if (paramsLang && isValidLanguage(paramsLang)) return paramsLang;
  const storedLang = localStorage.getItem(STORAGE_KEY);
  if (storedLang && isValidLanguage(storedLang)) return storedLang;
  return null;
}

function updateHtmlLang(lang: Language) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang;
  }
}

function updateStorage(lang: Language) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lang);
  }
}

function updateUrlParam(lang: Language) {
  if (typeof window === 'undefined') return;
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  return url.toString();
}

function emit(lang: Language) {
  listeners.forEach((listener) => listener(lang));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent<Language>('langchange', { detail: lang }));
  }
}

function applyLanguage(
  lang: Language,
  options?: {
    updateUrl?: boolean;
    emit?: boolean;
    reload?: boolean;
  }
) {
  currentLanguage = lang;
  updateHtmlLang(lang);
  updateStorage(lang);
  if (options?.updateUrl !== false && typeof window !== 'undefined') {
    const newUrl = updateUrlParam(lang);
    if (options?.reload && newUrl) {
      window.location.replace(newUrl);
      return;
    }
    window.history.replaceState({}, '', newUrl);
  }
  if (options?.emit !== false) {
    emit(lang);
  }
}

export function initLanguage(initialLang: Language) {
  if (initialized) return currentLanguage;
  const resolved =
    (typeof window !== 'undefined' && getStoredLanguage()) || normalizeLanguage(initialLang);
  applyLanguage(resolved, {
    updateUrl: typeof window !== 'undefined' && !new URLSearchParams(window.location.search).get('lang'),
    emit: false,
  });
  initialized = true;
  return resolved;
}

export function setLanguage(lang: Language, options?: { updateUrl?: boolean; reload?: boolean }) {
  if (!isValidLanguage(lang) || lang === currentLanguage) return;
  applyLanguage(lang, { updateUrl: options?.updateUrl, emit: true, reload: options?.reload ?? true });
}

export function subscribeLanguage(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getLanguage(): Language {
  return currentLanguage;
}
