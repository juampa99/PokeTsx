import {capitalize, filterPokemonList, getPokemonById, idFromUrl} from "../pokemon";

test( 'Should return an empty array', () => {
     let result = filterPokemonList('thispokemondoesntexist', []);

     expect(result).toEqual([]);

} )

test( 'Should return one match', () => {
    // @ts-ignore
    let result = filterPokemonList('testpokemon', [{name: 'testpokemon'}]);

    expect(result).toEqual([{name: 'testpokemon'}])
} )

test( 'Should capitalize word', () => {
    let lowercaseWord = 'asd';
    let capitalizedWord = capitalize(lowercaseWord);

    expect(capitalizedWord).toEqual("Asd");
})

test('Should extract id from url', () => {
    let url = 'https://pokeapi.co/api/v2/pokemon/13/';
    let id = idFromUrl(url);

    expect(id).toEqual(13);
})
