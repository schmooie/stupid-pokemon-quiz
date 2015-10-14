import React from 'react';
import axios from 'axios';

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = { battlesFought: 0, fainted: false, pokemon: {}, imageUrl: '' };
  }

  componentWillMount() {
    const baseUrl = 'http://pokeapi.co';

    axios.get(`${baseUrl}/api/v1/sprite/${this.props.spriteId}`)
    .then(imageResponse => {
      this.setState({ imageUrl: baseUrl + imageResponse.data.image });

      axios.get(baseUrl + imageResponse.data.pokemon.resource_uri)
      .then(pokemonResponse => {
        this.setState({ pokemon: pokemonResponse.data });
      });
    });
  }

  render() {
    return (
      <div className="ui card">
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

export default PokemonCard;