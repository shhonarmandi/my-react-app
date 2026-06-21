import {describe, it, expect, vi} from 'vitest';
import {render} from '@testing-library/react';
import {router, TanStackRouterProvider} from './TanStackRouterContext';

vi.mock('@services/authentication', () => ({
  useAuth: vi.fn(() => ({user: 'FooBar', isAuthenticated: true})),
}));

vi.mock('@tanstack/react-router', async () => {
  const actual = await vi.importActual('@tanstack/react-router');
  return {
    ...(actual as object),
    RouterProvider: vi.fn(() => <div data-testid="router-provider" />),
  };
});

describe('router', () => {
  it('is defined', () => {
    expect(router).toBeDefined();
  });
});

describe('TanStackRouterProvider', () => {
  it('renders without crashing', () => {
    const {getByTestId} = render(<TanStackRouterProvider />);
    expect(getByTestId('router-provider')).toBeDefined();
  });
});
