import {describe, it, expect, vi, beforeEach, afterEach} from 'vitest';
import {renderHook} from '@testing-library/react';
import {useServiceWorker} from './useServiceWorker';
import {getSerwist} from 'virtual:serwist';

const getSerwistMock = vi.mocked(getSerwist);

function makeMockSerwist() {
  return {
    addEventListener: vi.fn(),
    register: vi.fn(),
  };
}

const navigatorDescriptor = Object.getOwnPropertyDescriptor(
  navigator,
  'serviceWorker'
);

function setServiceWorker(value: object | undefined) {
  Object.defineProperty(navigator, 'serviceWorker', {
    value,
    configurable: true,
    writable: true,
  });
}

function removeServiceWorker() {
  try {
    delete (navigator as {serviceWorker?: unknown}).serviceWorker;
  } catch {
    Object.defineProperty(navigator, 'serviceWorker', {
      value: undefined,
      configurable: true,
      writable: true,
    });
  }
}

describe('useServiceWorker', () => {
  beforeEach(() => {
    getSerwistMock.mockClear();
  });

  afterEach(() => {
    if (navigatorDescriptor) {
      Object.defineProperty(navigator, 'serviceWorker', navigatorDescriptor);
    }
  });

  it('does not throw when serviceWorker is in navigator', () => {
    setServiceWorker({});
    expect(() => renderHook(() => useServiceWorker())).not.toThrow();
  });

  it('calls getSerwist exactly once after mount when serviceWorker is in navigator', async () => {
    setServiceWorker({});
    renderHook(() => useServiceWorker());
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(getSerwistMock).toHaveBeenCalledTimes(1);
  });

  it('does not call getSerwist when serviceWorker is absent', async () => {
    removeServiceWorker();
    renderHook(() => useServiceWorker());
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(getSerwistMock).not.toHaveBeenCalled();
  });

  it('calls addEventListener and register on the returned serwist object', async () => {
    const mockSerwist = makeMockSerwist();
    getSerwistMock.mockResolvedValueOnce(mockSerwist as never);
    setServiceWorker({});

    renderHook(() => useServiceWorker());
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(mockSerwist.addEventListener).toHaveBeenCalledWith(
      'installed',
      expect.any(Function)
    );
    expect(mockSerwist.register).toHaveBeenCalled();
  });

  it('invokes the installed callback without throwing', async () => {
    const mockSerwist = makeMockSerwist();
    getSerwistMock.mockResolvedValueOnce(mockSerwist as never);
    setServiceWorker({});

    renderHook(() => useServiceWorker());
    await new Promise(resolve => setTimeout(resolve, 0));

    const installedCallback = mockSerwist.addEventListener.mock
      .calls[0][1] as () => void;
    expect(() => installedCallback()).not.toThrow();
  });
});
