import React, {useStart} from 'react';
import { Start } from './startscreen';
import { Main } from './mainpage';
import { Route, Routes, Switch, Redirect } from "react-router-dom";
import { AppContect, AppContext } from './appContext';

const App = () => {
  return  <AppContext.Provider>
    <Routes>
      <Route path="/" exact component={Start}></Route>
    </Routes>
    </AppContext.Provider>
}

export default App;