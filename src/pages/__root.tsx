import {AppWrapper} from '@components';
import {AuthContextProps} from '@services/authentication';
// import {TanStackRouterDevtools} from '@tanstack/router-devtools';
import {createRootRouteWithContext, Outlet} from '@tanstack/react-router';

export interface TanStackRouterContextProps {
  auth: AuthContextProps;
}

export const Route = createRootRouteWithContext<TanStackRouterContextProps>()({
  component: () => (
    <>
      <AppWrapper>
        <Outlet />
      </AppWrapper>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
