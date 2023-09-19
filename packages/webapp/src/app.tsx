import React, { Suspense } from 'react';
import { flattenRoutes } from '~/routes';
import { Spin, ConfigProvider } from 'antd';
import { GlobalContext, UserInfo } from '~/context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BasicLayout } from '~/layout';
import Zh_CN from 'antd/locale/zh_CN';
import { ErrorBoundary } from '~/exception/errorBoundary';
import * as process from 'process';
import { LoginPage } from '~/pages/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    errorElement: <ErrorBoundary />,
    loader:
      process.env.NODE_ENV === 'development'
        ? undefined
        : async () => {
            return new Promise<{ name: string }>((resolve) => {
              setTimeout(() => {
                resolve({ name: 'chen' });
              }, 100);
            });
          },
    children: flattenRoutes.map((item) => {
      const { path, component: Com } = item;
      return {
        path,
        Component: Com,
      };
    }),
  },
  {
    path: 'login',
    lazy: async () => {
      return {
        Component: LoginPage,
      };
    },
  },
]);

const App = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfo>({});
  const [defaultOpenKey, setDefaultOpenKey] = React.useState('/');
  const [defaultSelectedKey, setDefaultSelectedKey] = React.useState('/');

  React.useEffect(() => {
    const [first] = flattenRoutes;
    setDefaultOpenKey(`${first.path}`);
    setDefaultSelectedKey(`${first.path}${first.children && first.children.length > 0 ? first.children[0].path : ''}`);
  }, [flattenRoutes]);

  return (
    <ConfigProvider locale={Zh_CN}>
      <GlobalContext.Provider
        value={{ userInfo, defaultOpenKey, setDefaultOpenKey, defaultSelectedKey, setDefaultSelectedKey, setUserInfo }}
      >
        <Suspense
          fallback={
            <div
              style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Spin size="large" />
            </div>
          }
        >
          <RouterProvider router={router} />
        </Suspense>
      </GlobalContext.Provider>
    </ConfigProvider>
  );
};

export default App;
