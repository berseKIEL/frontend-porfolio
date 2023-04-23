import Head from 'next/head';
import React from 'react';
import { ChildContainerProps } from '@/types/types';
import AppLanguage from '../components/AppLanguage';
import LandingNavBar from '@/components/landing/LandingNavBar';
import LandingFooter from '@/components/landing/LandingFooter';

const Layout = ({ children }: ChildContainerProps) => {
  return (
    <React.Fragment>
      <Head>
        <title> Porfolio Full-stack Developer || Exequiel Barco </title>
        <meta
          name="description"
          content="Porfolio Exequiel Barco, Full-Stack Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Porfolio Full-stack Developer || Exequiel Barco"
        ></meta>
        <meta property="og:url" content=""></meta>
        <meta
          property="og:description"
          content="Porfolio Exequiel Barco, Full-Stack Developer"
        />
        <meta property="og:image" content={`https://i.imgur.com/OhQI6CD.png`}></meta>
        <meta property="og:ttl" content="604800"></meta>
      </Head>
      <AppLanguage />
      <div className="surface-0 flex justify-content-center min-h-screen">
        <div
          id="home"
          className="w-full overflow-hidden flex flex-column justify-content-between"
        >
          <LandingNavBar />
          <main className="main my-7 px-6 flex flex-column align-items-center justify-content-center">
            {children}
          </main>
          <LandingFooter />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
