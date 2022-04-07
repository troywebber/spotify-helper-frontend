import scss from "../Sidebar/sidebar.module.scss";
import SpotifyWebApi from "spotify-web-api-node";
import { useEffect, useState } from "react";

const spotifyApi = new SpotifyWebApi();

import {
  BsHouse,
  BsSearch,
  BsBook,
  BsFillEmojiHeartEyesFill,
} from "react-icons/bs";

export default function Sidebar({ accessToken }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (accessToken)
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
  }, [accessToken]);

  return (
    <div className={scss.sidebar}>
      <div className={scss.homeSearchLibrary}>
        <button className={scss.signInButton}>
          <a href="https://www.spotify.com/logout/" target="blank">
            Sign Out
          </a>
        </button>
        <div className={scss.home}>
          <BsHouse />
          <h3 className={scss.homeSearchLibraryLinks}>
            <a>HOME</a>
          </h3>
        </div>
        <div className={scss.search}>
          <BsSearch />
          <h3 className={scss.homeSearchLibraryLinks}>
            <a>SEARCH</a>
          </h3>
        </div>
        <div className={scss.library}>
          <BsBook />
          <h3 className={scss.homeSearchLibraryLinks}>
            <a>LIBRARY</a>
          </h3>
        </div>
        <div className={scss.library}>
          <BsFillEmojiHeartEyesFill />
          <h3 className={scss.homeSearchLibraryLinks}>
            <a>LIKED SONGS</a>
          </h3>
        </div>
      </div>
      <div className={scss.playlists}>
        {playlists.map((playlist) => (
          <p key={playlist.name}>
            <a>{playlist.name}</a>
          </p>
        ))}
      </div>
    </div>
  );
}
