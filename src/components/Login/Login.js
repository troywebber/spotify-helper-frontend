import scss from "./login.module.scss";
import { BsSpotify } from "react-icons/bs";

//spotify auth url for login
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=54dece4e1c44405d8832f941bacc28a0&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

function Login() {
  return (
    <div className={scss.loginContainer}>
      <div className={scss.login}>
        <h1>Spotify Helper</h1>
        <BsSpotify size="100" />
        <button className={scss.loginButton}>
          <a href={AUTH_URL}>Login with Spotify</a>
        </button>
      </div>
    </div>
  );
}

export default Login;
