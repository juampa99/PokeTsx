import {Stat} from "../entities/TPokemon";

const StatBar = ({ width, stat }: {width: number, stat: Stat }) => {

    let style: any = {};

    if( width && width !== 0 ) style.width = width  * stat.power + "px";

    style.backgroundColor = stat.color;

    return (
        <div className="statBar" style={style} > <div> {stat.power} </div> </div>
    )
}

export {StatBar};
