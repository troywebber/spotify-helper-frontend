import { ReactNode } from "react";

export interface duplicateFinderProps {
  accessToken: string;
}

export interface MainProps {
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

export interface LikedSongs {
  addedAt: string;
  track: SpotifyApi.TrackObjectFull;
}

export interface IsActive {
  isActive: string;
}

export interface CurrentPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: string | null;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

export interface PlaylistTracks {
  addedAt: string;
  added_by: SpotifyApi.UserObjectPublic;
  is_local: boolean;
  primary_color: string | null;
  track: SpotifyApi.TrackObjectFull | null;
  video_thumbnail: string | null;
  video_url: string | null;
}

export interface SearchResults {
  album: SpotifyApi.AlbumObjectSimplified;
  artists: SpotifyApi.ArtistObjectSimplified[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: SpotifyApi.ExternalIdObject;
  external_urls: SpotifyApi.ExternalUrlObject;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
}
