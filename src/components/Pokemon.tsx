import { useParams } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { TPokemon } from "../entities/TPokemon";
import {getPokemonById} from "../services/pokemon";

const Pokemon = () => {
    const { id } = useParams<{ id: string }>();
    let [pokemonData, setPokemonData] :
        [ TPokemon | undefined , Dispatch<SetStateAction<any>> ] = useState(undefined );


    useEffect( () => {
        ( async () => {
            setPokemonData( await getPokemonById(Number(id)) );
        })()
    }, [])

    return (
        <div className="pokemonContainer">
            { pokemonData ?  <PokemonCard data={pokemonData} /> : <></> }
        </div>
    )
}

export { Pokemon };
