export type Stat = {
    name: string,
    power: number
}

export class TPokemon {

    number : number;
    name : string;
    stats : Array<Stat>;
    height: number;
    weight: number;
    imageUrl: string;
    types: Array<any>;

    constructor(
        {
            number,
            name,
            stats,
            height,
            weight,
            imageUrl,
            types
        }
        :
        {
            number: number,
            name: string,
            stats: Array<Stat>,
            height: number,
            weight: number,
            imageUrl: string,
            types: Array<string>
    }) {
        this.number = number;
        this.name = name;
        this.stats = stats;
        this.height = height;
        this.weight = weight;
        this.imageUrl = imageUrl;
        this.types = types;
    }
}
