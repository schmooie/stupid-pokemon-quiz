import React from 'react';
import PokemonCard from './pokemon-card.jsx';
import { chunkArr, makeRandomArr } from '../utilities.js';

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

  selectPokemon(selectedPokemon, pokemonData) {
    let pokemons = this.state.pokemons.map(pokemon => {
      return {
        spriteId: pokemon.spriteId,
        isSelected: pokemon.spriteId === selectedPokemon.spriteId ? true : false
      };
    });

    this.setState({ pokemons });
    this.props.selectPokemon(pokemonData);
  }

  render() {
    let pokemonCards = null;

    if (this.state.pokemons.length) {
      let pokemonRows = chunkArr(this.state.pokemons, 2);

      pokemonCards = pokemonRows.map((row, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-xs-6">
              <PokemonCard pokemon={row[0]} selectPokemon={this.selectPokemon.bind(this)} />
            </div>
            <div className="col-xs-6">
              <PokemonCard pokemon={row[1]} selectPokemon={this.selectPokemon.bind(this)} />
            </div>
          </div>
        )
      });
    }

    return (
      <div className="pokemon-list">
        {pokemonCards}
      </div>
    )
  }
}

export default PokemonList;