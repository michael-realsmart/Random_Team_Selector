import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import { Header } from './components/Header/';
import Setup from './components/Setup/';
import { Teams } from './components/Teams/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Setup />
        <Teams
          teams={this.props.teams} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.teams
  };
}

export default connect(mapStateToProps)(App);
