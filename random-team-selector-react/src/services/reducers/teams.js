import { randomizeTeams } from '../randomizeHelper';

const initialState = {
  'whites': [],
  'colours': []
};

const TeamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RANDOMIZE_TEAMS':
      const newTeams = randomizeTeams(
        action.players.slice(),
        {...state}
      );
      return newTeams
    default:
      return state
  }
}

export default TeamsReducer