import React, { ReactNode } from "react";
import styled from "@emotion/styled";

import { range } from "utils/MathUtils";

interface GridProps {
  className?: string;
  cellWidth: string;
  cellHeight: string;
  maxDimensionX: number;
  children: Array<ReactNode>;
}

const Grid = ({
  className,
  cellWidth,
  cellHeight,
  maxDimensionX,
  children,
}: GridProps) => (
  <Container
    className={className}
    cellWidth={cellWidth}
    cellHeight={cellHeight}
    maxDimensionX={maxDimensionX}
  >
    {children.map((content, index) => (
      <RealCell key={index}>{content}</RealCell>
    ))}
    {range(0, maxDimensionX).map((_, index) => (
      <FakeCell key={index} />
    ))}
  </Container>
);

const RealCell = styled.div``;

const FakeCell = styled.div``;

type ContainerProps = GridProps;

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  max-width: ${({ cellWidth, maxDimensionX }) =>
    `calc(${cellWidth} * ${maxDimensionX})`};

  ${RealCell} {
    width: ${({ cellWidth }) => cellWidth};
    height: ${({ cellHeight }) => cellHeight};
  }

  ${FakeCell} {
    width: ${({ cellWidth }) => cellWidth};
    height: 0;
  }
`;

export default Grid;
