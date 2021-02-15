import { PokemonStats } from "./PokemonStats";
import { TPokemon } from "../entities/TPokemon";
import { Types } from "./Types";

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
            <h1 className="pokemon-title" >
                <div className="pokemon-order"> { pokemonData.number } </div>
                <div className="pokemon-name"> { pokemonData.name } </div>
            </h1>

            <hr/>

            <img src={pokemonData.imageUrl } alt="Pokemon image" />

            <div>
                <Types types={pokemonData.types} />

                <div>
                    <h2>Height: {pokemonData.height}kg</h2>
                    <h2>Weight: {pokemonData.weight}m</h2>
                </div>

            </div>

            <PokemonStats stats={pokemonData.stats} />

        </div>

    )
}

export { PokemonCard };
