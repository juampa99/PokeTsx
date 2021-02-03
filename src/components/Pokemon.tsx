import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import { fetchPokemonByName } from "../api/pokemon";
import { PokemonCard } from "./PokemonCard";

const Pokemon = () => {
    const { name } = useParams<{ name: string }>();
    let [pokemonData, setPokemonData] = useState(undefined ) ;

    useEffect( () => {
        ( async () => {
            setPokemonData( await fetchPokemonByName(name));
        })()
    }, [])

    return (
        <>
            { pokemonData ?  <PokemonCard data={pokemonData} /> : <></> }
        </>
    )
}

export { Pokemon };
