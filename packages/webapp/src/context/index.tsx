import React from 'react';

export interface UserInfo {
  id?: number;
  avatar?: string;
  username?: string;
}

export interface GlobalContextType {
  activePath: string;
  userInfo: UserInfo;
  setActivePath: (path: string) => void;
  setUserInfo: (userInfo: UserInfo) => void;
}

export const GlobalContext = React.createContext<GlobalContextType>({
  userInfo: {},
  activePath: '/',
  setUserInfo: () => {},
  setActivePath: () => {},
});
