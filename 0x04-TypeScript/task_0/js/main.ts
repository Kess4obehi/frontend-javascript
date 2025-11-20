//student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

//two student objected created typed as Student
const student1: Student = {
  firstName: "Ada",
  lastName: "Lovelace",
  age: 36,
  location: "London"
};

const student2: Student = {
  firstName: "Alan",
  lastName: "Turing",
  age: 41,
  location: "Manchester"
};

//Create an array containing the two students (typed)
const studentsList: Student[] = [student1, student2];

//Render a table using Vanilla JavaScript
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

//Loop through the studentsList and add each row
studentsList.forEach((student: Student): void =>  {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);