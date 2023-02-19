// DOM Elements
const studentForm = document.getElementById('studentForm');
const studentContainer = document.querySelector('.students');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

/*
{
    name: '',
    age; number,
    roll: number

}

*/

const students = [
  {
    name: 'Sanj',
    age: 23,
    roll: 42,
  },
  {
    name: 'John',
    age: 26,
    roll: 34,
  },
];

const addStudent = (name, age, roll) => {};

const createStudentElement = ({name, age, roll}) => {
  // Create element
  const studentDiv = document.createElement('div');
  const studentName = document.createElement('h2');
  const studentAge = document.createElement('p');
  const studentRoll = document.createElement('p');

  // Fill the content
  studentName.innerText = 'Student name: ' + name;
  studentAge.innerText = 'Student age: ' + age;
  studentRoll.innerText = 'Student roll: ' + roll;

  // Add to the DOM
  studentDiv.append(studentName, studentAge, studentRoll);
  studentContainer.appendChild(studentDiv);
};

students.forEach(createStudentElement);
