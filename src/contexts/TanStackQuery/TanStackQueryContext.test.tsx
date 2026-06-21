import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {useQueryClient} from '@tanstack/react-query';
import {TanStackQueryProvider} from './TanStackQueryContext';
import {TANSTACK_QUERY_CONFIG} from './TanStackQueryContext.constants';

describe('TANSTACK_QUERY_CONFIG', () => {
  it('is a QueryClient instance', () => {
    expect(TANSTACK_QUERY_CONFIG).toBeDefined();
    expect(typeof TANSTACK_QUERY_CONFIG.getQueryData).toBe('function');
  });

  it('has retry set to 3', () => {
    const options = TANSTACK_QUERY_CONFIG.getDefaultOptions();
    expect(options.queries?.retry).toBe(3);
  });

  it('has refetchOnMount set to true', () => {
    const options = TANSTACK_QUERY_CONFIG.getDefaultOptions();
    expect(options.queries?.refetchOnMount).toBe(true);
  });
});

describe('TanStackQueryProvider', () => {
  it('renders children', () => {
    render(
      <TanStackQueryProvider>
        <div data-testid="child">child</div>
      </TanStackQueryProvider>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('provides a QueryClient via context', () => {
    let client: ReturnType<typeof useQueryClient> | null = null;
    function Capture() {
      client = useQueryClient();
      return null;
    }
    render(
      <TanStackQueryProvider>
        <Capture />
      </TanStackQueryProvider>
    );
    expect(client).not.toBeNull();
  });
});
