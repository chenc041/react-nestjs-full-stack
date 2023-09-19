import React, { useContext } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { GlobalContext, GlobalContextType } from '~/context';
import { routes } from '~/routes';
import { Link } from 'react-router-dom';
import styles from '~/components/sideMenu/index.scss';
import { globalConfig } from '~/config';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const menuItems: MenuProps['items'] = routes
  .filter((item) => !item.hideInMenu)
  .map(({ title, path, icon: Icon, children }) => {
    return getItem(
      children && children.length > 0 ? title : <Link to={path}>{title}</Link>,
      path,
      Icon ? <Icon /> : null,
      children && children.length > 0
        ? children.map((child) => {
            return getItem(<Link to={path + child.path}>{child.title}</Link>, path + child.path);
          })
        : undefined
    );
  });
export const SideMenu = () => {
  const { setDefaultSelectedKey, defaultSelectedKey, defaultOpenKey } = useContext<GlobalContextType>(GlobalContext);
  const onClick: MenuProps['onClick'] = (e) => {
    setDefaultSelectedKey(e.key);
  };

  return (
    <>
      <Menu
        mode="inline"
        onClick={onClick}
        items={menuItems}
        className={styles.sideMenu}
        theme={globalConfig.menuTheme}
        defaultOpenKeys={[defaultOpenKey]}
        inlineCollapsed={globalConfig.collapsed}
        defaultSelectedKeys={[defaultSelectedKey]}
        style={{ position: 'fixed', top: 52, zIndex: 10, width: globalConfig.collapsed ? 'auto' : 208 }}
      />
      <div className={styles.sideMenu} style={{ opacity: 0, width: globalConfig.collapsed ? 106 : 208 }} />
    </>
  );
};
