// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://waliya.in',
  adapter: vercel(),
  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ar: 'ar'
        }
      }
    })
  ]
});