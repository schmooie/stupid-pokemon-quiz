import React from 'react';
import axios from 'axios';

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = { battlesFought: 0, fainted: false, pokemon: {} };
  }

  componentWillMount() {
    const baseUrl = 'http://pokeapi.co';
    let pokemonPromise =  axios.get(`${baseUrl}/api/v1/pokemon/${this.props.pokemonId}`);
    let imagePromise = axios.get(`${baseUrl}/api/v1/sprite/${this.props.pokemonId}`);

    axios.all([pokemonPromise, imagePromise])
    .then(axios.spread((pokemonResponse, imageResponse) => {
      this.setState({
        pokemon: pokemonResponse.data,
        imageUrl: baseUrl + imageResponse.data.image
      })
    }));
  }

  render() {
    if (!Object.keys(this.state.pokemon).length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="fluid ui card">
          <div className="image">
            <img src={this.state.imageUrl}/>
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