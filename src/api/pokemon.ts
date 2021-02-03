const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export async function loadPokemonByName(name: string) {
    if(!name)
        throw new Error('Provided falsy value to loadPokemonByName');
    return (await fetch(`${BASE_URL}${name}`)).json();
}

export async function loadPokemonlist() {
    return (await fetch(`${BASE_URL}?offset=0&limit=2000`)).json();
}

export async function fetchPokemonByName(name: string) {
    return (await fetch(`${BASE_URL}${name}`)).json();
}
