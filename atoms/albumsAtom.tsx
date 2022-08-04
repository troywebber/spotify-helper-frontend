import { atom } from "recoil";
import { Albums } from "../src/types";

export const albumsAtom = atom<Albums[]>({
  key: "albumsAtom",
  default: [],
});
