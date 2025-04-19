// import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {QueryClientProvider} from '@tanstack/react-query';
import {TANSTACK_QUERY_CONFIG} from './TanStackQueryContext.constants';
import {TanStackQueryContextProps} from './TanStackQueryContext.types';

export function TanStackQueryProvider(
  props: Readonly<TanStackQueryContextProps>
) {
  const {children} = props;

  return (
    <QueryClientProvider client={TANSTACK_QUERY_CONFIG}>
      {children}
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}
