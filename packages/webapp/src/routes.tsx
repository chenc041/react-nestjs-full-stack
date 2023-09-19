import React from 'react';
import { HomeFilled } from '@ant-design/icons';

export interface RoutesType {
  title: string;
  path: string;
  keywords?: string;
  hideInMenu?: boolean;
  description?: string;
  icon?: React.ComponentType<any>;
  component: React.LazyExoticComponent<() => React.JSX.Element>;
  children?: RoutesType[];
}

const routes: RoutesType[] = [
  {
    path: '/',
    icon: HomeFilled,
    title: 'Dashboard',
    component: React.lazy(() => import('./pages/dashboard')),
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard - child',
        component: React.lazy(() => import('./pages/dashboard')),
      },
    ],
  },
  {
    path: '403',
    hideInMenu: true,
    title: 'forbidden',
    component: React.lazy(() => import('./exception/403')),
  },
  {
    path: '500',
    hideInMenu: true,
    title: 'server error',
    component: React.lazy(() => import('./exception/500')),
  },
  {
    path: '*',
    hideInMenu: true,
    title: 'Not found',
    component: React.lazy(() => import('./exception/404')),
  },
];

const flattenRoutes: RoutesType[] = [];
routes.forEach((item) => {
  flattenRoutes.push(item);
  if (item.children && item.children.length > 0) {
    item.children.forEach((child) => {
      flattenRoutes.push({
        ...child,
        path: (item.path === '/' ? item.path : item.path + '/') + (child.path.startsWith('/') ? child.path.replace(/^\//, '') : child.path),
      });
    });
  }
});

const breadcrumb = new Map();
flattenRoutes
  .filter((item) => !item.hideInMenu)
  .forEach((item) => {
    breadcrumb.set(item.path, item);
  });

export { flattenRoutes, routes, breadcrumb };
