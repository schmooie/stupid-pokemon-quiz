import React from 'react';
import axios from 'axios';

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = { battlesFought: 0, fainted: false, pokemon: {} };
  }

  componentWillMount() {
    console.log('yo');
    const url = 'http://pokeapi.co/api/v1/pokemon/';

    axios.get(url + this.props.pokemonId).then(response => {
      this.setState({ pokemon: response.data })
    });
  }

  render() {
    if (!Object.keys(this.state.pokemon).length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="fluid ui card">
          <div className="image">
            <img src="http://lorempixel.com/100/100"/>
          </div>
          <div className="content">
            <div className="header">{this.state.pokemon.name}</div>
          </div>
        </div>
      )
    }
  }
}

export default PokemonCard;