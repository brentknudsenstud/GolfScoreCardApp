// create function to randomize ids for players and courses
class Player {
    constructor(name, id = getNextId(prefix), scores = []) {
      this.name = name;
      this.id = id;
      this.scores = scores;
    }
  }
 