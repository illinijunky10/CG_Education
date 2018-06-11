console.log('This file is linked!');

var teacher_name='Emma Kepple';

var dept_name='Chemistry';

var teacherRatings = [1.5, 4.7, 3.8];

// **********************************
var newRating = parseFloat(window.prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0?"));

// function addTeacherRating (teacherRatings, newRating) {
//   if (0 <= newRating && newRating <= 5 ) {
//     teacherRatings.push(newRating);
//   } else {
//     window.prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0?");
//   }
// }

// addTeacherRating (teacherRatings, newRating);

// function getRatingAvg (teacherRatings) {
//   var sum = 0;
//   for (var i = 0; i < teacherRatings.length; i++){
//       sum = sum + teacherRatings[i];
//   }
//   var avg = sum / teacherRatings.length;
//   prompt("Thanks for your review! "+ teacher_name + "'s average rating is now "+ avg);
//   return avg;
// }

// console.log('Teacher:',teacher_name,
//             'Department:', dept_name,
//             'Ratings:', teacherRatings[0], teacherRatings[1], teacherRatings[2],
//             'Avg Rating', getRatingAvg(teacherRatings) );
// ***************************************

var teacher = {
  //list and fill properties here
  name:"Emma Kepple",
  department:"Chemistry",
  ratings:[1.5, 4.7, 3.8],
  addRating:function (newRating) {
    if (0 <= newRating && newRating <= 5 ) {
      this.ratings.push(newRating);
    } else {
      window.prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0!");
    }
  },
  getAvgRating: function (ratings) {
    var sum = 0;
     for (var i = 0; i < this.ratings.length; i++){
         sum = sum + this.ratings[i];
     }
     var avg = sum / this.ratings.length;
     prompt("Thanks for your review! "+ this.name + "'s average rating is now "+ avg);
     return avg;
   }
};
console.log(teacher.ratings);
console.log(teacher.addRating(newRating));
console.log(teacher.ratings);
console.log(teacher.getAvgRating());

var student_name='Megan Trainor';

var major='Major';

var email='email';

var gpa='GPA';

console.log(student_name,major,
            'Email:',email,
            'GPA:',gpa);

var gradYear = parseInt(window.prompt("What is your expected college graduation year?"));

var gradMonth = window.prompt("What is your expected college graduation month?");

function checkMonth (gradMonth) {
  if (gradMonth !== "May" && gradMonth !== "December") {
    window.prompt("Please enter either May or December!");
  }
}

checkMonth (gradMonth);

// function message (gradYear) {
//   if (gradYear >= 2018) {
//     console.log("You're in high school!");
//   } else if (gradYear < 2018) {
//     console.log("You're in college!");
//   }
// }

// message (gradYear);
// var graduatingClass = "senior";

var welcomeCollegeStudent = function (graduatingClass) {
  alert("Welcome " + graduatingClass + "!");
}

var welcomeHsStudent = function (graduatingClass) {
  alert("You're still a " + graduatingClass + " in high school!")
}


function welcomeStudentsByGraduatingClass (gradYear, welcomeMessage) {
// var gradYear = "2019"
// var welcomeMessage = welcomeCollegeStudent = (function above)
  if (gradYear === 2019 || gradYear === 2023) {
    welcomeMessage("senior");

  } else if (gradYear === 2020 || gradYear === 2024) {
    welcomeMessage("junior");

  } else if (gradYear === 2021 || gradYear === 2025) {
    welcomeMessage ("sophomore");

  } else if (gradYear === 2022 || gradYear === 2026) {
    welcomeMessage ("freshman");
  }
}

  if (2023 <= gradYear && gradYear <= 2026) {
    // high school
    welcomeStudentsByGraduatingClass (gradYear, welcomeHsStudent);
  } if (2019 <= gradYear &&  gradYear <= 2022) {
    // college
    welcomeStudentsByGraduatingClass (gradYear, welcomeCollegeStudent);
  } if (gradYear >= 2027) {
    alert("Whoa, college is some years away...");
  }


// var courses = [
//     ["Astronomy", "Physics"],
//     ["Personality", "Psychology"],
//     ["Force", "Physics"],
//     ["Abnormal Psychology", "Psychology"]
//
// ]

var course = {
  name: 'Astronomy',
  department: 'Physics',
  teacher: teacher,
  semester: 'Fall 2018'
};
 var course2 = {
   name: 'Personality',
   department: 'Psychology',
   teacher: teacher,
   semester: 'Fall 2018'
 };
 var course3 = {
   name: 'Force',
   department: 'Physics',
   teacher: teacher,
   semester: 'Spring 2019'
 };
 var course4 = {
   name: 'Abnormal Psychology',
   department: 'Psychology',
   teacher: teacher,
   semester: 'Spring 2019'
 };
var courses = [course, course2, course3, course4];

var inputDepartment = window.prompt("What department is the course in?");

function filterByDepartment (inputDepartment, courses) {
  var matchingCourses = [];

  for (var i=0; i < courses.length; i++) {
    var aCourse = courses[i];
    if (aCourse.department == inputDepartment){
      matchingCourses.push(aCourse);
     //matchingCourses += aCourse.name + ', ';
    }
  }

  return matchingCourses;
}

filterByDepartment (inputDepartment, courses)
var result = filterByDepartment (inputDepartment, courses);
console.log(result);

console.log(course4.teacher.name);
// Real Deal Here

// var inputDepartment = window.prompt("What department is the course in?");
//
// function findCourse (inputDepartment) {
//   for (var i=0, len=inputDepartment.length; i<len; i++) {
//     if (inputDepartment==courses[i][1]) {
//       alert("Physics: " + courses[i][0]);
//     } else if (inputDepartment=="Psychology") {
//       alert("Psychology: " + courses[i][0]);
//     }
//   }
// }
//
// findCourse (inputDepartment)

// var class_name ='Astronomy';
//
// var class_dept ='Physics';
//
// var class_teacher ='Sally Jones';
//
// var semester ='Fall 2017';
//
// console.log(class_name, class_dept,
//             'Teacher:', class_teacher,
//             'Semester:', semester);
