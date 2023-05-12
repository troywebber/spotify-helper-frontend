import { SpotifyWebApi } from "spotify-web-api-node";

export default async (req, res) => {
    if (req.method === "POST") {
        const code = req.body.code;
        const spotifyApi = new SpotifyWebApi({
            redirectUri: process.env.REDIRECT_URI,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        });

        try {
            const data = await spotifyApi.authorizationCodeGrant(code);
            res.status(200).json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            });
        } catch (err) {
            res.status(400).send();
        }
    } else {
        res.status(405).send();
    }
};
