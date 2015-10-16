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

    this.props.selectPokemon(this.props.pokemon, this.state.pokemon);
  }

  render() {
    let classes = classNames('pokemon-card card text-center', { active: this.props.pokemon.isSelected });

    return (
      <div className={classes} onClick={this.onClick.bind(this)}>
        <img className="card-img-top" src={this.state.imageUrl}/>
        <div className="card-block">
          <div className="card-title">{this.state.pokemon.name}</div>
        </div>
      </div>
    )
  }
}

export default PokemonCard;