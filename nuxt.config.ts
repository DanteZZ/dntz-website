// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  srcDir: './src',

  imports: {
    autoImport: false,
  },

  devtools: { enabled: true },

  devServer: {
    port: 5174,
  },

  css: ['~/shared/assets/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          crossorigin: '',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/shared/assets/_variables.scss" as *;',
        },
      },
    },
  },

  modules: ['nuxt-viewport'],
  viewport: {
    breakpoints: {
      xxs: 320,
      xs: 370,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
});
