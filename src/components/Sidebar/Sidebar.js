import scss from "../Sidebar/sidebar.module.scss";
import {
  BsHouse,
  BsSearch,
  BsBook,
  BsFillEmojiHeartEyesFill,
} from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className={scss.sidebar}>
      <div className={scss.homeSearchLibrary}>
        <button className={scss.signInButton}>Sign out</button>
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
        <div>
          <p>
            <a>PLAYLIST</a>
          </p>
          <p>
            <a>PLAYLIST</a>
          </p>
          <p>
            <a>PLAYLIST</a>
          </p>
          <p>
            <a>PLAYLIST</a>
          </p>
        </div>
      </div>
    </div>
  );
}
