import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { darken, lighten } from "polished";
import { FaRegStar } from "react-icons/fa";

import { getRandomFloat, range } from "utils/MathUtils";
import { createNeonSVGStyle } from "styles/Effects";

const Sky = () => (
  <Container>
    {range(0, 8).map((index) => (
      <Star
        key={index}
        style={{
          top: `${getRandomFloat(10, 90)}%`,
          left: `${getRandomFloat(10, 90)}%`,
          fontSize: `${getRandomFloat(0.5, 1)}rem`,
          animationDelay: `${getRandomFloat(0, 3)}s`,
        }}
      />
    ))}
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) =>
    `linear-gradient(
      ${darken(0.2, theme.color.darkblue)},
      ${lighten(0.1, theme.color.darkblue)}
    )`};
`;

const minOpacity = 0.1;
const maxOpacity = 0.8;

const starAnimation = keyframes`
  0% {
    opacity: ${minOpacity};
  }
  50% {
    opacity: ${maxOpacity};
  }
  100% {
    opacity: ${minOpacity};
  }
`;

const Star = styled(FaRegStar)`
  position: absolute;

  color: ${({ theme }) => theme.color.yellow};
  opacity: ${minOpacity};
  animation: ${starAnimation} 5s infinite;

  ${({ theme }) =>
    createNeonSVGStyle(
      darken(0.1, theme.color.yellow),
      lighten(0.1, theme.color.yellow)
    )}
`;

export default Sky;
