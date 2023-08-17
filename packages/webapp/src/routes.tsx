import React from 'react';
import { HomeFilled } from '@ant-design/icons';
import { DashboardPage } from '~/pages/dashboard';

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
      {
        path: 'demo-1',
        title: 'Dashboard - child',
        component: DashboardPage,
      },
    ],
  },
];
