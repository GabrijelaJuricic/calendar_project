import { atom } from "recoil";

export const currentlySelectedMonth = atom({
  key: "currentlySelectedMonth",
  default: new Date(),
});
