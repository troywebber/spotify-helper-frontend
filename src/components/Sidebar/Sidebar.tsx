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
import { likedSongAtom } from "../../../atoms/likedSongs";
import { isActiveAtom } from "../../../atoms/isActive";
import { albumsAtom } from "../../../atoms/albumsAtom";
import { CurrentPlaylist } from "../../types";

const spotifyApi = new SpotifyWebApi();

interface SidebarProps {
  accessToken: string;
}

export default function Sidebar({ accessToken }: SidebarProps) {
  const [playlist, setCurrentPlaylist] = useRecoilState(currentPlaylist);
  const [playlists, setPlaylists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);
  const [likedSongs, setLikedSongs] = useRecoilState(likedSongAtom);
  const [albums, setAlbums] = useRecoilState(albumsAtom);
  const [isActive, setIsActive] = useRecoilState(isActiveAtom);

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

  //get users liked songs
  const getLikedSongs = () => {
    if (accessToken)
      spotifyApi.getMySavedTracks({ limit: 50 }).then((data) => {
        setLikedSongs(data.body.items);
        setIsActive("likedSongs");
      });
  };

  //get user current playlist
  const getCurrentPlaylist = (playlist: CurrentPlaylist) => {
    if (accessToken) setCurrentPlaylist(playlist);
    setIsActive("playlists");
  };

  //get user current albums
  const getAlbums = () => {
    if (accessToken)
      spotifyApi
        .getMySavedAlbums({
          limit: 20,
          offset: 0,
        })
        .then((data) => {
          // Output items
          setAlbums(data.body.items);
          setIsActive("albums");
        });
  };

  //logs user out
  const handleLogout = () => {
    spotifyApi.resetCredentials();
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
            <a onClick={() => setIsActive("tools")}>TOOLS</a>
          </h3>
        </div>
        <div className={scss.search}>
          <BsSearch />
          <h3 className={scss.homeSearchLibraryLinks}>
            <a onClick={() => setIsActive("search")}>SEARCH</a>
          </h3>
        </div>
        <div className={scss.library}>
          <BsBook />
          <h3 className={scss.homeSearchLibraryLinks}>
            <a onClick={() => getAlbums()}>LIBRARY</a>
          </h3>
        </div>
        <div className={scss.library}>
          <BsFillEmojiHeartEyesFill />
          <h3 className={scss.homeSearchLibraryLinks}>
            <a onClick={() => getLikedSongs()}>LIKED SONGS</a>
          </h3>
        </div>
      </div>
      <div className={scss.playlists}>
        {playlists.map((playlist) => (
          <p key={playlist.name}>
            <a onClick={() => getCurrentPlaylist(playlist as CurrentPlaylist)}>
              {playlist.name}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
