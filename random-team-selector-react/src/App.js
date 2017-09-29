import React, { Component } from 'react';
import './App.css';

import { randomizeTeams } from './services/randomizeHelper';

import { Header } from './components/Header/';
import { Setup } from './components/Setup/';
import { Teams } from './components/Teams/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      oldPlayers: [
        'Michael',
        'Adam',
        'Sam',
        'Graeme',
        'Chris'
      ],
      currentPlayers: [],
      isRandomized: false,
      teams: {
        whites: [],
        colours: []
      }
    };
  }

  handleOnAddPlayer(player) {
    let updatedOldPlayers = this.state.oldPlayers.slice();
    let updatedCurrentPlayers = this.state.currentPlayers.slice();

    // if player isn't in old players array then also add it to that
    if(updatedOldPlayers.indexOf(player) === -1) {
      updatedOldPlayers.push(player) 
    }

    // add player to current players
    updatedCurrentPlayers.push(player);

    this.setState({
      oldPlayers: updatedOldPlayers,
      currentPlayers: updatedCurrentPlayers
    });
  }

  handleOnRemovePlayer(player) {
    let newCurrentPlayers = this.state.currentPlayers.slice();
    const index = newCurrentPlayers.indexOf(player);
    newCurrentPlayers.splice(index, 1);
    this.setState({
      currentPlayers: newCurrentPlayers
    });
  }

  handleOnRandomizeTeams() {
    const newTeams = randomizeTeams(
      this.state.currentPlayers.slice(),
      {...this.state.teams}
    );
    this.setState({
      isRandomized: true,
      teams: newTeams
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Setup
          oldPlayers={this.state.oldPlayers}
          currentPlayers={this.state.currentPlayers}
          onAddPlayer={(player) => this.handleOnAddPlayer(player)}
          onAddOldPlayer={(player) => this.handleOnAddPlayer(player)}
          onRemovePlayer={(player) => this.handleOnRemovePlayer(player)}
          onRandomizeTeams={() => this.handleOnRandomizeTeams()}
          isRandomized={this.state.isRandomized} />
        <Teams
          teams={this.state.teams} />
      </div>
    );
  }
}

export default App;
