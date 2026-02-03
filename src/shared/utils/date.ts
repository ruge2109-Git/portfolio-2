import type { Language } from '../../domain/types/Language';

export function formatDate(dateString: string, lang: Language): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatDateLong(dateString: string, lang: Language): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getDaysSince(dateString: string): number {
  const date = new Date(dateString);
  const diffTime = Date.now() - date.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
