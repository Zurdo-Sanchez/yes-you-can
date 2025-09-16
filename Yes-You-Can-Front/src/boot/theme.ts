import { boot } from 'quasar/wrappers';
import { watch } from 'vue';
import { setCssVar, Dark } from 'quasar';
import { useThemeStore } from 'src/stores/theme';
import { THEMES } from 'src/themes';

type BrandKey =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'dark'
  | 'positive'
  | 'negative'
  | 'info'
  | 'warning';

export default boot(() => {
  const theme = useThemeStore();

  const applyTheme = () => {
    const palette = THEMES[theme.currentTheme];

    // aplica los brand colors permitidos
    (Object.keys(palette) as BrandKey[]).forEach((k) => {
      setCssVar(k, (palette as Record<BrandKey, string>)[k]);
    });

    // modo oscuro sincronizado con el store
    Dark.set(theme.darkMode);
  };

  // aplicar al inicio
  applyTheme();

  // re-aplicar cuando cambie el tema o el darkMode (cambian juntos)
  watch(() => [theme.currentTheme, theme.darkMode], applyTheme);
});
