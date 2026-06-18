// 1. Store employee name using var
var employeeName = "Manikanta";

// 2. Store employee age using let
let employeeAge = 22;

// 3. Store company name using const
const companyName = "Stackly";

// 4. Print all details
console.log("Employee Name :", employeeName);
console.log("Employee Age :", employeeAge);
console.log("Company Name :", companyName);

// 5. Show welcome popup
alert("Welcome to Employee Portal");

// 6. Ask employee about task completion
let taskStatus = confirm("Have you completed today's task?");

// Print result
console.log(taskStatus);

// 7. Ask employee name
let enteredName = prompt("Enter your name");

// Print entered name
console.log("Employee Name :", enteredName);

// 8. Display employee name on webpage
document.writeln("Welcome " + enteredName);

// 9. Success message
console.warn("Task submitted successfully");

// 10. Error message
console.error("Task submission failed");

// Bonus Task
employeeAge = 23;

console.log("Updated Employee Age :", employeeAge);