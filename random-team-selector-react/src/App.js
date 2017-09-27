import React, { Component } from 'react';
import './App.css';

import { Header } from './components/Header/';
import { EnterNames } from './components/EnterNames/';
import { TeamColorRed } from './components/TeamColorRed/';
import { TeamColorBlue } from './components/TeamColorBlue/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EnterNames />
        <TeamColorRed />
        <TeamColorBlue />
      </div>
    );
  }
}

export default App;
