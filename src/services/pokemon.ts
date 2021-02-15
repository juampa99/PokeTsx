import { PokemonItem } from "../entities/PokemonItem";
import {loadPokemonById, loadPokemonList, storePokemon, storePokemonList} from "../storage/pokemon";
import {TPokemon} from "../entities/TPokemon";
import {fetchPokemonById, fetchPokemonlist} from "../api/pokemon";
import {fromObjectToEntity} from "../mappers/pokemon";


function filterPokemonList(filter: string, pokemonList: Array<PokemonItem>): Array<PokemonItem> {

    const regExpText = new RegExp(filter, 'i');
    let filtered : Array<PokemonItem>;

    if(filter !== "" && pokemonList && pokemonList.length > 0) {

        filtered = pokemonList.filter( (item: PokemonItem ) => {
            return item.name.match(regExpText);
        })

        filtered = filtered.slice(0, 3);

    } else {
        filtered = [];
    }

    return filtered;
}

function capitalize(str: string): string {
    return str ? str.substr(0, 1).toUpperCase() + str.substr(1) : str;
}

function idFromUrl(url: string): number {
    const regex = new RegExp("[^pokemon]*$");
    let dirtyId = url.match(regex)?.[0];

    if(!dirtyId)
        return 1;

    return Number(dirtyId.substr(1).slice(0, -1));
}

function getStatBarWidthFraction() {
    return document.getElementsByClassName("statBar")[0]?.getBoundingClientRect().width / 255;
}

async function getPokemonById(id: number) {
    let pokemon: TPokemon;

    try {
        pokemon = loadPokemonById(id);
    }
    catch {
        pokemon = fromObjectToEntity(await fetchPokemonById(id));
        storePokemon(pokemon);
    }

    return pokemon;
}

async function getPokemonList(): Promise<any> {
    let pokemonList;

    try {
        pokemonList = loadPokemonList();
    }
    catch {
        pokemonList = await fetchPokemonlist();
        storePokemonList(pokemonList);
    }

    return pokemonList.results;
}

export { filterPokemonList, capitalize, idFromUrl, getStatBarWidthFraction, getPokemonById, getPokemonList };
