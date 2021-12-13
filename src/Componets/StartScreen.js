import logo from '././img/Pokemon_logo.svg.png';
import '../App';
import './StartScreen.css';
import { useState } from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
//import Async from "async";

const useStyles = makeStyles((theme) => ({
  startButton: {
    backgroundColor: "#2971B8",
    color: "#FFCC01",
    marginTop: "10rem",
    position: "absolute",
    left: "50%",
    width: "5rem",
    height: "4rem",
      '&:hover': { backgroundColor: "#075096"},
  },
  logo: {
    width: "269px",
    height: "99px"
  },

}))
export const Start = () => {
  const classes = useStyles()
  function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type1: "",
  });
  const randomPokemon = () => {
    setPokemonName(randomNumber(1, 899))
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
        if (response.data) {
           setPokemon({
             species: response.data.name,
             img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonName}.png`
           /* hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            type1: response.data.types[0].type.name, */
          });
          sessionStorage.setItem("starter", pokemonName);
        }
      }
    );
    
  };
  return (
    <div className="App">
      <header className="App-header">
        <img style={{ display: "block", margin: "auto"}} src={logo} className={classes.logo} alt="logo" />
        <Button className="buttonContainer" onClick={() => {
        setPokemonName();
        randomPokemon();
        }} className={classes.startButton}><p style={{ textAlign: "text-center" }} >START</p></Button>
      </header>
      <div className='container'>
        <h1>{pokemon.species}</h1>
        <img alt={pokemon.species} src={pokemon.img}></img>
      </div>
    </div>
  );
}