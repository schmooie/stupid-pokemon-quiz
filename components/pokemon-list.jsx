import React from 'react';
import PokemonCard from './pokemon-card.jsx';

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = { pokemons: [] };
  }

  componentWillMount() {
    let pokemons = makeRandomArr(6).map(spriteId => {
      return { isSelected: false, spriteId };
    });
    this.setState({ pokemons });
  }

  selectPokemon(selectedPokemon) {
    let pokemons = this.state.pokemons.map(pokemon => {
      return {
        spriteId: pokemon.spriteId,
        isSelected: pokemon.spriteId === selectedPokemon.spriteId ? true : false
      };
    });

    this.setState({ pokemons });
    this.props.selectPokemon(selectedPokemon);
  }

  render() {
    let pokemonCards = null;

    if (this.state.pokemons.length) {
      pokemonCards = this.state.pokemons.map((pokemon, index) => {
        return (
          <PokemonCard key={index} pokemon={pokemon} selectPokemon={this.selectPokemon.bind(this)} />
        )
      });
    }

    return (
      <div className="ui grid three columns stackable link cards">
        {pokemonCards}
      </div>
    )
  }
}

function makeRandomArr(num, min = 1, max = 151) {
  let res = [];

  while (res.length < num) {
    let rand = Math.random() * (max - min) + min;
    let found = res.some((n, index, arr) => arr.indexOf(rand) > -1)

    if (!found) {
      res[res.length] = Math.floor(rand);
    }
  }

  return res;
}

export default PokemonList;