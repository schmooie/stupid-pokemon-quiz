import React from 'react';
import axios from 'axios';

class PokemonList extends React.Component {
  constructor() {
    super();
    this.state = { pokemon: {} };
  }

  componentWillMount() {
    this.getRandomPokemon(6);
  }

  render() {
    let pokemon = null;
    let pokemonIds = Object.keys(this.state.pokemon);

    if (pokemonIds.length) {
      // debugger;
      pokemon = pokemonIds.map(id => {
        return <li key={id}>{this.state.pokemon[id].name}</li>;
      });
    }

    return (
      <ul>{pokemon}</ul>
    )
  }

  getRandomPokemon(num) {
    console.log('fetch');
    let arrIds = makeRandomArr(num);
    let pokemonRequests = arrIds.map(id => this.fetchPokemon(id));

    axios.all(pokemonRequests).then(pokemon => {
      let pokemonObj = {};

      pokemon.forEach(monster => {
        pokemonObj[monster.data.national_id] = monster.data;
      });

      this.setState({ pokemon: pokemonObj });
    });
  }

  fetchPokemon(id) {
    const url = 'http://pokeapi.co/api/v1/pokemon/'

    return axios.get(url + id);
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