import express from "express";
import SpotifyApi from "spotify-web-api-node";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const port = parseInt(process.env.PORT as string, 10) | 3001;
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/v1/login", async (req, res) => {
    if (!req.body.code || req.body.code.length <= 0) return;

    const api = new SpotifyApi({
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    });

    try {
        const response = (await api.authorizationCodeGrant(req.body.code)).body;
        return res.json({
            accessToken: response.access_token,
            refreshToken: response.refresh_token,
            expiresIn: response.expires_in,
        });
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
});

app.post("/api/v1/refresh", async (req, res) => {
    const api = new SpotifyApi({
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        refreshToken: req.body.refreshToken,
    });

    try {
        const response = (await api.refreshAccessToken()).body;
        return res.json({
            accessToken: response.access_token,
        });
    } catch (error) {
        console.log(error);
        return res.status(400);
    }
});

app.listen(port, () => {
    console.log(`[server] app listening on port ${port}`);
});
