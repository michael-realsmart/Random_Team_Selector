import { combineReducers } from 'redux';
import OldPlayersReducer from './oldPlayers';
import CurrentPlayersReducer from './currentPlayers';
import TeamsReducer from './teams';
import RandomizedReducer from './randomized';

const rootReducer = combineReducers({
  oldPlayers: OldPlayersReducer,
  currentPlayers: CurrentPlayersReducer,
  teams: TeamsReducer,
  isRandomized: RandomizedReducer
});

export default rootReducer;