import {describe, it, expect, vi, beforeEach} from 'vitest';
import {render, screen, act} from '@testing-library/react';
import {renderHook} from '@testing-library/react';
import {useTheme as useStyledTheme} from 'styled-components';
import {ThemeProvider, ThemeContext} from './ThemeContext';
import {useThemeProvider} from './ThemeContext.hooks';
import {THEMES, DARK_THEME, LIGHT_THEME} from '../constants';
import {useContext} from 'react';

let capturedTheme: ReturnType<typeof useStyledTheme> | null = null;

function ThemeCapture() {
  capturedTheme = useStyledTheme();
  return null;
}

describe('useThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns LIGHT theme by default when localStorage is empty', () => {
    const {result} = renderHook(() => useThemeProvider('theme'));
    expect(result.current.theme).toBe(THEMES.LIGHT);
  });

  it('reads saved theme from localStorage', () => {
    localStorage.setItem('theme', THEMES.DARK);
    const {result} = renderHook(() => useThemeProvider('theme'));
    expect(result.current.theme).toBe(THEMES.DARK);
  });

  it('setTheme updates state and writes to localStorage', () => {
    const {result} = renderHook(() => useThemeProvider('theme'));
    act(() => {
      result.current.setTheme(THEMES.DARK);
    });
    expect(result.current.theme).toBe(THEMES.DARK);
    expect(localStorage.getItem('theme')).toBe(THEMES.DARK);
  });
});

describe('ThemeContext default value', () => {
  it('provides LIGHT theme by default', () => {
    const {result} = renderHook(() => useContext(ThemeContext));
    expect(result.current.theme).toBe(THEMES.LIGHT);
  });

  it('default setTheme is a no-op and does not throw', () => {
    const {result} = renderHook(() => useContext(ThemeContext));
    expect(() => result.current.setTheme(THEMES.DARK)).not.toThrow();
  });
});

function TestChild({label}: {label: string}) {
  return <div data-testid="child">{label}</div>;
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    capturedTheme = null;
  });

  it('renders children', () => {
    render(
      <ThemeProvider localStorageKey="theme">
        <TestChild label="hello" />
      </ThemeProvider>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('uses LIGHT_THEME when theme is light', () => {
    localStorage.setItem('theme', THEMES.LIGHT);
    render(
      <ThemeProvider localStorageKey="theme">
        <ThemeCapture />
      </ThemeProvider>
    );
    expect(capturedTheme).toMatchObject({
      colors: {surface: LIGHT_THEME.colors.surface},
    });
  });

  it('uses DARK_THEME when theme is dark', () => {
    localStorage.setItem('theme', THEMES.DARK);
    render(
      <ThemeProvider localStorageKey="theme">
        <ThemeCapture />
      </ThemeProvider>
    );
    expect(capturedTheme).toMatchObject({
      colors: {surface: DARK_THEME.colors.surface},
    });
  });

  it('merges customizedTheme on top of LIGHT_THEME', () => {
    localStorage.setItem('theme', THEMES.LIGHT);
    render(
      <ThemeProvider
        localStorageKey="theme"
        customizedTheme={{colors: {surface: 'red'}} as never}>
        <ThemeCapture />
      </ThemeProvider>
    );
    expect(
      (capturedTheme as {colors?: {surface?: string}} | null)?.colors?.surface
    ).toBe('red');
  });

  it('merges customizedTheme on top of DARK_THEME', () => {
    localStorage.setItem('theme', THEMES.DARK);
    render(
      <ThemeProvider
        localStorageKey="theme"
        customizedTheme={{colors: {surface: 'blue'}} as never}>
        <ThemeCapture />
      </ThemeProvider>
    );
    expect(
      (capturedTheme as {colors?: {surface?: string}} | null)?.colors?.surface
    ).toBe('blue');
  });

  it('uses dark theme when THEMES.DEVICE and matchMedia returns dark', () => {
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
    localStorage.setItem('theme', THEMES.DEVICE);
    render(
      <ThemeProvider localStorageKey="theme">
        <ThemeCapture />
      </ThemeProvider>
    );
    expect(capturedTheme).toMatchObject({
      colors: {surface: DARK_THEME.colors.surface},
    });
    vi.mocked(window.matchMedia).mockRestore();
  });
});
