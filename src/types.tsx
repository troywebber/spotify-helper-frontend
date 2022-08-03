import { ReactNode } from "react";

export interface duplicateFinderProps {
  accessToken: string;
}

export interface Results {
  artists: any;
  name: ReactNode;
  album: any;
  tracks: {
    items: any[];
  };
}

export interface DuplicateSongs {
  addedAt: string;
  added_by: SpotifyApi.UserObjectPublic;
  is_local: boolean;
  primary_color: string | null;
  track: SpotifyApi.TrackObjectFull;
  video_thumbnail: string | null;
  video_url: string | null;
}

export interface Songs {
  addedAt: string;
  added_by: SpotifyApi.UserObjectPublic;
  is_local: boolean;
  primary_color: string | null;
  track: SpotifyApi.TrackObjectFull;
  video_thumbnail: string | null;
  video_url: string | null;
}
