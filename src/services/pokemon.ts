import {PokemonItem} from "../entities/PokemonItem";


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
    return str.substr(0, 1).toUpperCase() + str.substr(1);
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

export { filterPokemonList, capitalize, idFromUrl, getStatBarWidthFraction };
