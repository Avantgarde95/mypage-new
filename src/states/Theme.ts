import { atom } from "recoil";
import { Theme } from "@emotion/react";
import { lightTheme } from "styles/Theme";

export const themeState = atom<Theme>({
  key: "theme",
  default: lightTheme,
});
