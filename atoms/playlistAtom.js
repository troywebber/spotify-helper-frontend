import { atom } from "recoil";

export const currentPlaylist = atom({
  key: "currentPlaylist",
  default: "hello",
});
