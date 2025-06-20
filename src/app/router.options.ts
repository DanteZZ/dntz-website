import type { RouterConfig } from '@nuxt/schema';

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/home/home.vue'),
    },
    {
      name: 'cv',
      path: '/cv',
      component: () => import('~/pages/cv/cv.vue'),
      meta: {
        name: 'Curriculum Vitae',
      },
    },
    {
      name: 'projects',
      path: '/projects',
      component: () => import('~/pages/projects/projects.vue'),
      meta: {
        name: 'Проекты',
      },
    },
  ],
} satisfies RouterConfig;
