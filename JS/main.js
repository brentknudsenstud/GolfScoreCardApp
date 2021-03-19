let courseOptionsHtml = '';
courses.forEach((course) => {
 courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
});
document.getElementById('course-select').innerHTML = courseOptionsHtml;

let teeBoxSelectHtml = ''
teeBoxes.forEach(function (teeBox, index) {
   teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}, ${
     teeBox.totalYards
   } yards</option>`
});
document.getElementById('tee-box-select').innerHTML = teeBoxSelectHtml;


function playerMessage() {
toastr.success(`${playerName}, you're practically at pro-level. Great work! Go on sabbatical. You deserve it!`);

toastr.warning(`${playerName}, keep trying to improve.  Hours at a practice facility will dramatically improve your golfing acumen.`);
}

function getAvailableCourses() {
  return fetch('https://golf-courses-api.herokuapp.com/courses/').then(
    function (response) {
      return response.json();
    }
  );
 }
