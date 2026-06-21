import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {renderHook} from '@testing-library/react';
import {ReactNode} from 'react';
import {AUTH_CONTEXT_INITIAL_VALUE} from './context/AuthContext.constants';
import {AuthProvider, AuthContext} from './context/AuthContext';
import {useAuth} from './hooks/useAuth/useAuth';

describe('AUTH_CONTEXT_INITIAL_VALUE', () => {
  it('has user as null', () => {
    expect(AUTH_CONTEXT_INITIAL_VALUE.user).toBeNull();
  });

  it('has isAuthenticated as false', () => {
    expect(AUTH_CONTEXT_INITIAL_VALUE.isAuthenticated).toBe(false);
  });
});

describe('AuthProvider', () => {
  it('renders children', () => {
    render(
      <AuthProvider>
        <div data-testid="child">child</div>
      </AuthProvider>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('provides user and isAuthenticated via context', () => {
    function wrapper({children}: {children: ReactNode}) {
      return <AuthProvider>{children}</AuthProvider>;
    }
    const {result} = renderHook(() => useAuth(), {wrapper});
    expect(result.current.user).toBe('FooBar');
    expect(result.current.isAuthenticated).toBe(true);
  });
});

describe('useAuth', () => {
  it('returns context values inside AuthProvider', () => {
    function wrapper({children}: {children: ReactNode}) {
      return <AuthProvider>{children}</AuthProvider>;
    }
    const {result} = renderHook(() => useAuth(), {wrapper});
    expect(result.current.user).toBe('FooBar');
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('throws when AuthContext value is null', () => {
    expect(() => {
      renderHook(() => useAuth(), {
        wrapper: ({children}: {children: ReactNode}) => (
          <AuthContext.Provider value={null as never}>
            {children}
          </AuthContext.Provider>
        ),
      });
    }).toThrow('useAuth must be used within an AuthProvider');
  });
});
