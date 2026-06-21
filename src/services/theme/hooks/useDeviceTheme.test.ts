import {describe, it, expect, vi, afterEach} from 'vitest';
import {renderHook, act} from '@testing-library/react';
import {useDeviceTheme} from './useDeviceTheme/useDeviceTheme';
import {THEMES} from '../constants';

describe('useDeviceTheme', () => {
  afterEach(() => {
    vi.mocked(window.matchMedia).mockRestore();
  });

  it('returns LIGHT when matchMedia does not match dark', () => {
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: false,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });
    const {result} = renderHook(() => useDeviceTheme());
    expect(result.current.deviceTheme).toBe(THEMES.LIGHT);
  });

  it('returns DARK when matchMedia matches dark', () => {
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
    const {result} = renderHook(() => useDeviceTheme());
    expect(result.current.deviceTheme).toBe(THEMES.DARK);
  });

  it('updates deviceTheme to DARK when change event fires with matches=true', () => {
    let changeHandler: ((e: MediaQueryListEvent) => void) | null = null;
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: false,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn((_, handler) => {
        changeHandler = handler as (e: MediaQueryListEvent) => void;
      }),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const {result} = renderHook(() => useDeviceTheme());
    expect(result.current.deviceTheme).toBe(THEMES.LIGHT);

    act(() => {
      changeHandler?.({matches: true} as MediaQueryListEvent);
    });

    expect(result.current.deviceTheme).toBe(THEMES.DARK);
  });

  it('updates deviceTheme to LIGHT when change event fires with matches=false', () => {
    let changeHandler: ((e: MediaQueryListEvent) => void) | null = null;
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn((_, handler) => {
        changeHandler = handler as (e: MediaQueryListEvent) => void;
      }),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    const {result} = renderHook(() => useDeviceTheme());
    expect(result.current.deviceTheme).toBe(THEMES.DARK);

    act(() => {
      changeHandler?.({matches: false} as MediaQueryListEvent);
    });

    expect(result.current.deviceTheme).toBe(THEMES.LIGHT);
  });

  it('removes event listener on unmount', () => {
    const removeEventListener = vi.fn();
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: false,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener,
      dispatchEvent: vi.fn(),
    });

    const {unmount} = renderHook(() => useDeviceTheme());
    unmount();
    expect(removeEventListener).toHaveBeenCalled();
  });
});
