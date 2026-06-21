import {describe, it, expect, vi} from 'vitest';
import {renderHook, waitFor} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactNode} from 'react';
import {useGetRequest} from './useGetRequest';

vi.mock('@services/api', () => ({
  makeRequest: vi.fn().mockResolvedValue([{id: 1, title: 'Post 1'}]),
}));

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {queries: {retry: false}},
  });
  return function Wrapper({children}: {children: ReactNode}) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
}

describe('useGetRequest', () => {
  it('fetches data and returns it', async () => {
    const wrapper = createWrapper();
    const {result} = renderHook(
      () => useGetRequest('test-key', {method: 'GET', url: '/test'}),
      {wrapper}
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual([{id: 1, title: 'Post 1'}]);
  });

  it('passes options to useQuery (staleTime)', async () => {
    const wrapper = createWrapper();
    const {result} = renderHook(
      () =>
        useGetRequest(
          'test-key-2',
          {method: 'GET', url: '/test'},
          {
            staleTime: 9999,
          }
        ),
      {wrapper}
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toBeDefined();
  });
});
