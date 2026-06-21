import {describe, it, expect, vi} from 'vitest';
import {LANGUAGES} from './i18n.constants';
import {lazyImport} from './i18n.plugins';

describe('LANGUAGES', () => {
  it('has EN = en', () => expect(LANGUAGES.EN).toBe('en'));
  it('has DE = de', () => expect(LANGUAGES.DE).toBe('de'));
});

describe('lazyImport plugin', () => {
  it('has type "backend"', () => {
    expect(lazyImport.type).toBe('backend');
  });

  it('init is a no-op function', () => {
    expect(() =>
      lazyImport.init({} as never, {} as never, {} as never)
    ).not.toThrow();
  });

  it('read calls callback after dynamic import resolves', async () => {
    const callback = vi.fn();
    lazyImport.read('en', 'common', callback);
    await new Promise(resolve => setTimeout(resolve, 200));
    expect(callback).toHaveBeenCalledWith(null, expect.anything());
  });
});

describe('i18n instance', () => {
  it('is initialized with EN as the configured language', async () => {
    const {i18n} = await import('./i18n');
    await i18n.init;
    expect(i18n.options.lng).toBe(LANGUAGES.EN);
    expect(i18n.options.fallbackLng).toContain(LANGUAGES.EN);
  });

  it('has "common" in the configured namespaces', async () => {
    const {i18n} = await import('./i18n');
    expect(i18n.options.ns).toContain('common');
  });

  it('missingKeyHandler logs to console.error without throwing', async () => {
    const {i18n} = await import('./i18n');
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const handler = i18n.options.missingKeyHandler as unknown as (
      lngs: string[],
      ns: string,
      key: string,
      fallbackValue: string
    ) => void;
    expect(() =>
      handler(['en'], 'common', 'missing.key', 'fallback')
    ).not.toThrow();
    expect(errorSpy).toHaveBeenCalled();
    errorSpy.mockRestore();
  });
});
