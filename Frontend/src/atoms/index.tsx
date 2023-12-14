import { atom } from "recoil";

export const API_KEY = atom<string>({
  key: "ApiKey",
  default: "",
});
