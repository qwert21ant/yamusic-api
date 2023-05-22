class Album {
    constructor(obj) {
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
Album.fields = ["id", "title", "available", "genre", "coverUri"];
export { Album };
