import { atom } from "recoil";

export const lockState = atom({
  key: "lock",
  default: true,
});
