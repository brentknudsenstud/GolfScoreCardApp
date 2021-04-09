// create function to randomize ids for players and courses
document.getElementById("player1name").addEventListener("input", function () {
  validateName();
})

document.getElementById("player2name").addEventListener("input", function () {
  validateName();
})

document.getElementById("player3name").addEventListener("input", function () {
  validateName();
})

document.getElementById("player4name").addEventListener("input", function () {
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
  let names = [a, b, c, d];
  let contains = names.indexOf(-1);
  if (contains == names) {
    alert("Name already in use. Choose a unique name.");
  } else {
    alert("I like your name.");
  }
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



  //create function to validate that only numbers can be entered for a score

  //create function that updates the out, in, and total columns when player enters score
 
// create function to allow up to four players
function addUpToFourPlayers() {
  let player1 = "";
  let player2 = "";
  let player3 = "";
  let player4 = "";
}