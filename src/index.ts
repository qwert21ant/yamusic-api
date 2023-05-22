import { YaMusic } from "./YaMusic.js";

const a = new YaMusic();

(async () => {
    console.log(await a.getTrack("108897433:24083132"));
})();