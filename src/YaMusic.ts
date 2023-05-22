import axios from "axios";
import { Track } from "./Track.js";

const API_URL = "https://music.yandex.ru/api/v2.1/";
const HANDLERS_URL = "https://music.yandex.ru/handlers/";

const required_headers = {
    "User-Agent": "nodejs yamusic-api",
    "Accept": "application/json, */*",
    "Accept-Encoding": "gzip, deflate, br"
};

/**
 * Main class
 */
class YaMusic {
    /**
     * OAuth token
     */
    oauth_token?: string;
    

    async getTrack(track_id: string): Promise<Track> {
        return new Promise((resolve) => {
            axios.get(HANDLERS_URL + "track.jsx", {
                params: {
                    track: track_id
                }
            }).then((res) => {
                console.log(res.data);
                resolve(new Track(res.data.track));
            });
        });
    }
}

export { YaMusic, API_URL, HANDLERS_URL };