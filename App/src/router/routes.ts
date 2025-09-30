import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/InitialPage.vue'),
    children: [
      { path: '', component: () => import('pages/DogTraining.vue') },
      { path: 'whoami', component: () => import('pages/WhoAmI.vue') },
      { path: 'method', component: () => import('pages/Method.vue') },
      { path: 'explorer', component: () => import('pages/explorer.vue') },
      { path: 'mate', component: () => import('pages/mate.vue') },
      { path: 'master', component: () => import('pages/master.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
