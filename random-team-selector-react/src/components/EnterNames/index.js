import React from 'react';
import './styles.css';

export const EnterNames = (props) => {
  return (
    <section id="enterNames">
      <div className="container-fluid">
        <div className="row">
          <div clss="col-xs-12">
            <form className="addingPlayers">
              <input type="text" id="input" placeholder="Player Name"/>{' '}
              <input type="submit" id="submit" value="+" />
            </form>
            <a className="randomLink" href="#teamRed"><button className="random" onclick="myFunction()">Randomize teams</button></a>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
            <h3 className="playerList">PLAYER LIST</h3>
            <ol id="output"></ol>
          </div>
        </div>
      </div>
    </section>
  )
}