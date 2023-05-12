import { atom } from "recoil";

export const likedSongAtom = atom<any>(
  {
    key: "likedSongAtom",
    default: [],
  }
);
