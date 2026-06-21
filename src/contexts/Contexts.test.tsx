import {describe, it, expect, vi} from 'vitest';
import {render} from '@testing-library/react';
import {Contexts} from './Contexts';

vi.mock('./TanStackRouter', () => ({
  TanStackRouterProvider: vi.fn(() => <div data-testid="router" />),
}));

vi.mock('@services/authentication', () => ({
  useAuth: vi.fn(() => ({user: 'FooBar', isAuthenticated: true})),
  AuthProvider: ({children}: {children: React.ReactNode}) => <>{children}</>,
}));

describe('Contexts', () => {
  it('renders without crashing', () => {
    const {getByTestId} = render(<Contexts />);
    expect(getByTestId('router')).toBeDefined();
  });
});
