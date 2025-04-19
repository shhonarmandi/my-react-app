import {useState} from 'react';
import {THEMES} from '@services/theme';

export function useThemeProvider(localStorageKey: string) {
  function getSavedTheme() {
    return (localStorage.getItem(localStorageKey) as THEMES) ?? THEMES.LIGHT;
  }

  const [theme, setTheme] = useState<THEMES>(getSavedTheme());

  return {
    theme,
    setTheme: function (theme: THEMES) {
      localStorage.setItem(localStorageKey, theme);
      setTheme(theme);
    },
  };
}
