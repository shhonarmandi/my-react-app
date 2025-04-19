import {createRouter, RouterProvider} from '@tanstack/react-router';
import {FallbackError, Loading, NotFound} from '@components';
import {useAuth} from '@services/authentication';
import {routeTree} from '../../pagesTree.gen.ts';

export const router = createRouter({
  context: {
    auth: undefined!, // This will be set after we wrap the app in an AuthProvider
  },
  routeTree,
  defaultPendingComponent: Loading,
  defaultNotFoundComponent: NotFound,
  defaultErrorComponent: FallbackError,
});

export function TanStackRouterProvider() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{auth}} />;
}
