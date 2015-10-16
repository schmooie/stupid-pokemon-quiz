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
      <div className="ui grid container">
        <div className="row">
          <div className="six wide column">
            <PokemonList selectPokemon={selectPokemon} />
          </div>

          <div className="four wide column"></div>

          <div className="six wide column">
            <ChallengerList />
          </div>
        </div>
      </div>
    )
  }
};

ReactDom.render(<App/>, document.querySelector('#app'));