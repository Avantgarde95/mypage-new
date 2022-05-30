import React from "react";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Global } from "@emotion/react";

import Layout from "containers/Layout";
import { globalStyle } from "styles/Global";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Global styles={globalStyle} />
    <Head>
      <title>Home</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </RecoilRoot>
);

export default MyApp;
