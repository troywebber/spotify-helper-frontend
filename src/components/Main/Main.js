import scss from "./main.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import SpotifyWebApi from "spotify-web-api-node";
import { useRecoilValue } from "recoil";
import { currentPlaylist } from "../../../atoms/playlistAtom";
import { likedSongAtom } from "../../../atoms/likedSongs.js";
import { isActiveAtom } from "../../../atoms/isActive.js";

const spotifyApi = new SpotifyWebApi();

export default function Main({ accessToken }) {
  const playlist = useRecoilValue(currentPlaylist);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [gradient, setGradient] = useState(
    "linear-gradient(360deg, rgb(18, 18, 18) 35%, rgb(16, 140, 7))"
  );
  const likedSongs = useRecoilValue(likedSongAtom);
  const isActive = useRecoilValue(isActiveAtom);
  console.log(likedSongs);

  //random color
  useEffect(() => {
    const randomColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setGradient(
        `linear-gradient(360deg, rgb(18,18,18) 35%, rgb(${r}, ${g}, ${b}))`
      );
    };
    randomColor();
  }, [playlist]);

  // set spotify access token
  useEffect(() => {
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // get playlist tracks
  useEffect(() => {
    const getPlaylistTracks = async () => {
      setTimeout(() => {
        spotifyApi.getPlaylistTracks(playlist.id).then((data) => {
          setPlaylistTracks(data.body.items);
        });
      }, 200);
    };
    getPlaylistTracks();
  }, [playlist]);

  if (isActive === "playlists") {
    return (
      <div className={scss.mainContainer} style={{ background: gradient }}>
        <div className={scss.topBanner}>
          <div className={scss.playlistImage}>
            <Image
              src={playlist.images[0].url}
              alt="playlistImage"
              width={220}
              height={220}
            />
          </div>
          <h1 className={scss.playlistName}>{playlist.name}</h1>
        </div>
        <div className={scss.playlistTrackTitles}>
          <p>ALBUM</p>
          <p>TRACK</p>
          <p>ARTIST</p>
        </div>
        <div className={scss.playlistTrackBorder}></div>
        <div className={scss.playlistTracks}>
          {playlistTracks.map((track, index) => {
            return (
              <div className={scss.track} key={index}>
                <Image
                  src={track.track.album.images[0].url}
                  alt="trackImage"
                  width={100}
                  height={100}
                />
                <p>{track.track.name}</p>
                <p>{track.track.artists[0].name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (isActive === "likedSongs") {
    return (
      <div className={scss.mainContainer} style={{ background: gradient }}>
        <div className={scss.topBanner}>
          <div className={scss.playlistImage}>
            <Image
              src={likedSongs[0].track.album.images[0].url}
              alt="likedSongsImage"
              width={220}
              height={220}
            />
          </div>
          <h1 className={scss.playlistName}>SAVED</h1>
        </div>
        <div className={scss.playlistTrackTitles}>
          <p>ALBUM</p>
          <p>TRACK</p>
          <p>ARTIST</p>
        </div>
        <div className={scss.playlistTrackBorder}></div>
        <div className={scss.playlistTracks}>
          {likedSongs.map((track, index) => {
            return (
              <div className={scss.track} key={index}>
                <Image
                  src={track.track.album.images[0].url}
                  alt="trackImage"
                  width={100}
                  height={100}
                />
                <p>{track.track.name}</p>
                <p>{track.track.artists[0].name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );

    // return (
    //   <div className={scss.mainContainer} style={{ background: gradient }}>
    //     <h1>
    //       Please select a playlist from the sidebar to load information or refresh
    //       the page
    //     </h1>
    //   </div>
    // );
  }
}
