import { Artist, ArtistObj } from "./Artist.js";
import { Album, AlbumObj } from "./Album.js";

export interface TrackObj {
    id: string;
    title: string;
    available: boolean;
    durationMs: number;
    coverUri: string;

    albums: AlbumObj[];
    artists: ArtistObj[];
}

export class Track {
    id: number;
    title: string;
    available: boolean;
    duration: number;
    coverUri: string;

    albums?: Album[];
    artists?: Artist[];
    otherVersions?: Track[];

    private static fields = ["id", "title", "available", "durationMs", "coverUri"];
    
    constructor(obj: TrackObj) {
        if (!Track.fields.every(field => obj.hasOwnProperty(field)))
            throw new Error("Wrong object");

        this.id = Number(obj.id);
        this.title = obj.title;
        this.available = obj.available;
        this.duration = obj.durationMs;
        this.coverUri = obj.coverUri; 

        this.albums = Array.from(Array<Album>(obj.albums.length), (v, k) => new Album(obj.albums[k]));
    }
}