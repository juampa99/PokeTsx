import {capitalize} from "../services/pokemon";

const SearchBarResults = ( { items } : { items: { name: string, url: string }[] } ) => {

    function mapSearchResults(item: {name: string, url:string}, i: number) {
        return <li key={i}> <a href={"/pokemon/" + item.name }> { capitalize(item.name) } </a></li>
    }

    return (
        <div className="search_bar_dropdown">
            <ul>
                { items.map(mapSearchResults) }
            </ul>
        </div>
    )
}

export {SearchBarResults};
