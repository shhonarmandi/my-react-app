import {ReactNode} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import {ThemeProvider} from '@services/theme';
import {LOCAL_STORAGE_KEYS} from '@constants';

function AllProviders({children}: {children: ReactNode}) {
  return (
    <ThemeProvider localStorageKey={LOCAL_STORAGE_KEYS.THEME}>
      {children}
    </ThemeProvider>
  );
}

function renderWithProviders(
  ui: ReactNode,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, {wrapper: AllProviders, ...options});
}

export {renderWithProviders, AllProviders};
