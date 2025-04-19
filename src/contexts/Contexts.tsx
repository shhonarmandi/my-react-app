// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {i18n} from '@services/i18n';
import {LOCAL_STORAGE_KEYS} from '@constants';
import {AuthProvider} from '@services/authentication';
import {ThemeProvider, GlobalStyles} from '@services/theme';

import {TanStackQueryProvider} from './TanStackQuery';
import {TanStackRouterProvider} from './TanStackRouter';

export function Contexts() {
  return (
    <ThemeProvider
      localStorageKey={LOCAL_STORAGE_KEYS.THEME}
      // customizedTheme={{colors: {...DARK_THEME.colors, surface: 'navy'}}}
    >
      <GlobalStyles />
      <AuthProvider>
        <TanStackQueryProvider>
          <TanStackRouterProvider />
        </TanStackQueryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
