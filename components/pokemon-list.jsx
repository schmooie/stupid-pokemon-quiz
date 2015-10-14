import React from 'react';
import PokemonCard from './pokemon-card.jsx';

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = { spriteIds: [] };
  }

  componentWillMount() {
    this.setState({ spriteIds: makeRandomArr(6) });
  }

  render() {
    let pokemonCards = null;

    if (this.state.spriteIds.length) {
      pokemonCards = this.state.spriteIds.map((spriteId, index) => {
        return (
          <PokemonCard key={index} spriteId={spriteId} />
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