import {capitalize, idFromUrl} from "../services/pokemon";

const SearchBarResults = ( { items } : { items: { name: string, url: string }[] } ) => {

    function mapSearchResults(item: {name: string, url:string}, i: number) {
        idFromUrl(item.url);
        return <li key={i}> <a href={ process.env.PUBLIC_URL + "/#/pokemon/" + idFromUrl(item.url)}> { capitalize(item.name) } </a></li>
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
