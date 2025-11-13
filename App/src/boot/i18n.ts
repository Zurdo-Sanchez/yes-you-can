import { defineBoot } from '#q-app/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';
import { useConfigStore } from 'src/stores/settingsStore';
export type MessageLanguages = keyof typeof messages;
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = (typeof messages)['en-US'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-object-type */

export default defineBoot(({ app }) => {
  // Determine initial locale in this order:
  // 1. Pinia store `useConfigStore().language` (when available)
  // 2. localStorage 'lang' (persisted user preference)
  // 3. fallback to 'es-ES'
  let storeLocale: string | null = null;
  try {
    const configStore = useConfigStore();
    storeLocale = configStore?.language ?? null;
  } catch (e) {
    storeLocale = null;
    console.error('Error reading store locale:', e);
  }

  const persisted = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
  const initialLocale =
    (storeLocale as MessageLanguages) || (persisted as MessageLanguages) || 'ca-ES';

  const i18n = createI18n<{ message: MessageSchema }, MessageLanguages>({
    locale: initialLocale,
    legacy: false,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
