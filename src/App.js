import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: '',
      name: '',
      picture: ''
    }
  }

  componentDidMount() {
    // let id = this.state.id
    // fetch(`/api/v1/bars/${id}`)
    fetch('http://pokeapi.co/api/v2/pokemon-form/1/')
    .then(response => response.json())
    .then(body => {
      console.log(body)
      this.setState({
        name: body.name,
        picture: body.sprites.back_default,
        pokemon: body
      })
    })
  }

  render() {
    console.log(this.state.pokemon.name)
    // console.log(this.state.pokemon.sprites.back_default) //sprites is undefined here

    return (
      <div>
        <h1>Pokebutt!</h1>
        <h3>{this.state.name}</h3>
        <img src={this.state.picture} alt=''/>
        <button>Get a Random Pokebutt</button>
      </div>
    );
  }
}

export default App;
