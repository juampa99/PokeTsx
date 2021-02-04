import {Stat} from "../entities/TPokemon";
import {capitalize, getStatBarWidthFraction} from "../services/pokemon";
import {useEffect, useState} from "react";
import {StatBar} from "./StatBar";

const PokemonStats = ({stats} : {stats: Stat[] }) => {

    let [width, setWidth] = useState(0);

    useEffect( () => {
        setWidth(getStatBarWidthFraction());
    }, [])

    return (
        <>
            {stats.map((stat : Stat, i : number) => {
                return (
                    <h3 key={i} > {capitalize(stat.name)}
                    <StatBar width={width} stat={stat} key={i}/>
                </h3>
                )
            })}
        </>
    )
}

export {PokemonStats};
