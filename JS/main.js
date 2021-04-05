// create an event Listener for the teeBoxSelect
// once they choose the teebox it will just populate the holes with yardage
// save the data from the course API call so you can reference it and don't have to make the call again
// how do I do this?
// it will cycle through instead
let courseData;

document.getElementById("course-select").addEventListener("change", function () {
  let courseId = document.getElementById("course-select").value;
  getAvailableTees(courseId);
  console.log('course working');
})

document.getElementById("tee-box-select").addEventListener("change", function () {
  let teeBoxId = document.getElementById("tee-box-select").value;
  populateHoles(teeBoxId);
  console.log('holes working');

})

function getNextId(prefix) {
  return prefix + Math.random().toString(36).substr(2, 10);
}

getAvailableCourses();


//create function to choose from available courses
function chooseCourse(courses) {
  let courseOptionsHtml = '';
  courses.courses.forEach((course) => {
    courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
  });
  document.getElementById('course-select').innerHTML = courseOptionsHtml;
}

// create function to choose tee box
function chooseTee(teeBoxes) {
  let teeBoxSelectHtml = '';
  teeBoxes.forEach(function (teeBox, index) {
    teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}</option>`
  });
  document.getElementById('tee-box-select').innerHTML = teeBoxSelectHtml;
}

// create function to populate holes
function chooseHole(holes) {
  let holesInfoHtml = '';
  holes.forEach(function () {
    holesInfoHtml += ``
  });
}

// create function to create message after last hole is played
function playerMessage() {
  toastr.success(`${playerName}, you're practically at pro-level. Great work! Go on sabbatical. You deserve it!`);
  toastr.warning(`${playerName}, keep trying to improve.  Hours at a practice facility will dramatically improve your golfing acumen.`);
}

function getAvailableCourses() {
  fetch('https://golf-courses-api.herokuapp.com/courses/')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      chooseCourse(data);
    }
    );
}

function getAvailableTees(id) {
  fetch(`https://golf-courses-api.herokuapp.com/courses/${id}`)
    .then(response => response.json())
    .then(data => {
      courseData = data;
      console.log(data.data.holes[0].teeBoxes)
      chooseTee(data.data.holes[0].teeBoxes);
    }
    );
}

function populateHoles(teeBox) {
  console.log(courseData.data.holes[0].teeBoxes[teeBox]);
}

function getParYardageAndHandicapInfo(holes) {
  for (let i = 0; i < holes.length; i++) {
    document.getElementById(`yards-${i}`).innerText = response.data.holes[i].teeType[selectedTeeType].yards;
    document.getElementById(`par-${i}`).innerText = response.data.holes[i].teeType[selectedTeeType].par;
    document.getElementById(`hcp-${i}`).innerText = response.data.holes[i].teeType[selectedTeeType].hcp;
  }
}


// create function to update Score
function updateScore() {

}

// create function to allow up to four players
function addUpToFourPlayers() {
  let player1 = "";
  let player2 = "";
  let player3 = "";
  let player4 = "";
}

// create function to enter players names?
function enterPlayersNames() {
  let playersnames = "";

}

// Be aware that when a player gets to the last score before totaling, they could have started at any hole.
// create function that totals last score before totaling regardless of what hole they started on. Be aware that when a player gets to the last score before totaling, they could have started at any hole.

function holeTotal() {

}