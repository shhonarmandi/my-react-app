import {describe, it, expect} from 'vitest';
import {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {
  onRequest,
  onRequestError,
  onResponse,
  onResponseError,
} from './instance.interceptors';

describe('onRequest interceptor', () => {
  it('should return the config without modifications', () => {
    const mockConfig: InternalAxiosRequestConfig = {
      url: 'https://api.example.com',
      headers: undefined as unknown as InternalAxiosRequestConfig['headers'],
    };

    const updatedConfig = onRequest(mockConfig);

    expect(updatedConfig).toBe(mockConfig);
  });
});

describe('onRequestError interceptor', () => {
  it('should reject with the original error', async () => {
    const mockError = new AxiosError('Network error');

    await expect(onRequestError(mockError)).rejects.toThrow(mockError);
  });
});

describe('onResponse interceptor', () => {
  it('should return the response without modifications for 2xx status codes', () => {
    const mockResponse: AxiosResponse = {
      status: 200,
      data: {message: 'Success'},
      statusText: '',
      headers: undefined as unknown as AxiosResponse['headers'],
      config: undefined as unknown as AxiosResponse['config'],
    };

    const updatedResponse = onResponse(mockResponse);

    expect(updatedResponse).toBe(mockResponse);
  });
});

describe('onResponseError interceptor', () => {
  it('should reject with the original error for non-2xx status codes', async () => {
    const mockError = new AxiosError('404 Not Found');

    await expect(onResponseError(mockError)).rejects.toThrow(mockError);
  });
});
