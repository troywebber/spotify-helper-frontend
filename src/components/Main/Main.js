import scss from "./main.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import SpotifyWebApi from "spotify-web-api-node";
import { useRecoilValue } from "recoil";
import { currentPlaylist } from "../../../atoms/playlistAtom";

const spotifyApi = new SpotifyWebApi();

export default function Main({ accessToken }) {
  const playlist = useRecoilValue(currentPlaylist);
  const [gradient, setGradient] = useState(
    "linear-gradient(360deg, rgb(18, 18, 18) 35%, rgb(16, 140, 7))"
  );

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
  }, []);

  useEffect(() => {
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  if (typeof playlist != "string") {
    console.log(playlist);
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
          <div className={scss.playlistInfo}>
            <p>playlist</p>
            <h1 className={scss.playlistName}>{playlist.name}</h1>
            <div className={scss.playlistOwner}>
              <p>{playlist.owner.display_name}</p>
              <p>likes</p>
              <p>song total</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={scss.mainContainer} style={{ background: gradient }}>
      <h1>hello</h1>
    </div>
  );
}
