import React from 'react';
import './styles.css';

export const OldPlayerSelect = (props) => {
  return (
    <div className="oldPlayersList">
      <h3>PAST PLAYERS</h3>
      {props.oldPlayers.isLoading ? 'Loading...' : props.oldPlayers.players.map((player, idx) =>
        <button
          key={idx}
          onClick={(e) => props.onSelectPlayer(player)}
          disabled={props.currentPlayers.indexOf(player) !== -1}>{player}</button>
      )}
    </div>
  )
}