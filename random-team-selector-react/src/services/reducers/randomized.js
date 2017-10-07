const initialState = false

const RandomizedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RANDOMIZE_TEAMS':
      console.log(state)
      const newState = true
      return newState
    default:
      return state
  }
}

export default RandomizedReducer