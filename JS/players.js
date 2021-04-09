// create function to randomize ids for players and courses
document.getElementById("player1name").addEventListener("input", function () {
  validateName();
})


class Player {
    constructor(name, id = getNextId(prefix), scores = []) {
      this.name = name;
      this.id = id;
      this.scores = scores;
    }
  }

  //create function to validate that no two players have the same name
// function validateName() {
//   if(document.getElementById("player1name").value == document.getElementById("player2name").value || document.getElementById("player3name").value || document.getElementById("player4name").value) {
//   alert("Your name must be unique. Try again")

// }
// }
function validateName() {
  let a = document.getElementById("player1name").value;
  let b = document.getElementById("player2name").value;
  let c = document.getElementById("player3name").value;
  let d = document.getElementById("player4name").value;
  let x = 5;
  let names = [1, 2, 3, 4];
  let contains = names.indexOf(x)
//   switch(a, b, c, d) {
//     case (b == a):
//     alert("Choose a different name.")
//     break;
//     case (c == a || c == b):
//     alert("Choose a different name.")
//     break;
//     case (d == a || d == b || d == c):
//     alert("Choose a different name.")
//     break;
//     default:
//     alert("I like your name!")
//   }
}

validateName();


  //create function to validate that only numbers can be entered for a score

  //create function that updates the out, in, and total columns when player enters score
 
// create function to allow up to four players
function addUpToFourPlayers() {
  let player1 = "";
  let player2 = "";
  let player3 = "";
  let player4 = "";
}