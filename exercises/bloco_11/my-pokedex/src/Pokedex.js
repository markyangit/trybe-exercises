import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
    render() {
        return(
        <article className={"pokedex"}>
            { pokemons.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} />) }
        </article>
        )
    }
}

export default Pokedex;