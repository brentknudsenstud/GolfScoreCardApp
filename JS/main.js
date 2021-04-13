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
  getYardageParAndHandicapInfo(courseData.holes, teeBoxId);
  
  tallyYardageAndParTotals(courseData.holes, teeBoxId);


})

// create function to update Score
function updateScore() {
  // if(range = "out") {
  //   let score = 0;
  //   let out = document.getElementsByClassName("score9entry");
  //   for(let i = 0; i < out.length; i++) {
  //     score += out[i].value;
  //   }
  //   document.getElementById("1-out").innerText = score;
  // }
  // if(range = "in") {
  //   let score = 0;
  //   let inward = document.getElementsByClassName("score18entry");
  //   for(let i = 0; i < inward.length; i++) {
  //     score += inward[i].value;
  //   }
  //   document.getElementById("1-in").innerText = score;
  // }
let playerCount = 4;
let holeCount = 18;
    for (let i=1; i<=playerCount; i++){
        let outScore = 0
        let inScore = 0
        for(let j=1; j<=holeCount; j++) {
            if(j <= 9 ){
                outScore += parseInt(document.getElementById(`hole-${i}-${j}`).value) ? parseInt(document.getElementById(`hole-${i}-${j}`).value) : 0;
            } else {
                inScore += parseInt(document.getElementById(`hole-${i}-${j}`).value ? parserftInt(document.getElementById(`hole-${i}-${j}`).value) : 0);
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
  
  for(let i = 0; i < holes.length; i++) {
    if (i < 9) {
      outyards += holes[i].teeBoxes[selectedTeeType].yards;
      outpar += holes[i].teeBoxes[selectedTeeType].par;
    }
    if (i > 8) {
        inyards += holes[i].teeBoxes[selectedTeeType].yards;
        inpar += holes[i].teeBoxes[selectedTeeType].par;
      }
    
  }
    document.getElementById("yards-out").innerText = outyards;
    document.getElementById("yards-in").innerText = inyards;
    document.getElementById("par-in").innerText = inpar;
    document.getElementById("par-out").innerText = outpar;
    document.getElementById("yards-total").innerText = outyards + inyards;
    document.getElementById("par-total").innerText = outpar + inpar;
    console.log("Yardage and Par Totals working");
}




// Be aware that when a player gets to the last score before totaling, they could have started at any hole.
// create function that totals last score before totaling regardless of what hole they started on.

function holeTotal() {
holeTotal();
}


// create code to convert strings into a number before tallying the score for out, in, and total
// getElementsByTagName("tagnamehere").innerText