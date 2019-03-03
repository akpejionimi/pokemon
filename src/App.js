import React, { Component } from 'react';
import Pokedex from './component/pokedex/pokedex.jsx'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App ">
        <h1 className="animated swing delay-4s">POKEMONS</h1>
        <Pokedex/>
      </div>
    );
  }
}

export default App;
