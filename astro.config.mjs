import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Usamos nuestros propios estilos base
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  site: 'https://tu-dominio.com', // Cambiar por tu dominio real
  output: 'hybrid', // Hybrid allows static generation but can handle dynamic routes/query params
  build: {
    assets: 'assets',
  },
});
