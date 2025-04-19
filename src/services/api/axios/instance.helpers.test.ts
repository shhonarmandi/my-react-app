import {vi, describe, it, expect} from 'vitest';
import {axiosInstance} from './instance';
import {setAxiosInstanceHeader, removeAxiosInstanceHeader} from '.';

vi.mock('./instance');

describe('axios header manipulation functions', () => {
  it('should set a header correctly', () => {
    const headerName = 'Authorization';
    const headerValue = 'Bearer token123';

    setAxiosInstanceHeader(headerName, headerValue);

    expect(axiosInstance.defaults.headers.common[headerName]).toBe(headerValue);
  });

  it('should remove a header correctly', () => {
    const headerName = 'Content-Type';

    axiosInstance.defaults.headers.common[headerName] = 'application/json'; // Set a header for removal

    removeAxiosInstanceHeader(headerName);

    expect(axiosInstance.defaults.headers.common[headerName]).toBeUndefined();
  });
});
