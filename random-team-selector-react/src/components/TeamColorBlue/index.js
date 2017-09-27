import React from 'react';
import './styles.css';

export const TeamColorBlue = (props) => {
  return (
    <section id ="teamColorBlue">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <h2>Colours</h2>
            <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
            <ul id="teamBlue"></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}