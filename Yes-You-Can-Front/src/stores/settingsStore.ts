import { defineStore } from 'pinia';
import type { ThemeName } from 'src/themes';

export const useConfigStore = defineStore('config', {
  state: () => ({
    login: false as boolean,
    loading: false as boolean,
    currentTheme: 'light' as ThemeName, // ahora 'light' en vez de 'classic'
    darkMode: false as boolean,
  }),
  actions: {
    setTheme(name: ThemeName) {
      this.currentTheme = name;
      this.darkMode = name === 'dark'; // sincroniza automáticamente
    },
    toggleTheme() {
      this.setTheme(this.currentTheme === 'dark' ? 'light' : 'dark');
    },
  },
});
