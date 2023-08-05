import React from 'react';
import { routes } from '~/routes';
import { Helmet } from 'react-helmet';
import { GlobalContext } from '~/context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '~/pages/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes.map((item) => {
      const { pathname, component: Component } = item;
      return {
        path: pathname,
        element: (
          <>
            <Helmet>
              <title>{item.title}</title>
            </Helmet>
            <Component />
          </>
        ),
      };
    }),
  },
]);

const App = () => {
  const [appName, setAppName] = React.useState('demo');
  return (
    <GlobalContext.Provider value={{ appName, setAppName }}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
};

export default App;
