import { ref } from 'vue';

import lssrLogo from '~/shared/assets/images/lssr.png';
import nwabLogo from '~/shared/assets/images/nwab.png';
import ogeLogo from '~/shared/assets/images/oge.png';

export interface Library {
  logo: string;
  name: string;
  description: string;
  url: string;
  links?: {
    github?: string;
    npm?: string;
    changelog?: string;
    doc?: string;
  };
  anotherLinks?: Array<{
    title: string;
    links: Array<{ title: string; url: string }>;
  }>;
}

export const libraries = ref<Library[]>([
  {
    name: 'LiteSSR',
    url: 'https://lssr.dntz.xyz/',
    logo: lssrLogo,
    description: 'Универсальная реализация SSR для Vite',
    links: {
      github: 'https://github.com/DanteZZ/lite-ssr',
      npm: 'https://www.npmjs.com/package/lite-ssr',
      changelog:
        'https://github.com/DanteZZ/lite-ssr/blob/main/packages/lite-ssr/CHANGELOG.md',
      doc: 'https://lssr.dntz.xyz/',
    },
    anotherLinks: [
      {
        title: 'Пакеты/Плагины',
        links: [
          {
            title: '@lite-ssr/core',
            url: 'https://github.com/DanteZZ/lite-ssr/tree/main/packages/core',
          },
          {
            title: '@lite-ssr/proxy',
            url: 'https://github.com/DanteZZ/lite-ssr/tree/main/packages/proxy',
          },
          {
            title: '@lite-ssr/cached-data',
            url: 'https://github.com/DanteZZ/lite-ssr/tree/main/packages/cached-data',
          },
        ],
      },
    ],
  },

  {
    name: 'LiteSSR Vue Renderer',
    url: 'https://lssr.dntz.xyz/docs/renderers/vue/intro',
    logo: 'https://lssr.dntz.xyz/assets/images/vue3-dark-f1c542e6162f98532dba043d3bafe7a0.png',
    description: 'Реализация генератора Vue3 для LiteSSR',
    links: {
      github: 'https://github.com/DanteZZ/lite-ssr/tree/main/packages/vue',
      npm: 'https://www.npmjs.com/package/@lite-ssr/vue',
      changelog:
        'https://github.com/DanteZZ/lite-ssr/blob/main/packages/vue/CHANGELOG.md',
      doc: 'https://lssr.dntz.xyz/docs/renderers/vue/intro',
    },
    anotherLinks: [
      {
        title: 'Плагины',
        links: [
          {
            title: '@lite-ssr/vue-unhead',
            url: 'https://github.com/DanteZZ/lite-ssr/tree/main/packages/vue-unhead',
          },
        ],
      },
    ],
  },
  {
    name: 'NW.js Advenced Builder',
    url: 'https://github.com/DanteZZ/nw-advenced-builder',
    logo: nwabLogo,
    description:
      'Кросс-платформенный сборщик для NW.js (standalone) приложений',
    links: {
      github: 'https://github.com/DanteZZ/nw-advenced-builder',
      npm: 'https://www.npmjs.com/package/nw-advenced-builder',
      doc: 'https://github.com/DanteZZ/nw-advenced-builder/blob/master/README.md',
    },
  },
  {
    name: 'Open Game Engine',
    url: 'https://github.com/DanteZZ/nw-advenced-builder',
    logo: ogeLogo,
    description:
      '[TS-FIRST] Открытый облегчённый игровой движок, вдохновлённый GameMaker и Unity, построенный на чистом Canvas',
    links: {
      github: 'https://github.com/DanteZZ/oge-ts',
      npm: 'https://www.npmjs.com/package/oge-ts',
      changelog: 'https://github.com/DanteZZ/oge-ts/blob/main/CHANGELOG.md',
      doc: 'https://github.com/DanteZZ/oge-ts/blob/main/README.md',
    },
  },
]);
