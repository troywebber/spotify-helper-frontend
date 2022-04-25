import scss from "./duplicateFinder.module.scss";
import SpotifyWebApi from "spotify-web-api-node";
import { useEffect, useState } from "react";
import Image from "next/image";

const spotifyApi = new SpotifyWebApi();

function DuplicateFinder({ accessToken }) {
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

  //handlebutton click console log playlist id
  const handlePlaylistClick = (playlist) => {
    console.log(playlist);
  };

  return (
    <div className={scss.mainContainer} style={{ background: "#121212" }}>
      <h2 className={scss.playlistTitle}>DUPLICATE REMOVER COMING SOON!</h2>
      <div className={scss.playlists}>
        {playlists.map((playlist, index) => {
          return (
            <div className={scss.playlist} key={index}>
              <div className={scss.playlistImage}>
                <Image
                  src={playlist.images[0].url}
                  alt="playlistImage"
                  width={190}
                  height={190}
                  style={{ borderRadius: "7px" }}
                />
              </div>
              <div className={scss.playlistNameButton}>
                <p className={scss.playlistName}>{playlist.name}</p>
                <button
                  className={scss.playlistButton}
                  onClick={(e) => handlePlaylistClick(playlist)}
                >
                  Find Duplicates
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DuplicateFinder;
