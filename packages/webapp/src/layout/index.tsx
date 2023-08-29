import React from 'react';
import { Card, App } from 'antd';
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
            <Card style={{ minHeight: 'calc(100vh - 130px)', margin: 15 }}>
              <Outlet />
            </Card>
            <Footer />
          </section>
        </main>
      </div>
    </App>
  );
};
