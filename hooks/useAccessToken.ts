import { useState, useEffect } from "react";
import cookie from "cookie";

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    setAccessToken(cookies.access_token);
  }, []);

  return accessToken;
};

export default useAccessToken;
