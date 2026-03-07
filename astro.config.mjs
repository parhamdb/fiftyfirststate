import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://iran51.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
