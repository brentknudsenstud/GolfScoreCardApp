// create function to randomize ids for players and courses
class Player {
    constructor(name, id = getNextId(prefix), scores = []) {
      this.name = name;
      this.id = id;
      this.scores = scores;
    }
  }
 
// create function to allow up to four players
function addUpToFourPlayers() {
  let player1 = "";
  let player2 = "";
  let player3 = "";
  let player4 = "";
}