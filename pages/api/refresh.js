import { SpotifyWebApi } from "spotify-web-api-node";

export default async (req, res) => {
    if (req.method === "POST") {
        const refreshToken = req.body.refreshToken;
        const spotifyApi = new SpotifyWebApi({
            redirectUri: process.env.REDIRECT_URI,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken,
        });

        try {
            const data = await spotifyApi.refreshAccessToken();
            res.status(200).json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
            });
        } catch (err) {
            console.log(err);
            res.status(400).send();
        }
    } else {
        res.status(405).send();
    }
};
