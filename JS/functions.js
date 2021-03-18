function getAvailableCourses() {
    return fetch('https://golf-courses-api.herokuapp.com/courses/').then(
      function (response) {
        return response.json();
      }
    );
   }