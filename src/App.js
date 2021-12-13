import React, {useStart} from 'react';
import './App.css';
import { Start } from '../src/Componets/StartScreen';
import { Main } from '../src/Componets/MainPage';
//import { Routes, Route } from 'react-router-dom';
import { AppContext } from '../src/Componets/AppContext';
import { Party } from './Componets/Party';


function App() {
  return (
    <AppContext.Provider>
      <Start />
      <table className='table'>
        <tr>
          <td>
            <Party></Party>
          </td>
          <td>
            <Party></Party>
          </td>
          <td>
            <Party></Party>
          </td>
        </tr>
        <tr>
        <td>
            <Party></Party>
          </td>
          <td>
            <Party></Party>
          </td>
          <td>
            <Party></Party>
          </td>
        </tr>
      </table>
    </AppContext.Provider>
  );
}

export default App;
