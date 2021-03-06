import { IPokemon } from "pokeapi-typescript";

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export async function fetchPokemonlist() {
    return (await fetch(`${BASE_URL}?offset=0&limit=2000`)).json();
}

export async function fetchPokemonByName(name: string): Promise<IPokemon> {
    return (await fetch(`${BASE_URL}${name}`)).json();
}

export async function fetchPokemonById(id: number): Promise<IPokemon> {
    return (await fetch(`${BASE_URL}${id}`)).json();
}
