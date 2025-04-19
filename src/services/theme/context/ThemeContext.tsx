import {createContext, useMemo} from 'react';
import {ThemeProvider as StyledComponentThemeProvider} from 'styled-components';
import {DARK_THEME, LIGHT_THEME, THEMES} from '../constants';
import {useDeviceTheme} from '../hooks';
import {useThemeProvider} from './ThemeContext.hooks';
import {ThemeContextProps, ThemeProviderProps} from './ThemeContext.types';

export const ThemeContext = createContext<ThemeContextProps>({
  theme: THEMES.LIGHT,
  setTheme: () => {},
});

export function ThemeProvider(props: Readonly<ThemeProviderProps>) {
  const {
    children,
    localStorageKey,
    customizedTheme: userCustomizedTheme,
  } = props;

  const {theme, setTheme} = useThemeProvider(localStorageKey);
  const {deviceTheme} = useDeviceTheme();

  const themeContextValue = useMemo(
    () => ({theme, setTheme}),
    [theme, setTheme]
  );

  const isDarkTheme =
    theme === THEMES.DEVICE
      ? deviceTheme === THEMES.DARK
      : theme === THEMES.DARK;

  function combineUserAndDefaultTheme() {
    if (userCustomizedTheme) {
      return isDarkTheme
        ? {...DARK_THEME, ...userCustomizedTheme}
        : {...LIGHT_THEME, ...userCustomizedTheme};
    }

    return isDarkTheme ? DARK_THEME : LIGHT_THEME;
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <StyledComponentThemeProvider theme={combineUserAndDefaultTheme()}>
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
}
