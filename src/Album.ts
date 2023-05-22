import { Track, TrackObj } from "./Track.js";

export interface AlbumObj {
    id: string;
    title: string;
    available: boolean;
    genre: string;
    coverUri: string;

    volumes: TrackObj[][];
}

export class Album {
    id: number;
    title: string;
    available: boolean;
    genre: string;
    coverUri: string;

    volumes: Track[][];

    private static fields = ["id", "title", "available", "genre", "coverUri"];

    constructor(obj: AlbumObj) {
        if (!Album.fields.every(field => obj.hasOwnProperty(field)))
            throw new Error("Wrong object");

        this.id = Number(obj.id);
        this.title = obj.title;
        this.available = obj.available;
        this.genre = obj.genre;
        this.coverUri = obj.coverUri;

        this.volumes = [];
    }
}