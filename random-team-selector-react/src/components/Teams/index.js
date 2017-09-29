import React from 'react';
import PropTypes from 'prop-types';
// import './styles.css';

import { TeamWhites } from './TeamWhites/';
import { TeamColours } from './TeamColours/';

export const Teams = (props) => {
  return (
    <section id ="teams">
      <TeamWhites players={props.teams.whites} />
      <TeamColours players={props.teams.colours} />
    </section>
  )
}

Teams.propTypes = {
  teams: PropTypes.object.isRequired,
}