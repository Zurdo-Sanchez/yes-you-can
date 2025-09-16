import { defineStore } from 'pinia';
import type { ThemeName } from 'src/themes'; // { classic, dark }

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: 'classic' as ThemeName, // 'classic' | 'dark'
    darkMode: false as boolean, // se controla automáticamente
  }),
  actions: {
    setTheme(name: ThemeName) {
      this.currentTheme = name;
      // 🔁 Sincroniza automáticamente el Dark Mode con el tema elegido
      this.darkMode = name === 'dark';
    },
    // (opcional) toggle rápido entre classic/dark
    toggleTheme() {
      this.setTheme(this.currentTheme === 'dark' ? 'classic' : 'dark');
    },
  },
});
