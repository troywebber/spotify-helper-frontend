import scss from "./duplicateFinder.module.scss";
import SpotifyWebApi from "spotify-web-api-node";
import { useEffect, useState } from "react";
import Image from "next/image";
import { duplicateFinderProps, DuplicateSongs, Songs } from "../../types";

const spotifyApi = new SpotifyWebApi();

function DuplicateFinder({ accessToken }: duplicateFinderProps) {
  const [playlists, setPlaylists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState<null | string>(null);
  const [songs, setSongs] = useState<Songs[]>([]);
  const [duplicateSongs, setDuplicateSongs] = useState<DuplicateSongs[]>([]);

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

  const handleBackClick = () => {
    setSelectedPlaylist(null);
    setDuplicateSongs([]);
  };

  //handlebutton click console log playlist id
  const handlePlaylistClick = (
    playlist: SpotifyApi.PlaylistObjectSimplified
  ) => {
    setSelectedPlaylist(playlist.id);
  };

  //fetch songs from selected playlist without the 100 song limit
  useEffect(() => {
    if (selectedPlaylist !== null) {
      const getPlaylistTracks = async (selectedPlaylist: string) => {
        let tracks: any[] = [];
        let offset = 0;
        let limit = 100;
        let total = 0;
        let hasMore = true;
        while (hasMore) {
          const response = await spotifyApi.getPlaylistTracks(
            selectedPlaylist,
            {
              offset,
              limit,
            }
          );
          tracks = tracks.concat(response.body.items);
          offset += limit;
          total = response.body.total;
          hasMore = offset < total;
        }
        setSongs(tracks.filter((song) => song.track !== null));
      };
      getPlaylistTracks(selectedPlaylist);
    }
  }, [selectedPlaylist]);

  //song comparision function to find duplicate songs
  useEffect(() => {
    if (songs.length > 0) {
      const findDuplicateSongs = (songs: any[]) => {
        const songNames = songs.map(
          (song: { track: { name: any } }) => song.track.name
        );
        const duplicates = songNames.filter((name: any, index: any) => {
          return songNames.indexOf(name) !== index;
        });
        duplicates.forEach((duplicate: any) => {
          let duplicateSong = songs.find(
            (song: { track: { name: any } }) => song.track.name === duplicate
          );
          setDuplicateSongs([...duplicateSongs, duplicateSong]);
        });
      };
      findDuplicateSongs(songs);
    }
  }, [songs]);

  if (selectedPlaylist && songs.length > 0) {
    return (
      <div>
        <button onClick={() => handleBackClick()}>Back</button>
        <div className={scss.playlistTrackTitles}>
          <p>ALBUM</p>
          <p>TRACK</p>
          <p>ARTIST</p>
        </div>
        <div className={scss.playlistTrackBorder}></div>
        <div className={scss.playlistTracks}>
          {duplicateSongs.map((track, index) => {
            return (
              <div className={scss.track} key={index}>
                <Image
                  src={track.track.album.images[0].url || ""}
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
  } else {
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
}
export default DuplicateFinder;
