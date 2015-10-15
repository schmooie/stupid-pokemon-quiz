import React from 'react';
import ReactDom from 'react-dom';
import PokemonList from './components/pokemon-list.jsx';
import ChallengerList from './components/challenger-list.jsx';
import './styles/app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentPokemon: null };
  }

  selectPokemon(pokemon) {
    this.setState({ currentPokemon: pokemon });
  }

  render() {
    let selectPokemon = this.selectPokemon.bind(this);

    return (
      <div className="ui padded grid">
        <div className="two column row">
          <div className="column">
            <PokemonList selectPokemon={selectPokemon} />
          </div>
          <div className="column">
            <ChallengerList />
          </div>
        </div>
      </div>
    )
  }
};

ReactDom.render(<App/>, document.querySelector('#app'));