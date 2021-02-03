import {IPokemon} from "pokeapi-typescript";

const PokemonCard = ( { data }: { data: IPokemon | undefined } ) => {

    let pokemonData : IPokemon;

    if(data) {
        pokemonData = data;
    } else {
        return <></>;
    }

    let name = pokemonData.name.substr(0, 1)?.toUpperCase() + pokemonData.name.substr(1);
    // Typing is wrong, the property 'other' exists for most pokemon
    // TODO: Use custom typing for this
    // @ts-ignore
    let link = pokemonData.sprites.other ?  pokemonData.sprites.other['official-artwork'].front_default : pokemonData.sprites.front_default;
    let number = pokemonData.order;

    return (
        <div className="pokemon_card" >
            <h1> { number + " " + name } </h1>
            <img src={link} alt="Pokemon image" />
        </div>

    )
}

export { PokemonCard };
