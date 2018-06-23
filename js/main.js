console.log('This file is linked!');

// **********************************
var newRating = parseFloat(window.prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0?"));

function Teacher (teacher_name, teacher_department, ratings){
  this.name = teacher_name;
  this.department= teacher_department;
  this.ratings= ratings;
}

Teacher.prototype = {
  addRating: function (newRating) {
    if (0 <= newRating && newRating <= 5 ) {
      this.ratings.push(newRating);
    } else {
      window.prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0!");
    }
  },
  getAvgRating: function () {
    var sum = 0;
     for (var i = 0; i < this.ratings.length; i++){
         sum = sum + this.ratings[i];
     }
     var avg = sum / this.ratings.length;
     alert("Thanks for your review! "+ this.name + "'s average rating is now "+ avg);
     return avg;
   }
};

var physicsTeacher = new Teacher("Ben Kenobi", "Physics", [4.7, 5.0, 1.0]);
physicsTeacher.addRating(5.0);
console.log(physicsTeacher);
console.log(physicsTeacher.ratings);
console.log(physicsTeacher.getAvgRating());

var psychTeacher = new Teacher("Janice Juraska", "Psychology", [3.5, 5.0, 0.5]);
psychTeacher.addRating(5.0);
console.log(psychTeacher);
console.log(psychTeacher.ratings);
console.log(physicsTeacher.getAvgRating());

var historyTeacher = new Teacher ("Emily Roberts", "History", [5.0, 2.7, 1.0]);
historyTeacher.addRating(4.7);
console.log(historyTeacher);
console.log(historyTeacher.ratings);
console.log(historyTeacher.getAvgRating());

// Student Section *******************************************

var gradYear = parseInt(window.prompt("What is your expected college graduation year?"));

var gradMonth = window.prompt("What is your expected college graduation month?");

function checkMonth (gradMonth) {
  if (gradMonth !== "May" && gradMonth !== "December") {
    window.prompt("Please enter either May or December!");
  }
}

checkMonth (gradMonth);

var welcomeCollegeStudent = function (graduatingClass) {
  alert("Welcome " + graduatingClass + "!");
}

var welcomeHsStudent = function (graduatingClass) {
  alert("You're still a " + graduatingClass + " in high school!")
}


function welcomeStudentsByGraduatingClass (gradYear, welcomeMessage) {

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

// Courses Section *************************************************

var inputDepartment = window.prompt("What department is the course in?");

function Course (courseName, courseDepartment, teacher, semester){
  this.name = courseName;
  this.department = courseDepartment;
  this.teacher = teacher;
  this.semester = semester;
}

Course.prototype = {
  filterByDepartment: function (inputDepartment, courses) {
    var matchingCourses = [];

    for (var i=0; i < courses.length; i++) {
      var aCourse = courses[i];
      if (aCourse.department == inputDepartment){
        // matchingCourses.push(aCourse);
       matchingCourses += aCourse.name + ', ';
      }
    }
    alert(matchingCourses);
    return matchingCourses;
  }
}

var Astronomy = new Course ("Astronomy", "Physics", physicsTeacher, "Fall 2018");

var Personality = new Course ("Personality", "Psychology", psychTeacher, "Fall 2018");

var Force = new Course ("Force", "Physics", physicsTeacher, "Spring 2019");

var Abnormal = new Course ("Abnormal Psychology", "Psychology", psychTeacher, "Spring 2019");

var courses = [Astronomy, Personality, Force, Abnormal];

Astronomy.filterByDepartment("Physics", courses);



// Student Object *******************************************

function Student (student_name, major, email, avgGPA, student_courses) {
  this.name = student_name;
  this.major = major;
  this.email = email;
  this.avgGPA = avgGPA;
  this.courses = student_courses;
}

Student.prototype = {
  addCourse: function (newCourse){
    this.courses.push(newCourse);
  },
  dropCourse: function (oldCourse){
    this.courses.pop(oldCourse);
  },
  changeMajor: function (majorInput){
    this.major = majorInput;
  }
};

var Lizzie = new Student ("Lizzie McGuire", "Psychology", "lizzie@school.edu", 3.75, [Abnormal, Personality]);

var Miranda = new Student ("Miranda Sanchez", "Art", "miranda@school.edu", 3.77, [Force, Personality]);

var Gordo = new Student ("David Gordon", "Physics", "gordo@school.edu", 4.0, [Force, Astronomy]);

Lizzie.addCourse(Force);
console.log(Lizzie.courses);

Lizzie.dropCourse(Force);


// CG Final ***********************************************************

updateCourseDisplay = function (courses) {
  
}
