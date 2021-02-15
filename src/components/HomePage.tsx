import {SearchBar} from "./SearchBar";
import React, {useEffect, useState} from "react";
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
