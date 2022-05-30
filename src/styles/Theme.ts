import { Theme } from "@emotion/react";
import { darken } from "polished";

export const lightTheme: Theme = {
  color: {
    black: darken(0.12, "#2e2e2e"),
    white: "#ffffff",
    gray: "#797979",
    yellow: "#e5b567",
  },
};
