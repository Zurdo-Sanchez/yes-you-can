import { defineRouter } from '#q-app/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: (to, from, savedPosition) => {
      // Si hay una posición guardada (botón atrás/adelante), úsala
      if (savedPosition) {
        return savedPosition;
      }

      // No hacer scroll automático aquí, lo haremos manualmente después de la transición
      return false;
    },
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // Hook para manejar scroll después de cada navegación
  Router.afterEach((to, from) => {
    // Solo hacer scroll automático si realmente cambiamos de página
    // No hacer scroll si estamos navegando dentro de la misma página (ej: home -> home)
    // No hacer scroll cuando vamos al inicio (/) para evitar el efecto de doble carga
    if (to.path !== from.path && to.path !== '/') {
      // Esperar a que se complete la transición de página antes de hacer scroll
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, 1000); // Tiempo suficiente para que termine la transición fadeIn
    }
  });

  return Router;
});
