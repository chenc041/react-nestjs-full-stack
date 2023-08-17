import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '~/components/header';
import { Footer } from '~/components/footer';
import { SideMenu } from '~/components/sideMenu';
import styles from '~/pages/layout/index.scss';

export const Layout = () => {
  return (
    <div className={styles.layoutPage}>
      <Header />
      <main className={styles.layoutMain}>
        <aside>
          <SideMenu />
        </aside>
        <section style={{ minHeight: 0 }}>
          <Outlet />
          <Footer />
        </section>
      </main>
    </div>
  );
};
