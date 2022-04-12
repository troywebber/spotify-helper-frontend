import { atom } from "recoil";

export const currentPlaylist = atom({
  key: "currentPlaylist",
  default: {
    collaborative: false,
    description: "",
    external_urls: {
      spotify: "https://open.spotify.com/playlist/1N1aVEPnESlZI6nlqTADkr",
    },
    href: "https://api.spotify.com/v1/playlists/1N1aVEPnESlZI6nlqTADkr",
    id: "1N1aVEPnESlZI6nlqTADkr",
    images: [
      {
        height: 640,
        url: "https://mosaic.scdn.co/640/ab67616d0000b2731501f2fb9d232a41a43bfa70ab67616d0000b27348386de73fd3c90e46ad2447ab67616d0000b273540a283c2b9bf51879d0952eab67616d0000b273a386de0c91a4607c4251ac44",
        width: 640,
      },
      {
        height: 300,
        url: "https://mosaic.scdn.co/300/ab67616d0000b2731501f2fb9d232a41a43bfa70ab67616d0000b27348386de73fd3c90e46ad2447ab67616d0000b273540a283c2b9bf51879d0952eab67616d0000b273a386de0c91a4607c4251ac44",
        width: 300,
      },
      {
        height: 60,
        url: "https://mosaic.scdn.co/60/ab67616d0000b2731501f2fb9d232a41a43bfa70ab67616d0000b27348386de73fd3c90e46ad2447ab67616d0000b273540a283c2b9bf51879d0952eab67616d0000b273a386de0c91a4607c4251ac44",
        width: 60,
      },
    ],
    name: "TECH",
    owner: {
      display_name: "Troy",
      external_urls: {
        spotify: "https://open.spotify.com/user/113647088",
      },
      href: "https://api.spotify.com/v1/users/113647088",
      id: "113647088",
      type: "user",
      uri: "spotify:user:113647088",
    },
    primary_color: null,
    public: true,
    snapshot_id: "MTYsMWI0ZDY0NzQzMGFjOTkxNmE3MDM5MTc1OTNkM2RkODNhZGE2NTljMw==",
    tracks: {
      href: "https://api.spotify.com/v1/playlists/1N1aVEPnESlZI6nlqTADkr/tracks",
      total: 6,
    },
    type: "playlist",
    uri: "spotify:playlist:1N1aVEPnESlZI6nlqTADkr",
  },
});
