import {capitalize} from "../services/pokemon";
import {PokemonStats} from "./PokemonStats";
import {TPokemon} from "../entities/TPokemon";

const PokemonCard = ( { data }: { data: TPokemon | undefined } ) => {

    let pokemonData : TPokemon;

    if(data) {
        pokemonData = data;
    }
    else {
        return <></>;
    }

    return (
        <div className="pokemon_card" >
            <h1> { pokemonData.number + " " + pokemonData.name } </h1>
            <img src={pokemonData.imageUrl } alt="Pokemon image" />

            <div>
                <h2>Types: { pokemonData.types.map( (type: string, i: number) => <span key={i} > {capitalize(type)} </span> ) } </h2>
                <p>
                    <h2>Height: {pokemonData.height}</h2>
                    <h2>Weight: {pokemonData.weight}</h2>
                </p>
            </div>

            <PokemonStats stats={pokemonData.stats} />

        </div>

    )
}

export { PokemonCard };
