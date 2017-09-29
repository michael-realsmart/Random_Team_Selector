export const shuffleArray = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const randomizeTeams = (players, teams) => {
  if (players.length === 0 || players.length % 2 !== 0) {
    return {...teams};
  } else {
    const shuffledPlayers = shuffleArray(players);
    const teamSize = Math.ceil(shuffledPlayers.length / 2);
    return {
      whites: shuffledPlayers.slice(0, teamSize),
      colours: shuffledPlayers.slice(teamSize)
    } 
  }
}