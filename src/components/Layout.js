import Head from 'next/head';
import React from 'react';
import CustomFooter from './CustomFooter';
import CustomNavbar from './CustomNavbar';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Expo Imóvel - Summit 2021</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CustomNavbar />
      {children}
      <CustomFooter />
    </>
  );
}

export default Layout;
