import type { Language } from '../../domain/types/Language';
export function buildUrlWithLang(
  pathname: string,
  lang: Language,
  hash?: string
): string {
  const url = new URL(pathname, 'http://localhost');
  url.searchParams.set('lang', lang);
  if (hash) {
    url.hash = hash;
  }
  return url.pathname + url.search + url.hash;
}
export function getLangFromUrl(url: URL): Language | null {
  const langParam = url.searchParams.get('lang');
  if (!langParam) return null;
  const normalized = langParam.toLowerCase().trim();
  return normalized === 'en' || normalized === 'es' ? normalized : null;
}
