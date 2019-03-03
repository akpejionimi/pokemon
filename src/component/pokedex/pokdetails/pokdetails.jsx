import React, { Component } from "react";
import './pokdetails.css'

class Pokedetails extends Component {
  state = {
    pokemon: [],
  };

  componentWillMount() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then(response => response.json())
      .then(data => {
        const pokeList = data.pokemon;
        this.setState({
          pokemon: pokeList
        });
      })
      .catch(err => console.log("Error: " + err));
  }

  render() {
    return (
      <>
        {this.state.pokemon.map(pokemon => (
          <div className="wrapper">
        <div className="card grow bg-light-blue animated slideInRight delay-2s"
            key={pokemon.id}>
            <p>{pokemon.name}</p>
            <img src={pokemon.img} alt="Pokedex" />
          </div>
          </div>
        ))}
        />
      </>
    );
  }
}

export default Pokedetails;
