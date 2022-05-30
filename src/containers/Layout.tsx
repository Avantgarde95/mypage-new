import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import { themeState } from "states/Theme";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme}>
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Layout;
