var Serie = /** @class */ (function () {
    function Serie(numero, name, channel, seasons, description, website, image) {
        this.name = name;
        this.seasons = seasons;
        this.channel = channel;
        this.description = description;
        this.website = website;
        this.image = image;
        this.numero = numero;
    }
    return Serie;
}());
export { Serie };
