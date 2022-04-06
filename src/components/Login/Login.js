const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=54dece4e1c44405d8832f941bacc28a0&response_type=code&redirect_uri=https://spotify-helper-frontend.netlify.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

function Login() {
  return (
    <div>
      <button>
        <a href={AUTH_URL}>Login with Spotify</a>
      </button>
    </div>
  );
}

export default Login;
