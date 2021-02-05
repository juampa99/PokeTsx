import {SearchBar} from "./SearchBar";
import {useEffect, useState} from "react";
import {fetchPokemonlist} from "../api/pokemon";
import logo from "../logo.png";
import {getPokemonList} from "../services/pokemon";

const HomePage = () => {
    const [pokemonList, setPokemonList] = useState([]);

    // Loads pokemon list
    useEffect( () => {
        ( async () => {
            setPokemonList( await getPokemonList() )
        })()
    }, []);

    return (
        <>
            <div className="searchBarAndLogo">
                <img className="logo" src={logo} alt="PokeTsx Logo" />
                <SearchBar list={pokemonList} />
            </div>
        </>
    )
}

export {HomePage};
