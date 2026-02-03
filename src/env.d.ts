/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_EMAIL?: string;
  readonly PUBLIC_GITHUB?: string;
  readonly PUBLIC_LINKEDIN?: string;
  readonly PUBLIC_TWITTER?: string;
  readonly PUBLIC_CV_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
