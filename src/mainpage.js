import { useState } from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

export const Main = () => {
    const pokemonName = sessionStorage.getItem("starter");
    return(
        <h1>{pokemonName.species}</h1>
    );
}
