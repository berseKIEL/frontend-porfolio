import Head from 'next/head';
import React from 'react';
import { ChildContainerProps } from '@/types/types';
import AppLanguage from './AppLanguage';

const Layout = ({ children }: ChildContainerProps) => {
  return (
    <React.Fragment>
      <Head>
        <title> Porfolio Full-stack Developer || Exequiel Barco </title>
      </Head>
      <AppLanguage />
      <div>{children}</div>
    </React.Fragment>
  );
};

export default Layout;
