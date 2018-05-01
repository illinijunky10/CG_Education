console.log('This file is linked!');

var teacher_name='Emma Kepple';

var dept_name='Chemistry';

// var rating1=1.5;
//
// var rating2=4.7;
//
// var rating3=3.8;

var teacherRatings = [1.5, 4.7, 3.8];

// var avgRating= (rating1 + rating2 + rating3)/3;
// avgRating= Math.round( avgRating * 10) / 10;

function getRatingAvg (ratings) {
  var sum = 0;
  for (var i = 0; i < ratings.length; i++){
      sum = sum + ratings[i];
  }
  var avg = sum / ratings.length;
  return avg;
}


function addTeacherRating (ratingsArr, newRating) {
  return ratingsArr.push(newRating);
}

var newRating = window.prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0?");

if ((0.0 <= newRating <= 5.0 )) {
  teacherRatings.push(newRating);
} else {
  var newRating = window.prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0?");
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

var class_name='Astronomy';

var class_dept='Physics';

var class_teacher='Sally Jones';

var semester='Fall 2017';

console.log(class_name, class_dept,
            'Teacher:', class_teacher,
            'Semester:', semester);
