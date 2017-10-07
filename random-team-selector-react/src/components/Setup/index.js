import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../services/actions';

import { OldPlayerSelect } from './OldPlayerSelect/';
import { NewPlayerInput } from './NewPlayerInput/';
import { RandomizeButton } from './RandomizeButton/';
import { PlayersList } from './PlayersList/';

class Setup extends Component {
  componentDidMount() {
    this.props.actions.getOldPlayers();
  }
  handleAddPlayer(player) {
    this.props.actions.addPlayer(player);
    // this.props.actions.addOldPlayer(player);
  }
  handleRemovePlayer(player) {
    this.props.actions.removePlayer(player);
  }
  handleRandomizeTeams() {
    this.props.actions.randomizeTeams(this.props.currentPlayers);
  }
  render() {
    return (
      <section id="setup">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
              <OldPlayerSelect
                oldPlayers={this.props.oldPlayers}
                currentPlayers={this.props.currentPlayers}
                onSelectPlayer={(player) => this.handleAddPlayer(player)} />
              <NewPlayerInput
                onAddPlayer={(player) => this.handleAddPlayer(player)} />
            </div>
            <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
              <PlayersList
                players={this.props.currentPlayers}
                onRemovePlayer={(player) => this.handleRemovePlayer(player)} />
              <RandomizeButton
                isRandomized={this.props.isRandomized}
                players={this.props.currentPlayers}
                onRandomizeTeams={() => this.handleRandomizeTeams()}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Setup.propTypes = {
  oldPlayers: PropTypes.object.isRequired,
  currentPlayers: PropTypes.array.isRequired,
  isRandomized: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    currentPlayers: state.currentPlayers,
    oldPlayers: state.oldPlayers,
    teams: state.teams,
    isRandomized: state.isRandomized
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup);