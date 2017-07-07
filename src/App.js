import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: ''
      // name: '',
      // picture: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // let id = this.state.id
    // fetch(`/api/v1/bars/${id}`)

    // let randomId = Math.floor(Math.random() * 802)+1
    let randomId = Math.floor(Math.random() * 151)+1
    fetch(`http://pokeapi.co/api/v2/pokemon-form/${randomId}`)
    .then(response => response.json())
    .then(body => {
      console.log(body)
      this.setState({
        pokemon: body
        // name: body.name,
        // picture: body.sprites.back_default
      })
    })
  }

  handleClick(event) {
    // let randomId = Math.floor(Math.random() * 802)+1
    let randomId = Math.floor(Math.random() * 151)+1
    fetch(`http://pokeapi.co/api/v2/pokemon-form/${randomId}`)
    .then(response => response.json())
    .then(body => {
      console.log(body)
      this.setState({
        pokemon: body
      })
    })
    .then()
  }

  render() {

    let picture;
    let name;
    if (
      this.state.pokemon.sprites !== undefined &&
      this.state.pokemon.name !== undefined
    ) {
      picture = this.state.pokemon.sprites.back_default
      name = this.state.pokemon.name
    } else {
      picture = ''
      name = ''
    }


    return (
      <div className="row">
        <div className="small-6 small-centered columns text-center">
          <h1>Pokébutt!</h1>
          <img src={picture} alt=''/>
          <h3>{name}</h3>
          <button className="button" onClick={this.handleClick}>Get a Random Pokebutt</button>
        </div>
      </div>
    );
  }
}

export default App;
