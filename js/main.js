console.log('This file is linked!');

var teacher_name='Emma Kepple';

var dept_name='Chemistry';

var rating1=1.5;

var rating2=4.7;

var rating3=3.8;

var avgRating= (rating1 + rating2 + rating3)/3;
avgRating= Math.round( avgRating * 10) / 10;

console.log('Teacher:',teacher_name,
            'Department:', dept_name,
            'Ratings:', rating1, rating2, rating3,
            'Avg Rating', avgRating);

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
