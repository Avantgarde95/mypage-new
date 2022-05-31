import { Theme } from "@emotion/react";
import { darken, lighten } from "polished";

export const theme: Theme = {
  color: {
    black: darken(0.12, "#2e2e2e"),
    white: "#ffffff",
    gray: "#797979",
    yellow: "#e5b567",
    blue: lighten(0.05, "#87d4eb"),
    darkblue: "rgb(35, 51, 129)",
  },
};
