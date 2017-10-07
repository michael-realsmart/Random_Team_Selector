const initialState = [
];

const CurrentPlayersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      if(state.indexOf(action.player) === -1) {
        return [
          ...state,
          action.player
        ]
      }
      return state
    case 'REMOVE_PLAYER':
      const newState = [...state]
      const idx = newState.indexOf(action.player)
      if (idx > -1) {
        newState.splice(idx, 1)
      }
      return newState
    default:
      return state
  }
}

export default CurrentPlayersReducer