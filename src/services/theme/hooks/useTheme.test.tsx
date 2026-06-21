import {describe, it, expect} from 'vitest';
import {renderHook} from '@testing-library/react';
import {useTheme} from './useTheme/useTheme';
import {ThemeProvider, ThemeContext} from '../context/ThemeContext';
import {THEMES} from '../constants';
import {ReactNode} from 'react';

function wrapper({children}: {children: ReactNode}) {
  return <ThemeProvider localStorageKey="theme-test">{children}</ThemeProvider>;
}

describe('useTheme', () => {
  it('throws when ThemeContext value is null', () => {
    expect(() => {
      renderHook(() => useTheme(), {
        wrapper: ({children}: {children: ReactNode}) => (
          <ThemeContext.Provider value={null as never}>
            {children}
          </ThemeContext.Provider>
        ),
      });
    }).toThrow('useTheme must be used within an ThemeProvider');
  });

  it('returns theme context when inside ThemeProvider', () => {
    const {result} = renderHook(() => useTheme(), {wrapper});
    expect(result.current.theme).toBe(THEMES.LIGHT);
    expect(typeof result.current.setTheme).toBe('function');
  });
});
