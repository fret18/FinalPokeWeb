import React, {useStart} from 'react';
import { Start } from '../src/Componets/StartScreen';
import { Main } from '../src/Componets/MainPage';
//import { Routes, Route } from 'react-router-dom';
import { AppContext } from '../src/Componets/AppContext';

function App() {
  return (
    <AppContext.Provider>
      <Start>

      </Start>
    </AppContext.Provider>
  );
}

export default App;
