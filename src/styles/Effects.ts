import { css } from "@emotion/react";

export function createNeonSVGStyle(
  darkColor: string,
  lightColor: string,
  startSize: string = "2px",
  endSize: string = "4px"
) {
  return css`
    filter: drop-shadow(0 0 ${startSize} ${darkColor})
      drop-shadow(0 0 ${endSize} ${lightColor});
  `;
}

export function createNeonBorderStyle(
  darkColor: string,
  lightColor: string,
  startSize: string = "2px",
  endSize: string = "4px"
) {
  return css`
    box-shadow: 0 0 ${startSize} ${darkColor}, 0 0 ${endSize} ${lightColor};
  `;
}
