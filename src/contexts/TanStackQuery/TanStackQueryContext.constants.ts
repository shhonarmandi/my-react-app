import {QueryClient} from '@tanstack/react-query';

export const TANSTACK_QUERY_CONFIG = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnMount: true,
      staleTime: 1 * 60 * 60 * 1000, // 1 hours
    },
  },
});
