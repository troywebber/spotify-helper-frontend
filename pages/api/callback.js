// pages/api/callback.js

import axios from 'axios';
import cookie from 'cookie';

export default async (req, res) => {
    const code = req.query.code;


    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUri = process.env.BASE_URL + '/api/callback';

    console.log('code', code);
    console.log('clientId', clientId);
    console.log('clientSecret', clientSecret);
    console.log('redirectUri', redirectUri);



    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
        params: {
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
        },
        headers: {
            Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });


    const { access_token, refresh_token, expires_in } = response.data;

    const cookies = [
        cookie.serialize('access_token', access_token, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/' }),
        cookie.serialize('refresh_token', refresh_token, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/' }),
    ];

    res.setHeader('Set-Cookie', cookies);
    res.redirect('/dashboard');
};

