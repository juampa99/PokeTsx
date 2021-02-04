import {Stat} from "../entities/TPokemon";

const StatBar = ({ width, stat, key }: {width: number, stat: Stat, key: number }) => {

    let style: any = {};

    if( width && width !== 0 ) style.width = width  * stat.power + "px";

    return (
        <div key={key} className="statBar" style={style} > <div> {stat.power} </div> </div>
    )
}

export {StatBar};
