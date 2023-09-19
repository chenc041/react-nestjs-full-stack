import React from 'react';
import { Card, App, Breadcrumb } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from '~/components/header';
import { Footer } from '~/components/footer';
import styles from '~/layout/index.scss';
import { SideMenu } from '~/components/sideMenu';

export const BasicLayout = () => {
  return (
    <App>
      <div className={styles.layoutPage}>
        <Header />
        <main className={styles.layoutMain}>
          <SideMenu />
          <section>
            <Breadcrumb
              className={styles.breadcrumb}
              items={[
                {
                  title: 'Dashboard',
                },
              ]}
            />
            <Card style={{ minHeight: 'calc(100vh - 180px)' }}>
              <Outlet />
            </Card>
            <Footer />
          </section>
        </main>
      </div>
    </App>
  );
};
