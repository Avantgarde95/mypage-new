import { atom } from "recoil";
import { Language } from "types/Language";

export const languageState = atom<Language>({
  key: "language",
  default: "Korean",
});
