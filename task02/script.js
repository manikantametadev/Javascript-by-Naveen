// Task 1: Employee Registration
let employeeName = "Manikanta";
const employeeId = "EMP20471";
let department = "Development";
let salary = 40000;
let isPermanent = true;

console.log(`
Employee Details
----------------
Name       : ${employeeName}
ID         : ${employeeId}
Department : ${department}
Salary     : ${salary}
Permanent  : ${isPermanent}
`);


// Task 2: Employee Skills
let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Node.js",
    "Tailwind CSS"
];

console.log("First Skill :", skills[0]);
console.log("Third Skill :", skills[2]);
console.log("Last Skill :", skills[skills.length - 1]);
console.log("Total Skills :", skills.length);

// Task 3: Company Object
const company = {
    companyName: "Stackly IT",
    location: "Hyderabad",
    employees: 500,
    technologies: ["HTML", "CSS", "JavaScript", "React", "NodeJS"]
};

console.log("Company Name :", company.companyName);
console.log("Location :", company.location);
console.log("Second Technology :", company.technologies[1]);
console.log("Total Technologies :", company.technologies.length);

// Task 4: Salary Calculator
let basicSalary = 30000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Total Salary :", totalSalary);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);

// Task 5: Attendance Checker
let attendance = 92;

let examStatus =
attendance >= 75
? "Eligible for Exam"
: "Not Eligible";

console.log(examStatus);

// Task 6: Login Verification
let username = "admin";
let password = "12345";

let loginStatus =
(username === "admin" && password === "12345")
? "Login Successful"
: "Invalid Credentials";

console.log(loginStatus);

// Task 7: Product Billing
let productName = "Laptop";
let productPrice = 45000;
let quantity = 2;

let totalBill = productPrice * quantity;

console.log(`
Product  : ${productName}
Price    : ${productPrice}
Quantity : ${quantity}
Total    : ${totalBill}
`);

// Task 8: Increment & Decrement
let visitors = 100;

console.log("Initial Value :", visitors);

console.log("Pre Increment :", ++visitors); // 101

console.log("Post Increment :", visitors++); // 101
console.log("After Post Increment :", visitors); // 102

console.log("Pre Decrement :", --visitors); // 101

console.log("Post Decrement :", visitors--); // 101
console.log("After Post Decrement :", visitors); // 100


// Task 9: Comparison Checker
console.log(10 == "10");      // true
console.log(10 === "10");     // false

console.log(20 != "20");      // false
console.log(20 !== "20");     // true

console.log(5 < 10);          // true
console.log(15 >= 20);        // false

console.log(100 <= 100);      // true


// Task 10: User Interaction
let empName = prompt("Enter Employee Name");

let empAge = prompt("Enter Employee Age");

let joinCompany = confirm(
    "Do you want to join our company?"
);

joinCompany
? alert(`Welcome ${empName}`)
: alert("Thank You");


// Final Challenge: Mini Employee Portal
// Employee Object

const employee = {
    name: "Manikanta",
    id: "EMP20471",
    department: "Development",
    experience: 3,
    salary: 50000
};

// Skills Array

let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "Node.js"
];

// Company Object

const company = {
    companyName: "Stackly IT",
    location: "Hyderabad"
};

// Bonus Calculation

let bonus = 5000;
let finalSalary = employee.salary + bonus;

// Attendance

let attendance = 92;

let examStatus =
attendance >= 75
? "Eligible"
: "Not Eligible";

// Login Verification

let username = "admin";
let password = "12345";

let loginStatus =
(username === "admin" &&
password === "12345")
? "Success"
: "Failed";

// Console Output

console.log(`
==============================
      EMPLOYEE PORTAL
==============================

Employee Name : ${employee.name}

Employee ID   : ${employee.id}

Department    : ${employee.department}

Experience    : ${employee.experience} Years

Salary        : ₹${employee.salary}

Bonus         : ₹${bonus}

Final Salary  : ₹${finalSalary}

Skills        : ${skills.join(", ")}

Attendance    : ${attendance}%

Exam Status   : ${examStatus}

Login Status  : ${loginStatus}

Company       : ${company.companyName}

Location      : ${company.location}

==============================
`);



// Bonus Project: Student Report Card
const student = {
    name: "Manikanta",
    rollNo: "ST7751",
    html: 90,
    css: 85,
    javascript: 95
};

let total =
student.html +
student.css +
student.javascript;

let percentage = total / 3;

let grade =
percentage >= 90
? "A+"
: "A";

console.log(`
====================
STUDENT REPORT CARD
====================

Name       : ${student.name}
Roll No    : ${student.rollNo}

HTML       : ${student.html}
CSS        : ${student.css}
JavaScript : ${student.javascript}

Total      : ${total}
Percentage : ${percentage.toFixed(2)}%

Grade      : ${grade}

====================
`);