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
  getYardageParAndHandicapInfo(courseData.holes, teeBoxId);
  
  tallyYardageAndParTotals(courseData.holes, teeBoxId);

})

// Function to update Score
function updateScore() {

let playerCount = 4;
let holeCount = 18;
    for (let i=1; i<=playerCount; i++){
        let outScore = 0
        let inScore = 0
        for(let j=1; j<=holeCount; j++) {
            if(j <= 9 ){
                outScore += parseInt(document.getElementById(`hole-${i}-${j}`).value) ? parseInt(document.getElementById(`hole-${i}-${j}`).value) : 0;
            } else {
                inScore += parseInt(document.getElementById(`hole-${i}-${j}`).value ? parseInt(document.getElementById(`hole-${i}-${j}`).value) : 0);
            }
        }
        document.getElementById(`${i}-out`).innerText = outScore
        document.getElementById(`${i}-in`).innerText = inScore
        document.getElementById(`${i}-total`).innerText = outScore + inScore
    }
}


let runningTotalOut = document.getElementsByClassName("9scoreentry");
for (i = 0; i < runningTotalOut.length; i++) {
  runningTotalOut[i].addEventListener("change", updateScore)

}

let runningTotalIn = document.getElementsByClassName("18scoreentry");
for (i = 0; i < runningTotalIn.length; i++) {
  runningTotalIn[i].addEventListener("change", updateScore)
}

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
      courseData = data.data;
      console.log(data.data.holes[0].teeBoxes)
      chooseTee(data.data.holes[0].teeBoxes);
    }
    );
}

function populateHoles(teeBox) {
  console.log(courseData.holes[0].teeBoxes[teeBox]);
}

function getYardageParAndHandicapInfo(holes, selectedTeeType) {
  for (let i = 0; i < holes.length; i++) {
    document.getElementById(`yards-${i + 1}`).innerText = holes[i].teeBoxes[selectedTeeType].yards;
    document.getElementById(`par-${i + 1}`).innerText = holes[i].teeBoxes[selectedTeeType].par;
    document.getElementById(`hcp-${i + 1}`).innerText = holes[i].teeBoxes[selectedTeeType].hcp;
  }
}


function tallyYardageAndParTotals(holes, selectedTeeType) {
  let outyards = 0;
  let inyards = 0;
  let outpar = 0;
  let inpar = 0;
  let outhcp = 0;
  let inhcp = 0;
  
  for(let i = 0; i < holes.length; i++) {
    if (i < 9) {
      outyards += holes[i].teeBoxes[selectedTeeType].yards;
      outpar += holes[i].teeBoxes[selectedTeeType].par;
      outhcp += holes[i].teeBoxes[selectedTeeType].hcp;
    }
    if (i > 8) {
        inyards += holes[i].teeBoxes[selectedTeeType].yards;
        inpar += holes[i].teeBoxes[selectedTeeType].par;
        inhcp += holes[i].teeBoxes[selectedTeeType].hcp;
      }
    
  }
    document.getElementById("yards-out").innerText = outyards;
    document.getElementById("yards-in").innerText = inyards;
    
    document.getElementById("par-in").innerText = inpar;
    document.getElementById("par-out").innerText = outpar;

    document.getElementById("hcp-out").innerText = outhcp;
    document.getElementById("hcp-in").innerText = inhcp;

    document.getElementById("yards-total").innerText = outyards + inyards;
    document.getElementById("par-total").innerText = outpar + inpar;
    document.getElementById("hcp-total").innerText = outhcp + inhcp;
    console.log("Yardage and Par Totals working");
}

function holeTotal() {
holeTotal();
}

// create function to create message after last hole is played
function playerMessage() {
  // if (player chooses to follow standard par && whatever player total is < standard course par) {
  if (player)  
  toastr.success(`${playersName}, you're practically at pro-level. Great work! Go on sabbatical. You deserve it!`);
  // } else {
  // toastr.warning(`${playersName}, keep trying to improve. Hours at a practice facility will dramatically improve your golfing acumen.`);
  // }
  // I'll need to display this if player chooses to follow handicap par, too (I think). How do I differentiate that?
  // Will I need to use a setter and getter for this?
  // if (player chooses to follow handicap par && whatever player total is < handicap par) {
  //  toastr.success(`${playersName}, you're practically at pro-level. Great work! Go on sabbatical. You deserve it!`);
   // } else {
  // toastr.warning(`${playersName}, keep trying to improve. Hours at a practice facility will dramatically improve your golfing acumen.`);
  // }
  
  toastr.warning(`${playersName}, keep trying to improve.  Hours at a practice facility will dramatically improve your golfing acumen.`);
}
