import React from 'react';
import ReactDom from 'react-dom';
import PokemonList from './components/pokemon-list.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <PokemonList/>
      </div>
    )
  }
};

ReactDom.render(<App/>, document.querySelector('#app'));