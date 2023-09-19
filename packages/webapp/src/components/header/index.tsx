import React from 'react';
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from '~/components/header/index.scss';
import { GlobalContext, GlobalContextType } from '~/context';
import { globalConfig } from '~/config';

export const Header = () => {
  const { userInfo } = React.useContext<GlobalContextType>(GlobalContext);

  const onLogout = () => {
    console.log('logout');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a onClick={onLogout}>logout</a>,
    },
  ];

  return (
    <>
      <header className={styles.header} style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 101 }}>
        <div className={styles.logo}>{globalConfig.header}</div>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {userInfo.username || 'chen'}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </header>
      <header className={styles.header} style={{ opacity: 0, boxShadow: 'none' }} />
    </>
  );
};
