import React from 'react';
import axios from 'axios';
import classNames from 'classnames';

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      imageUrl: '',
      battlesFought: 0,
      fainted: false
    };
  }

  componentWillMount() {
    const baseUrl = 'http://pokeapi.co';

    axios.get(`${baseUrl}/api/v1/sprite/${this.props.pokemon.spriteId}`)
    .then(imageResponse => {
      this.setState({ imageUrl: baseUrl + imageResponse.data.image });

      axios.get(baseUrl + imageResponse.data.pokemon.resource_uri)
      .then(pokemonResponse => {
        this.setState({ pokemon: pokemonResponse.data });
      });
    });
  }

  onClick(e) {
    e.preventDefault();

    this.props.selectPokemon(this.props.pokemon);
  }

  render() {
    let classes = classNames('pokemon-card ui card', { active: this.props.pokemon.isSelected });

    return (
      <div className={classes} onClick={this.onClick.bind(this)}>
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