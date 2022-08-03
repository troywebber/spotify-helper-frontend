import scss from "./login.module.scss";
import { BsSpotify } from "react-icons/bs";

//spotify auth url for login
const AUTH_URL: string = `https://accounts.spotify.com/authorize?client_id=54dece4e1c44405d8832f941bacc28a0&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

function Login() {
  return (
    <div className={scss.loginContainer}>
      <div className={scss.login}>
        <BsSpotify size="100" />
        <h1>SPOTIFY HELPER</h1>
        <p className={scss.alert}>
          Unfortunately due to restrictions with the Spotify API requiring
          manual verification for every account, I have decided to create a
          dummy account with pre-defined playlists, albums and tracks for
          testing.
        </p>
        <p>Please use the following credentials to login:</p>
        <p>
          <strong>EMAIL:</strong> tdwflhyhrhupiyqlqy@nvhrw.com
        </p>
        <p>
          <strong>PASSWORD:</strong> Ilovecoding
        </p>
        <p>Sorry for the inconvenience. I hope you enjoy the app!</p>
        <button className={scss.loginButton}>
          <a href={AUTH_URL}>Login with Spotify</a>
        </button>
      </div>
    </div>
  );
}

export default Login;
