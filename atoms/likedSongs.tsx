import { atom } from "recoil";
import { LikedSongs } from "../src/types";

export const likedSongAtom = atom<LikedSongs[] | SpotifyApi.SavedTrackObject[]>(
  {
    key: "likedSongAtom",
    default: [],
  }
);
