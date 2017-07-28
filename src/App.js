import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      picture: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // let randomId = Math.floor(Math.random() * 802)+1
    let randomId = Math.floor(Math.random() * 151)+1
    fetch(`http://pokeapi.co/api/v2/pokemon-form/${randomId}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        name: body.name,
        picture: body.sprites.back_default
      })
    })
  }

  handleClick(event) {
    // let randomId = Math.floor(Math.random() * 802)+1
    let randomId = Math.floor(Math.random() * 151)+1
    fetch(`http://pokeapi.co/api/v2/pokemon-form/${randomId}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        name: body.name,
        picture: body.sprites.back_default
      })
    })
    .then()
  }

  render() {
    let name;
    let picture;
    if (this.state.name !== undefined && this.state.picture !== undefined) {
      name = this.state.name
      picture = this.state.picture
    } else {
      name = 'Welcome to Pokébutt!'
      picture = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'
    }

    return (
      <div className="row">
        <div className="small-12 large-6 small-centered columns text-center main">
          <h1>Pokébutt!</h1>
          <img src={picture} alt={name}/>
          <h3>{name} butt</h3>
          <button className="button" onClick={this.handleClick}>Get a Random Pokebutt</button>
        </div>
      </div>
    );
  }
}

export default App;
