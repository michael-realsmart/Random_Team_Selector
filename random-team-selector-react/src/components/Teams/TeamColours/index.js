import React from 'react';
import './styles.css';

export const TeamColours = (props) => {
  const playersList = props.players.map((player, idx) =>
    <li key={idx}><span className="glyphicon glyphicon-user"></span> {player}</li>
  );
  return (
    <section id ="teamColours">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <h2>Colours</h2>
            <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
              <ul id="teamColoursPlayers">
                {playersList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}