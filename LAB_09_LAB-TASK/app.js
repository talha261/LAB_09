import { faculty } from './modules/faculties';
import { student } from './modules/student';
import { event } from './modules/events';
import './app-style.scss';


console.log("-------- Student Profile ------");
console.log(student.name);
console.log(student.email);
console.log(student.dob);

console.log("------ Faculty Name ------");
console.log(faculty.facultyName);

console.log("------- Events Name ------");
console.log(event.eventName);