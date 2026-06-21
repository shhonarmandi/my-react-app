import {describe, it, expect} from 'vitest';
import {createAxiosRequestConfig} from './endpoints.helpers';
import {endpoints} from './endpoints';

describe('createAxiosRequestConfig', () => {
  it('returns the config object unchanged', () => {
    const config = {method: 'GET' as const, url: '/test'};
    expect(createAxiosRequestConfig(config)).toBe(config);
  });
});

describe('endpoints', () => {
  it('getPost builds correct config', () => {
    const config = endpoints.getPost(42);
    expect(config.method).toBe('GET');
    expect(config.url).toBe('/posts/42');
  });

  it('getPosts builds correct config with params', () => {
    const config = endpoints.getPosts({page: 1, limit: 20});
    expect(config.method).toBe('GET');
    expect(config.url).toBe('/posts');
    expect(config.params).toEqual({page: 1, limit: 20});
  });

  it('submitPost builds correct config with data', () => {
    const payload = {title: 'foo', body: 'bar', userId: 1};
    const config = endpoints.submitPost(payload);
    expect(config.method).toBe('POST');
    expect(config.url).toBe('/posts');
    expect(config.data).toEqual(payload);
  });

  it('getPhotos has correct baseURL and method', () => {
    expect(endpoints.getPhotos.method).toBe('GET');
    expect(endpoints.getPhotos.url).toBe('/photos');
    expect(endpoints.getPhotos.baseURL).toBe(
      'https://jsonplaceholder.typicode.com'
    );
  });
});
