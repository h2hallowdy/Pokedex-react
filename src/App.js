import React, { Component } from 'react';
import PokeList from './components/PokeList';
import DetailView from './components/DetailView';

import Pokemon from './Pokemon';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: {}
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        console.log(pokemon);
        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
