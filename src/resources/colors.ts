import { indexableObject } from "../entities/indexableObject";

const TYPE_COLORS: indexableObject = {
    'fire': '#fd7d24',
    'grass': '#9bcc50',
    'poison': '#b97fc9',
    'flying': '#bdb9b8',
    'water': '#4592c4',
    'bug': '#729f3f',
    'normal': '#a4acaf',
    'electric': '#eed535',
    'ground': '#ab9842',
    'fairy': '#fdb9e9',
    'psychic': '#f366b9',
    'fighting': '#d56723',
    'rock': '#a38c21',
    'steel': '#9eb7b8',
    'ice': '#51c4e7',
    'ghost': '#7b62a3',
    'dragon': '#f16e57',
    'dark': '#707070'
}

const STAT_COLORS: indexableObject = {
    "hp": "#FF4136",
    "attack": "#FF851B",
    "defense": "#2ECC40",
    "special-attack": " #0074D9",
    "special-defense": "#B10DC9",
    "speed": "#FFDC00"
}

export { STAT_COLORS, TYPE_COLORS };
