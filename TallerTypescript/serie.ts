export class Serie {
    numero:number;
    name: string;
    seasons: number;
    channel: string;
    description: string;
    website: string;
    image: string;
  
    constructor( numero: number,name: string, channel: string, seasons: number,description: string, website: string,image: string) {
      this.name = name;
      this.seasons = seasons;
      this.channel = channel;
      this.description = description;
      this.website = website;
      this.image = image;
      this.numero = numero;
    }
  }