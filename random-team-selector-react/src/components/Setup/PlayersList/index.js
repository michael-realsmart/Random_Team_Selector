import React from 'react';
// import './styles.css';

export const PlayersList = (props) => {
  const playersList = props.players.map((player, idx) =>
    <li key={idx}>{player} <button onClick={(e) => props.onRemovePlayer(player)}>&minus;</button></li>
  );
  return (
    <div className="playerList">
      <h3>PLAYER LIST</h3>
      <ol id="output">
        {playersList}
      </ol>
    </div>
  )
}