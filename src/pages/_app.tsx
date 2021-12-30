import '../../styles/index.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { GlobalStyles } from 'twin.macro';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>TPFx</title>

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
