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

  onBattleClick(e) {
    e.preventDefault();

    let currentPokemon = this.state.currentPokemon;

    if (currentPokemon) {
      console.log('battling with', currentPokemon.name);
    } else {
      // error handling
    }
  }

  render() {
    let selectPokemon = this.selectPokemon.bind(this);

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <PokemonList selectPokemon={selectPokemon} />
          </div>

          <div className="col-lg-2">
            <button className="btn btn-secondary" onClick={this.onBattleClick.bind(this)}>Battle</button>
          </div>

          <div className="col-lg-5">
            <ChallengerList />
          </div>
        </div>
      </div>
    )
  }
};

ReactDom.render(<App/>, document.querySelector('#app'));