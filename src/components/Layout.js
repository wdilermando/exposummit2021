import Head from 'next/head';
import React from 'react';
import CustomFooter from './CustomFooter';
import CustomNavbar from './CustomNavbar';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Expoimóvel - Summit 2021</title>
        <link
          rel="shortcut icon"
          href="static/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.syncfusion.com/ej2/material.css"
          rel="stylesheet"
          type="text/css"
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-K9MLJ65');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9MLJ65" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
      </Head>
      <CustomNavbar />
      {children}
      <CustomFooter />
    </>
  );
}

export default Layout;
