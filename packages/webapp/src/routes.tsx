import React from 'react';
import { HomeFilled } from '@ant-design/icons';
import { DashboardPage } from '~/pages/dashboard';
import { NotFoundPage } from '~/exception/404';
import { ForbiddenPage } from '~/exception/403';
import { ServerErrorPage } from '~/exception/500';

export interface RoutesType {
  title: string;
  path: string;
  keywords?: string;
  hideInMenu?: boolean;
  description?: string;
  icon?: React.ComponentType<any>;
  component: React.ComponentType<any>;
  children?: RoutesType[];
}

export const routes: RoutesType[] = [
  {
    path: '/',
    icon: HomeFilled,
    title: 'Dashboard',
    component: DashboardPage,
    children: [
      {
        path: 'demo',
        title: 'Dashboard - child',
        component: DashboardPage,
      },
    ],
  },
  {
    path: '403',
    hideInMenu: true,
    title: 'forbidden',
    component: ForbiddenPage,
  },
  {
    path: '500',
    hideInMenu: true,
    title: 'server error',
    component: ServerErrorPage,
  },
  {
    path: '*',
    hideInMenu: true,
    title: 'Not found',
    component: NotFoundPage,
  },
];
