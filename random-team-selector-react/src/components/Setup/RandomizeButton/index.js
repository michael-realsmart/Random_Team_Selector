import React from 'react';
// import './styles.css';

export const RandomizeButton = (props) => {
  return (
    <button className="randomizeBtn"
      onClick={() => props.onRandomizeTeams()}
      disabled={
        props.isRandomized ||
        props.players.length === 0 ||
        props.players.length % 2 !== 0}>
      Randomize Teams
    </button>
  )
}