import React from 'react';
import './styles.css';

export const TeamWhites = (props) => {
  const playersList = props.players.map((player, idx) =>
    <li key={idx}><span className="glyphicon glyphicon-user"></span> {player}</li>
  );
  return (
    <section id ="teamWhites">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <h2>Whites</h2>
            <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
              <ul id="teamWhitesPlayers">
                {playersList}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}