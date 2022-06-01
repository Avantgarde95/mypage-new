import React, { ReactNode } from "react";
import styled from "@emotion/styled";

import Header from "containers/Header";
import Footer from "containers/Footer";
import { parentOfFlexChildStyle } from "styles/Fixes";

interface PageProps {
  background?: ReactNode;
  children: ReactNode;
}

const Page = ({ background, children }: PageProps) => (
  <Container>
    <Back>{background}</Back>
    <Front>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Front>
  </Container>
);

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

const Back = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.black};
`;

const Front = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.color.white};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;

  ${parentOfFlexChildStyle}
`;

export default Page;
