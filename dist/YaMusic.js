var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    getTrack(track_id) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
export { YaMusic, API_URL, HANDLERS_URL };
