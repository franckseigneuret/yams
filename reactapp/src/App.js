import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Game from './Game'
import './App.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Game} />
        <Route path="/grid/:number" component={Game} />
      </Switch>
    </Router>
  );

}

export default App;
