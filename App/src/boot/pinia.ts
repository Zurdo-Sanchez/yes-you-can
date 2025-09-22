// src/boot/pinia.ts
import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';

export default boot(({ app }) => {
  const pinia = createPinia();
  // Si usas plugins de Pinia, añádelos aquí:
  // pinia.use(myPlugin)

  app.use(pinia);
});
