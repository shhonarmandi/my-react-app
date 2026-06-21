import {describe, it, expect} from 'vitest';
import {DOM_IDS} from './dom';
import {LOCAL_STORAGE_KEYS} from './localStorage';
import {ROUTES} from './routes';
import {TAN_STACK_QUERY_KEYS} from './tanStackQuery';

describe('DOM_IDS', () => {
  it('has the correct MAIN_CONTAINER value', () => {
    expect(DOM_IDS.MAIN_CONTAINER).toBe('main-container');
  });
});

describe('LOCAL_STORAGE_KEYS', () => {
  it('has the correct THEME value', () => {
    expect(LOCAL_STORAGE_KEYS.THEME).toBe('theme');
  });
});

describe('ROUTES', () => {
  it('has correct public homepage route', () => {
    expect(ROUTES.PUBLIC.HOMEPAGE).toBe('/');
  });

  it('has correct public about-us route', () => {
    expect(ROUTES.PUBLIC.ABOUT_US).toBe('/about-us');
  });

  it('has correct private dashboard route', () => {
    expect(ROUTES.PRIVATE.DASHBOARD).toBe('/dashboard');
  });
});

describe('TAN_STACK_QUERY_KEYS', () => {
  it('generates getPosts key with page and limit', () => {
    expect(TAN_STACK_QUERY_KEYS.getPosts(1, 10)).toBe('/posts?page=1&limit:10');
  });

  it('generates getPosts key with different values', () => {
    expect(TAN_STACK_QUERY_KEYS.getPosts(0, 100)).toBe(
      '/posts?page=0&limit:100'
    );
  });
});
