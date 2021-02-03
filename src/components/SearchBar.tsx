import { ChangeEvent, useState } from "react";
import { SearchBarResults } from "./SearchBarResults";
import { filterPokemonList } from "../services/pokemon";
import { IApiResource } from "pokeapi-typescript/dist/interfaces/Utility/ApiResourceList";
import {PokemonItem} from "../entities/PokemonItem";

const SearchBar = ({list}: { list: Array<PokemonItem> }) => {
    const [ filteredList, setFilteredList ] = useState([]);

    function onType(event: ChangeEvent<HTMLInputElement>) {
        const text = event.target.value;
        const filtered = filterPokemonList(text, list);
        // @ts-ignore
        setFilteredList(filtered);
    }

    return (
        <div className="search_bar">
            <input onChange={onType} type="text" />
            <SearchBarResults items={filteredList} />
        </div>
    )
}

export {SearchBar};
