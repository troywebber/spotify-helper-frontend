import { atom } from "recoil";

export const albumsAtom = atom<any>({
  key: "albumsAtom",
  default: [],
});
