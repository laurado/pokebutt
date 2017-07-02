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

    // let randomId = (Math.random() * 811)
    let randomId = Math.floor(Math.random() * 811)+1
    fetch(`http://pokeapi.co/api/v2/pokemon-form/${randomId}`)
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
    // console.log(this.state.pokemon.name)
    // console.log(this.state.pokemon.sprites.back_default) //sprites is undefined here



    return (
      <div className="row">
        <div className="small-6 small-centered columns text-center">
          <h1>Pokébutt!</h1>
          {/* <img src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG" alt=''/> */}
          <img src={this.state.picture} alt=''/>
          <h3>{this.state.name}</h3>
          <button className="button">Get a Random Pokebutt</button>
        </div>
      </div>
    );
  }
}

export default App;
