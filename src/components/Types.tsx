import {Type} from "../entities/TPokemon";
import {capitalize} from "../services/pokemon";

const Types = ( {types} : { types: Type[] } ) => {

    function mapType(type: Type, i: number) {
        return <span className="type" style={
            {
                backgroundColor: type.color,
                color: "white",
                borderRadius: "15px",
                paddingLeft: "5px",
                paddingRight: "5px",
                marginLeft: "5px"
            }} key={i}> {capitalize(type.name)} </span>;
    }

    return (
        <h2>
            Types: { types.map(mapType) }
        </h2>
    )
}

export { Types };
