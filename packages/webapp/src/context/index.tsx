import React from 'react';

export interface UserInfo {
  id?: number;
  avatar?: string;
  username?: string;
}

export interface GlobalContextType {
  userInfo: UserInfo;
  defaultOpenKey: string;
  defaultSelectedKey: string;
  setDefaultOpenKey: (path: string) => void;
  setUserInfo: (userInfo: UserInfo) => void;
  setDefaultSelectedKey: (path: string) => void;
}

export const GlobalContext = React.createContext<GlobalContextType>({
  userInfo: {},
  defaultOpenKey: '/',
  defaultSelectedKey: '/',
  setUserInfo: () => {},
  setDefaultOpenKey: () => {},
  setDefaultSelectedKey: () => {},
});
