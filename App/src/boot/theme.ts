import { boot } from 'quasar/wrappers';
import { watch } from 'vue';
import { setCssVar, Dark } from 'quasar';
import { useConfigStore } from 'src/stores/settingsStore';
import { THEMES } from 'src/themes';

export default boot(() => {
  const theme = useConfigStore();

  const applyTheme = () => {
    const palette = THEMES[theme.currentTheme];

    // aplica los brand colors permitidos
    (Object.keys(palette) as (keyof typeof palette)[]).forEach((k) => {
      if (
        [
          'backgroundHeader',
          'namePrimaryColor',
          'nameSecondaryColor',
          'primary',
          'secondary',
          'accent',
          'dark',
          'positive',
          'negative',
          'info',
          'warning',
          'white',
          'black',
        ].includes(k)
      ) {
        setCssVar(k, palette[k]);
      }
    });

    // modo oscuro sincronizado con el store
    Dark.set(theme.darkMode);
  };

  // aplicar al inicio
  applyTheme();

  // re-aplicar cuando cambie el tema o el darkMode (cambian juntos)
  watch(() => [theme.currentTheme, theme.darkMode], applyTheme);
});
