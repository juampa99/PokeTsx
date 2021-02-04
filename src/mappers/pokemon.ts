import {IPokemon} from "pokeapi-typescript";
import {TPokemon} from "../entities/TPokemon";

function fromObjectToEntity(pokemonData: IPokemon) {
    const name = pokemonData.name.substr(0, 1)?.toUpperCase() + pokemonData.name.substr(1);

    // Typing is wrong, the property 'other' exists for most pokemon
    // TODO: Use custom typing for this
    // @ts-ignore
    const imageUrl = pokemonData.sprites.other['official-artwork'].front_default ?? pokemonData.sprites.front_default;

    const number = pokemonData.order;

    const height = pokemonData.height;
    const weight = pokemonData.weight;

    const stats: any = pokemonData.stats.map( stat=> {
        return {
            name: stat.stat.name,
            power: stat.base_stat
        }
    });

    const types = pokemonData.types.map( type => type.type.name );

    return (new TPokemon({
        number,
        name,
        stats,
        height,
        weight,
        imageUrl,
        types
    }))
}

export { fromObjectToEntity };
