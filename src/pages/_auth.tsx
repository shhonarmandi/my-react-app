import {createFileRoute, redirect} from '@tanstack/react-router';
import {DashboardLayout} from '@layouts';

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({context, location}) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/',
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          returnUrl: location.href,
        },
      });
    }
  },
  component: DashboardLayout,
});
