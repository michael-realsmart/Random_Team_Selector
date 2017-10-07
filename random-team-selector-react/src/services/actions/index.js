export function getOldPlayers() {
  return {
    type: 'GET_OLD_PLAYERS',
    payload: {
      request:{
        url:'/players.json'
      }
    }
  }
}

export function addPlayer(player) {
  return {
    type: 'ADD_PLAYER',
    player
  }
}

export function removePlayer(player) {
  return {
    type: 'REMOVE_PLAYER',
    player
  }
}

export function addOldPlayer(player) {
  return {
    type: 'ADD_OLD_PLAYER',
    player
  }
}

export function randomizeTeams(players) {
  return {
    type: 'RANDOMIZE_TEAMS',
    players
  }
}