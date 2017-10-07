const initialState = {
  isLoading: false,
  players: []
};

const OldPlayersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OLD_PLAYERS':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_OLD_PLAYERS_SUCCESS':
      let players = [];
      players = action.payload.data.map(player => player.name);
      return {
        ...state,
        isLoading: false,
        players: [
          ...state.players,
          ...players
        ]
      }
    // case 'ADD_OLD_PLAYER':
    //   if(state.players.indexOf(action.player) === -1) {
    //     return {
    //       ...state,
    //       players: [
    //         ...state.players,
    //         action.player
    //       ]
    //     }
    //   }
    //   return state
    // case 'REMOVE_OLD_PLAYER':
    //   const newState = [...state]
    //   const idx = newState.indexOf(action.player)
    //   if (idx > -1) {
    //     newState.splice(idx, 1)
    //   }
    //   return newState
    default:
      return state
  }
}

export default OldPlayersReducer