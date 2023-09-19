import React, { useMemo } from 'react';
import { routes, RoutesType } from '~/routes';
import { Spin, ConfigProvider } from 'antd';
import { GlobalContext, UserInfo } from '~/context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BasicLayout } from '~/layout';
import Zh_CN from 'antd/locale/zh_CN';
import { ErrorBoundary } from '~/exception/errorBoundary';
import * as process from 'process';
import { Login } from '~/pages/login';

const App = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfo>({});
  const [defaultOpenKey, setDefaultOpenKey] = React.useState('/');
  const [defaultSelectedKey, setDefaultSelectedKey] = React.useState('/');

  const flatRoutes = useMemo(() => {
    const tempFlatRoutes: RoutesType[] = [];
    routes.forEach((item) => {
      tempFlatRoutes.push(item);
      if (item.children && item.children.length > 0) {
        item.children.forEach((child) => {
          tempFlatRoutes.push({
            ...child,
            path:
              (item.path === '/' ? item.path : item.path + '/') + (child.path.startsWith('/') ? child.path.replace(/^\//, '') : child.path),
          });
        });
      }
    });
    return tempFlatRoutes;
  }, [routes]);

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
      children: flatRoutes.map((item) => {
        const { path, component: Com } = item;
        return {
          path,
          lazy: async () => {
            return {
              Component: Com,
            };
          },
        };
      }),
    },
    {
      path: 'login',
      lazy: async () => {
        return {
          Component: Login,
        };
      },
    },
  ]);

  React.useEffect(() => {
    const [first] = flatRoutes;
    setDefaultOpenKey(`${first.path}`);
    setDefaultSelectedKey(`${first.path}${first.children && first.children.length > 0 ? first.children[0].path : ''}`);
  }, [flatRoutes]);

  return (
    <ConfigProvider locale={Zh_CN}>
      <GlobalContext.Provider
        value={{ userInfo, defaultOpenKey, setDefaultOpenKey, defaultSelectedKey, setDefaultSelectedKey, setUserInfo }}
      >
        <RouterProvider
          router={router}
          fallbackElement={
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
        />
      </GlobalContext.Provider>
    </ConfigProvider>
  );
};

export default App;
