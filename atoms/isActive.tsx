import { atom } from "recoil";
import { IsActive } from "../src/types";

export const isActiveAtom = atom<IsActive | string>({
  key: "isActiveAtom",
  default: "playlists",
});
