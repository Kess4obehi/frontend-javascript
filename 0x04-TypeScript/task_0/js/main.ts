interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Kessiena",
  lastName: "Obehi",
  age: 25,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Amaka",
  lastName: "Olu",
  age: 22,
  location: "Abuja"
}

const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");

// For each student in the list
studentsList.forEach((student) => {
  // Create a new row
  const row = document.createElement("tr");
   // Create two cells: one for firstName and one for location
  const nameCell = document.createElement("td");
  const locationCell = document.createElement("td");

   // Fill the cells with data
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  // Add the cells to the row
  row.appendChild(nameCell);
  row.appendChild(locationCell);

  // Add the row to the table
  table.appendChild(row);
});

// Add the table to the web page
document.body.appendChild(table);
