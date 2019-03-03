import React, { Component } from 'react';
import Pokdetails from './pokdetails/pokdetails.jsx'

import './pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex row">
        <Pokdetails/>
      </div>
    );
  }
}

export default Pokedex;