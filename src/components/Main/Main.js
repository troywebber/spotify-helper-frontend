import scss from "./main.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import SpotifyWebApi from "spotify-web-api-node";
import { useRecoilValue } from "recoil";
import { currentPlaylist } from "../../../atoms/playlistAtom";
import { likedSongAtom } from "../../../atoms/likedSongs.js";
import { isActiveAtom } from "../../../atoms/isActive.js";
import { albumsAtom } from "../../../atoms/albumsAtom.js";
import Tracklist from "../Tracklist/Tracklist";

const spotifyApi = new SpotifyWebApi();

export default function Main({ accessToken }) {
  const playlist = useRecoilValue(currentPlaylist);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [gradient, setGradient] = useState(
    "linear-gradient(360deg, rgb(18, 18, 18) 35%, rgb(16, 140, 7))"
  );
  const likedSongs = useRecoilValue(likedSongAtom);
  const albums = useRecoilValue(albumsAtom);
  const isActive = useRecoilValue(isActiveAtom);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
  }, [playlist, isActive]);

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

  //handle search input
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  //handle search results
  useEffect(() => {
    if (searchInput.length > 0) {
      const getSearchResults = async () => {
        setTimeout(() => {
          spotifyApi.search(searchInput, ["track"]).then((data) => {
            setSearchResults(data.body.tracks.items);
          });
        }, 200);
      };
      getSearchResults();
    }
  }, [searchInput]);

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
  } else if (isActive === "albums") {
    return (
      <div className={scss.mainContainer} style={{ background: "#121212" }}>
        <h2 className={scss.albumsTitle}>Albums</h2>
        <div className={scss.albums}>
          {albums.map((album, index) => {
            console.log(album.album.artists[0].name);
            return (
              <div className={scss.album} key={index}>
                <div className={scss.albumImage}>
                  <Image
                    src={album.album.images[0].url}
                    alt="albumImage"
                    width={190}
                    height={190}
                    style={{ borderRadius: "7px" }}
                  />
                </div>
                <p className={scss.albumName}>{album.album.name}</p>
                <p className={scss.artistName}>{album.album.artists[0].name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (isActive === "search") {
    return (
      <div className={scss.mainContainer} style={{ background: gradient }}>
        <div className={scss.topBannerSearch}>
          <input
            onChange={(e) => handleSearchInput(e)}
            type="text"
            className={scss.seachInput}
            placeholder="Search.."
          ></input>
        </div>
        <Tracklist results={searchResults} />
      </div>
    );
  } else {
    return (
      <div className={scss.mainContainer} style={{ background: gradient }}>
        <h1>PLEASE SELECT A PLAYLIST OR REFRESH THE PAGE</h1>
      </div>
    );
  }
}
