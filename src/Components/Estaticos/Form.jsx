import React, { Component } from 'react'
// import Button from '../Dimanicos/Button';
import './Form.css'
import Pokemon from '../../Imagenes/pokemonlogo.png'
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: '',
            imagen: '',

        };
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    updateInput(event) {
        this.setState({ pokemon: event.target.value })
    }
    handleSubmit(e) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}/`)
            .then(async (response) => {
                await response.json()
                    .then(async (pokemon) => {
                        this.setState({
                            pokemon: pokemon.name,
                            imagen: pokemon.sprites.front_default
                        })
                    })
            })
    }


    render() {
        return (
            <div className="grid">
                <div className="card">
                    <img src={Pokemon} alt="" style={{width: '100%'}}/>
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="pokemon" ref="pokemon" placeholder="Ingresa el nombre del pokemon...." onChange={this.updateInput}/>
                        </form>
                        <button className="button button3" onClick={this.handleSubmit}>Enviar</button>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <h2>Resultado</h2>
                        <img src={this.state.imagen} alt="" style={{width: '100%'}}/>
                        <h4>{this.state.pokemon}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form