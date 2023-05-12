// api/login.js

import axios from 'axios';

export default async (req, res) => {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUri = encodeURIComponent(`${process.env.BASE_URL}/api/callback`);
    const scopes = encodeURIComponent('user-read-private user-read-email');
    const responseType = 'code';

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scopes}`;

    res.redirect(authUrl);
};
