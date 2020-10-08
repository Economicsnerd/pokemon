import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

//  Code logic : padToThree, takes a number; if this one is bigger than 999 we return it (nothing happens)
// If not we add two 00 and slice the last three digits. As in keep only the last three
// Ex : if number is 23. We add 0023. Slice 023. Dispose of the extra 0. This way we always have three digits only.
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div className="Pokecard-data"> Type: {this.props.type}</div>
        <div className="Pokecard-data">Base Experience: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
