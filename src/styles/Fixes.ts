import { css } from "@emotion/react";

/**
 * When the child has `display: flex`, sometimes applying `overflow-y: auto` on the child does not work.
 * Put this on the parent to solve that problem.
 */
export const parentOfFlexChildStyle = css`
  min-height: 0;
`;
