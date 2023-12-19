import { atom } from "recoil";

export const newsCategory = atom<string>({
  key: "category",
  default: "general",
});
