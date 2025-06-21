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
      name: 'projects',
      path: '/projects',
      component: () => import('~/pages/projects/index.vue'),
      meta: {
        name: 'Проекты',
      },
    },
  ],
} satisfies RouterConfig;
