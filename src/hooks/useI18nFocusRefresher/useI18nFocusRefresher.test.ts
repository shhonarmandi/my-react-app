import {describe, it, expect, vi} from 'vitest';
import {renderHook} from '@testing-library/react';
import {useI18nFocusRefresher} from './useI18nFocusRefresher';

vi.mock('@tanstack/react-router', () => ({
  useLocation: vi.fn(() => ({pathname: '/'})),
}));

vi.mock('react-i18next', async importOriginal => {
  const actual = await importOriginal<typeof import('react-i18next')>();
  return {
    ...actual,
    useTranslation: vi.fn(() => ({
      i18n: {language: 'en'},
      t: (key: string) => key,
    })),
  };
});

describe('useI18nFocusRefresher', () => {
  it('calls focus on the provided element', () => {
    const element = document.createElement('span');
    const focusSpy = vi.spyOn(element, 'focus');

    renderHook(() => useI18nFocusRefresher(element));

    expect(focusSpy).toHaveBeenCalled();
  });

  it('does not throw when element is null', () => {
    expect(() => {
      renderHook(() => useI18nFocusRefresher(null));
    }).not.toThrow();
  });
});
