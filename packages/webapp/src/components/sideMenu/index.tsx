import React, { useContext } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { routes } from '~/routes';
import { GlobalContext, GlobalContextType } from '~/context';
import { Link } from 'react-router-dom';

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
      <Link to={path}>{title}</Link>,
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
  const { activePath, setActivePath } = useContext<GlobalContextType>(GlobalContext);
  const onClick: MenuProps['onClick'] = (e) => {
    setActivePath(e.key);
  };

  return (
    <Menu
      mode="inline"
      onClick={onClick}
      items={menuItems}
      defaultOpenKeys={[activePath]}
      defaultSelectedKeys={[activePath]}
      style={{ width: '100%', height: '100%' }}
    />
  );
};
