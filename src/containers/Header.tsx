import React from "react";
import styled from "@emotion/styled";
import { FaBatteryFull, FaSignal, FaWifi } from "react-icons/fa";

const Header = () => (
  <Container>
    <Block>MyPad</Block>
    <Fill />
    <Block>
      <FaWifi />
    </Block>
    <Block>
      <FaSignal />
    </Block>
    <Block>
      <FaBatteryFull />
    </Block>
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 2rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
`;

const Block = styled.div`
  display: inline-block;

  margin-left: 0.2rem;
  margin-right: 0.2rem;
`;

const Fill = styled.div`
  display: inline-block;

  flex: 1;
`;

export default Header;
