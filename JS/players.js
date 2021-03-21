class Player {
    constructor(name, id = getNextId(prefix), scores = []) {
      this.name = name;
      this.id = id;
      this.scores = scores;
    }
  }
 