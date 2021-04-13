// create function to randomize ids for players and courses
document.getElementById("player1name").addEventListener("change", function () {
  validateName(this.value, this.id);
})

document.getElementById("player2name").addEventListener("change", function () {
  validateName(this.value, this.id);
})

document.getElementById("player3name").addEventListener("change", function () {
  validateName(this.value, this.id);
})

document.getElementById("player4name").addEventListener("change", function () {
  validateName(this.value, this.id);
})

class Player {
    constructor(name, id = getNextId(prefix), scores = []) {
      this.name = name;
      this.id = id;
      this.scores = scores;
    }
  }

function validateName(newPlayersName, inputId) {
  // let a = document.getElementById("player1name").value;
  // let b = document.getElementById("player2name").value;
  // let c = document.getElementById("player3name").value;
  // let d = document.getElementById("player4name").value;
  // let names = [a, b, c, d];
  // let contains = names.indexOf(-1);
  // if (contains == names) {
  //   alert("Name already in use. Choose a unique name.");
  // } else {
  //   alert("I like your name.");
  // }
  let names = [
    document.getElementById("player1name"),
    document.getElementById("player2name"),
    document.getElementById("player3name"),
    document.getElementById("player4name")
  ];

  const checkPlayersNames = names.filter(function(item) {
    return item.id !== inputId && item.value.toUpperCase() === newPlayersName.toUpperCase();
  }); 

if (checkPlayersNames.length > 0) {
  alert("Name already in use. Choose a unique name.");
  document.getElementById(inputId).value = "";
} else {
  alert(`Welcome!`);
}
}




  //create function to validate that only numbers can be entered for a score

  //create function that updates the out, in, and total columns when player enters score