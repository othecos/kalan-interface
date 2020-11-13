/* eslint-disable react/no-array-index-key */
import React, {
  lazy,
  Suspense,
  Fragment
} from 'react';
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter
} from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/pages/HomeView';
import LoadingScreen from 'src/components/LoadingScreen';
import GuestGuard from 'src/components/GuestGuard';
import FirebaseGuard from './components/FirebaseGuard';

const routesConfig = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/home" />
  },
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/pages/Error404View'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('src/views/auth/LoginView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/register',
    component: lazy(() => import('src/views/auth/RegisterView'))
  },
  {
    path: '/app',
    guard: FirebaseGuard,
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/app',
        component: () => <Redirect to="/app/analysis" />
      },
      {
        exact: true,
        path: '/app/account',
        component: lazy(() => import('src/views/pages/AccountView'))
      },
      {
        exact: true,
        path: '/app/analysis',
        component: lazy(() => import('src/views/pages/Analysis'))
      },
      {
        exact: true,
        path: '/app/analysis/sentiments',
        component: lazy(() => import('src/views/pages/Analysis/SentimentsView'))
      },
      {
        exact: true,
        path: '/app/analysis/sentiments/:detail',
        component: lazy(() => import('src/views/pages/Analysis/SentimentsView/SentimentsViewDetails'))
      },
      {
        exact: true,
        path: '/app/analysis/stocks',
        component: lazy(() => import('src/views/pages/Analysis/StocksView'))
      },
      {
        exact: true,
        path: '/app/analysis/stocks/:detail',
        component: lazy(() => import('src/views/pages/Analysis/StocksView/StocksViewDetails'))
      },
    
      {
        component: () => <Redirect to="/app/analysis" />
      }
    ]
  },
  {
    path: '*',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/home',
        component: HomeView
      },
      {
        exact: true,
        path: '/pricing',
        component: lazy(() => import('src/views/pages/PricingView'))
      },
      {
        component: () => <Redirect to="/home" />
      }
    ]
  }
];

const renderRoutes = (routes) => (routes ? (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
        {routes.map((route, i) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;
          const guardProps = route.redirectTo ? {
            redirectTo: route.redirectTo
          } : null
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard {...guardProps}>
                  <Layout>
                    {route.routes
                      ? renderRoutes(route.routes)
                      : <Component {...props} />}
                  </Layout>
                </Guard>
              )}
            />

          );
        })}
    </Switch>
  </Suspense>
) : null);

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
