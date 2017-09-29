import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { OldPlayerSelect } from './OldPlayerSelect/';
import { NewPlayerInput } from './NewPlayerInput/';
import { RandomizeButton } from './RandomizeButton/';
import { PlayersList } from './PlayersList/';

export const Setup = (props) => {
  return (
    <section id="setup">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
            <OldPlayerSelect
              oldPlayers={props.oldPlayers}
              currentPlayers={props.currentPlayers}
              onSelectPlayer={props.onAddOldPlayer} />
            <NewPlayerInput
              onAddPlayer={props.onAddPlayer} />
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
            <PlayersList
              players={props.currentPlayers}
              onRemovePlayer={props.onRemovePlayer} />
            <RandomizeButton
              isRandomized={props.isRandomized}
              players={props.currentPlayers}
              onRandomizeTeams={props.onRandomizeTeams}/>
          </div>
        </div>
      </div>
    </section>
  )
}

Setup.propTypes = {
  oldPlayers: PropTypes.array.isRequired,
  currentPlayers: PropTypes.array.isRequired,
  onAddPlayer: PropTypes.func.isRequired,
  onAddOldPlayer: PropTypes.func.isRequired,
  onRemovePlayer: PropTypes.func.isRequired,
  onRandomizeTeams: PropTypes.func.isRequired
}