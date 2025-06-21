import type { RouterConfig } from '@nuxt/schema';

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/home/index.vue'),
    },
    {
      name: 'cv',
      path: '/cv',
      component: () => import('~/pages/cv/index.vue'),
      meta: {
        name: 'Curriculum Vitae',
      },
    },
    {
      name: 'libraries',
      path: '/libraries',
      component: () => import('~/pages/libraries/index.vue'),
      meta: {
        name: 'Библиотеки',
      },
    },
    {
      name: 'pets',
      path: '/pets',
      component: () => import('~/pages/pets/index.vue'),
      meta: {
        name: 'Pet-проекты',
      },
    },
  ],
} satisfies RouterConfig;
