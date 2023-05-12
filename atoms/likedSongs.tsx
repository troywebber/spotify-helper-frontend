import { atom } from "recoil";
import { LikedSongs } from "../src/types";

export const likedSongAtom = atom<any>(
  {
    key: "likedSongAtom",
    default: [],
  }
);
