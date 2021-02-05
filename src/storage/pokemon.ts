import {TPokemon} from "../entities/TPokemon";

function loadPokemonById(id: number): TPokemon {
    if(!id) {
        throw new Error('Passed invalid id');
    }

    const pokemon = localStorage.getItem(String(id));

    if(!pokemon) {
        throw new Error('Pokemon with id '+ id + ' not found');
    }

    return JSON.parse(pokemon);
}

function storePokemon(pokemon: TPokemon) {
    if(!pokemon) {
        throw new Error('Passed invalid pokemon');
    }

    localStorage.setItem(String(pokemon.id), JSON.stringify(pokemon) );
}

function loadPokemonList() {
    let pokemonList = localStorage.getItem('pokemonList');

    if(!pokemonList) {
        throw new Error('Couldnt load pokemon list from local storage')
    }

    return JSON.parse(pokemonList);
}

export { loadPokemonById, storePokemon, loadPokemonList };
