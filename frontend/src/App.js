import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import User from './components/User';

class App extends Component {
  render() {
    return <div flex>
      <Route exact path="/" render={() => <Home/>} />
      <Route exact path="/user" render={() => <User/>} />
    </div>;
  }
}

export default App;
