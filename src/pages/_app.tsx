import React from "react";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";

import { globalStyle } from "styles/Global";
import { theme } from "styles/Theme";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </ThemeProvider>
  </RecoilRoot>
);

export default MyApp;
