// components/Login.js

import React from 'react';

const Login = () => {
  const handleClick = () => {
    window.location.href = '/api/login';
  };

  return (
    <button onClick={handleClick}>
      Login with Spotify
    </button>
  );
};

export default Login;