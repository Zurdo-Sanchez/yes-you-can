import { defineStore } from 'pinia';
import type { ThemeName } from 'src/themes';

export const useThemeStore = defineStore('theme', {
  state: () => ({
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
