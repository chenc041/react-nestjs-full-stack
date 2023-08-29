import * as process from 'process';
import type { MenuTheme } from 'antd';
export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '';

export const globalConfig: {
  footer: string;
  header: string;
  collapsed: boolean;
  menuTheme: MenuTheme;
} = {
  collapsed: false,
  menuTheme: 'light',
  footer: '西瓜大侠',
  header: '瓜_',
};
