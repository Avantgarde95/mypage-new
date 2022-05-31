import { css } from "@emotion/react";

export const neonSVGStyle = (
  darkColor: string,
  lightColor: string,
  startSize: string = "2px",
  endSize: string = "4px"
) => css`
  filter: drop-shadow(0 0 ${startSize} ${darkColor})
    drop-shadow(0 0 ${endSize} ${lightColor});
`;
