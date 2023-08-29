import React from 'react';
import style from '~/components/footer/index.scss';
import { globalConfig } from '~/config';

export const Footer = () => {
  return <footer className={style.footer}>{globalConfig.footer}</footer>;
};
