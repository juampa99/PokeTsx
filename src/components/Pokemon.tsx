import { useParams } from "react-router-dom";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import { fetchPokemonById } from "../api/pokemon";
import { PokemonCard } from "./PokemonCard";
import {fromObjectToEntity} from "../mappers/pokemon";
import {TPokemon} from "../entities/TPokemon";

const Pokemon = () => {
    const { id } = useParams<{ id: string }>();
    let [pokemonData, setPokemonData] :
        [ TPokemon | undefined , Dispatch<SetStateAction<any>> ] = useState(undefined );


    useEffect( () => {
        ( async () => {
            const rawPokeData = await fetchPokemonById(Number(id));
            setPokemonData( fromObjectToEntity(rawPokeData) );

        })()
    }, [])

    return (
        <div className="pokemonContainer">
            { pokemonData ?  <PokemonCard data={pokemonData} /> : <></> }
        </div>
    )
}

export { Pokemon };
