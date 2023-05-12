import { atom } from "recoil";

export const isActiveAtom = atom<string>({
  key: "isActiveAtom",
  default: "playlists",
});
