import React, { Suspense, useMemo } from 'react';
import { routes, RoutesType } from '~/routes';
import { Spin } from 'antd';
import { GlobalContext, UserInfo } from '~/context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '~/pages/layout';

const App = () => {
  const [activePath, setActivePath] = React.useState('/');
  const [userInfo, setUserInfo] = React.useState<UserInfo>({});

  const flatRoutes = useMemo(() => {
    const tempFlatRoutes: RoutesType[] = [];
    routes.forEach((item) => {
      tempFlatRoutes.push(item);
      if (item.children && item.children.length > 0) {
        item.children.forEach((child) => {
          tempFlatRoutes.push({
            ...child,
            path: item.path + child.path,
          });
        });
      }
    });
    return tempFlatRoutes;
  }, [routes]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
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
  ]);

  return (
    <GlobalContext.Provider value={{ userInfo, activePath, setActivePath, setUserInfo }}>
      <Suspense fallback={<Spin size="large" />}>
        <RouterProvider router={router} />
      </Suspense>
    </GlobalContext.Provider>
  );
};

export default App;
