export type Stat = {
    name: string,
    power: number,
    color: string
}

export type Type = {
    name: string,
    color: string
}

export class TPokemon {

    id : number;
    number : number;
    name : string;
    stats : Array<Stat>;
    height: number;
    weight: number;
    imageUrl: string;
    types: Array<Type>;

    constructor(
        {
            id,
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
            id: number,
            number: number,
            name: string,
            stats: Array<Stat>,
            height: number,
            weight: number,
            imageUrl: string,
            types: Array<Type>
    }) {
        this.id = id;
        this.number = number;
        this.name = name;
        this.stats = stats;
        this.height = height;
        this.weight = weight;
        this.imageUrl = imageUrl;
        this.types = types;
    }
}
