console.log('This file is linked!');

var teacher_name='Emma Kepple';

var dept_name='Chemistry';

var teacherRatings = [1.5, 4.7, 3.8];

var newRating = parseInt(window.prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0?"));
function addTeacherRating (teacherRatings, newRating) {
  if (0 <= newRating && newRating <= 5 ) {
    teacherRatings.push(newRating);
  } else {
    window.prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0?");
  }
}

addTeacherRating (teacherRatings, newRating);

function getRatingAvg (teacherRatings) {
  var sum = 0;
  for (var i = 0; i < teacherRatings.length; i++){
      sum = sum + teacherRatings[i];
  }
  var avg = sum / teacherRatings.length;
  prompt("Thanks for your review! "+ teacher_name + "'s average rating is now "+ avg);
  return avg;
}

console.log('Teacher:',teacher_name,
            'Department:', dept_name,
            'Ratings:', teacherRatings[0], teacherRatings[1], teacherRatings[2],
            'Avg Rating', getRatingAvg(teacherRatings) );

var student_name='Sally Jones';

var major='Major';

var email='email';

var gpa='GPA';

console.log(student_name,major,
            'Email:',email,
            'GPA:',gpa);

var courses = [
    ["Astronomy", "Physics"],
    ["Personality", "Psychology"],
    ["Force", "Physics"],
    ["Abnormal Psychology", "Psychology"]

]

function filterByDepartment (x,y) {

}

var class_name='Astronomy';

var class_dept='Physics';

var class_teacher='Sally Jones';

var semester='Fall 2017';

console.log(class_name, class_dept,
            'Teacher:', class_teacher,
            'Semester:', semester);
