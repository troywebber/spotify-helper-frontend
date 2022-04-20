import React from "react";
import Image from "next/image";
import scss from "../Tracklist/tracklist.module.scss";

function Tracklist({ results }) {
  return (
    <div>
      <div className={scss.playlistTrackTitles}>
        <p>ALBUM</p>
        <p>TRACK</p>
        <p>ARTIST</p>
      </div>
      <div className={scss.playlistTrackBorder}></div>
      <div className={scss.playlistTracks}>
        {results?.map((track, index) => {
          return (
            <div className={scss.track} key={index}>
              <Image
                src={track.album.images[0].url}
                alt="trackImage"
                width={100}
                height={100}
              />
              <p>{track.name}</p>
              <p>{track.artists[0].name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tracklist;
