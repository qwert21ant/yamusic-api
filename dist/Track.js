import { Album } from "./Album.js";
class Track {
    constructor(obj) {
        if (!Track.fields.every(field => obj.hasOwnProperty(field)))
            throw new Error("Wrong object");
        this.id = Number(obj.id);
        this.title = obj.title;
        this.available = obj.available;
        this.duration = obj.durationMs;
        this.coverUri = obj.coverUri;
        this.albums = Array.from(Array(obj.albums.length), (v, k) => new Album(obj.albums[k]));
    }
}
Track.fields = ["id", "title", "available", "durationMs", "coverUri"];
export { Track };
