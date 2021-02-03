import {SearchBar} from "./SearchBar";
import {useEffect, useState} from "react";
import {loadPokemonlist} from "../api/pokemon";
import logo from "../logo.png";

const HomePage = () => {
    const [pokemonList, setPokemonList] = useState([]);

    // Loads pokemon list
    useEffect( () => {
        ( async () => {
            setPokemonList( ( await loadPokemonlist() ).results );
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
