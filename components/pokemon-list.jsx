import React from 'react';
import PokemonCard from './pokemon-card.jsx';

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = { pokemonIds: [] };
  }

  componentWillMount() {
    this.setState({ pokemonIds: makeRandomArr(6) });
  }

  render() {
    let pokemonCards = null;

    if (this.state.pokemonIds.length) {
      pokemonCards = this.state.pokemonIds.map((pokemonId, index) => {
        return (
          <div className="column" key={index}>
            <PokemonCard pokemonId={pokemonId} />
          </div>
        )
      });
    }

    return (
      <div className="ui three column grid">
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