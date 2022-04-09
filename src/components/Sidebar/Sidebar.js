import scss from "../Sidebar/sidebar.module.scss";
import SpotifyWebApi from "spotify-web-api-node";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  BsHouse,
  BsSearch,
  BsBook,
  BsFillEmojiHeartEyesFill,
} from "react-icons/bs";
import { currentPlaylist } from "../../../atoms/playlistAtom";

const spotifyApi = new SpotifyWebApi();

export default function Sidebar({ accessToken }) {
  const [playlist, setCurrentPlaylist] = useRecoilState(currentPlaylist);
  const [playlists, setPlaylists] = useState([]);

  // set spotify access token
  useEffect(() => {
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  //get users playlists
  useEffect(() => {
    if (accessToken)
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
  }, [accessToken]);

  //logs user out
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  return (
    <div className={scss.sidebar}>
      <div className={scss.homeSearchLibrary}>
        <button className={scss.signInButton} onClick={() => handleLogout()}>
          <a>Sign Out</a>
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
            <a onClick={() => setCurrentPlaylist(playlist)}>{playlist.name}</a>
          </p>
        ))}
      </div>
    </div>
  );
}
