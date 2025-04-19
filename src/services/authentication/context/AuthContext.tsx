import {createContext, useMemo} from 'react';
import {AUTH_CONTEXT_INITIAL_VALUE} from './AuthContext.constants';
import {AuthProviderProps, AuthContextProps} from './AuthContext.types';

export const AuthContext = createContext<AuthContextProps>(
  AUTH_CONTEXT_INITIAL_VALUE
);

export function AuthProvider({children}: Readonly<AuthProviderProps>) {
  const user = 'FooBar';
  const isAuthenticated = Boolean(user);

  const authContextValue = useMemo(
    () => ({user, isAuthenticated}),
    [isAuthenticated]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
