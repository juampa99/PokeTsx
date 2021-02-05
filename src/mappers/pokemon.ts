import {IPokemon} from "pokeapi-typescript";
import {TPokemon, Type} from "../entities/TPokemon";
import {STAT_COLORS, TYPE_COLORS} from "../resources/colors";

function fromObjectToEntity(pokemonData: IPokemon) {

    const id = pokemonData.id;
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
            power: stat.base_stat,
            color: STAT_COLORS[stat.stat.name]
        }
    });

    const types = pokemonData.types.map( (type) => {
        return {
             name: type.type.name,
             color: TYPE_COLORS[type.type.name]
        }
    } );

    return (new TPokemon({
        id,
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
