// Task 1: Employee Information System

let employee = {
    name: prompt("Enter Employee Name"),
    age: Number(prompt("Enter Employee Age")),
    department: prompt("Enter Employee Department"),
    salary: Number(prompt("Enter Employee Salary"))
};

console.log(employee);

if(employee.salary > 30000){
    console.log("Eligible for Bonus");
}
else{
    console.log("Not Eligible");
}

// Task 2: Supermarket Billing

let productName = prompt("Enter Product Name");
let productPrice = Number(prompt("Enter Product Price"));
let quantity = Number(prompt("Enter Quantity"));

let totalBill = productPrice * quantity;
let finalAmount;

if(totalBill > 5000){
    finalAmount = totalBill - (totalBill * 0.10);
}
else{
    finalAmount = totalBill;
}

console.log("Product :", productName);
console.log("Total Bill :", totalBill);
console.log("Final Amount :", finalAmount);

// Task 3: Student Result Portal

let studentName = prompt("Enter Student Name");
let marks = Number(prompt("Enter Marks"));

if(marks >= 90){
    console.log("Grade A");
}
else if(marks >= 75){
    console.log("Grade B");
}
else if(marks >= 50){
    console.log("Grade C");
}
else{
    console.log("Fail");
}

// Task 4: Bank ATM Eligibility

let userName = prompt("Enter User Name");
let balance = Number(prompt("Enter Account Balance"));
let withdrawal = Number(prompt("Enter Withdrawal Amount"));

if(withdrawal <= balance){
    console.log("Transaction Successful");
}
else{
    console.log("Insufficient Balance");
}

// Task 5: Login Validation

let username = "admin";
let password = "12345";

let enteredUsername = prompt("Enter Username");
let enteredPassword = prompt("Enter Password");

if(
    enteredUsername === username &&
    enteredPassword === password
){
    console.log("Login Successful");
}
else{
    console.log("Invalid Username or Password");
}


// Task 6: Online Food Order

let foods = [
    "Pizza",
    "Burger",
    "Biryani",
    "Dosa",
    "Pasta",
    "Noodles",
    "Sandwich",
    "Ice Cream"
];

console.log("First Item :", foods[0]);
console.log("Last Item :", foods[foods.length - 1]);
console.log("Total Items :", foods.length);

for(let food of foods){
    console.log(food);
}

// Task 7: Company Employee Directory

let employee = {
    name: "Manikanta",
    age: 25,
    department: "Development",
    salary: 540000,
    experience: "3 Years"
};

for(let key in employee){
    console.log(key, ":", employee[key]);
}

// Task 8: Traffic Signal System

let signal = prompt("Enter Signal Color");

switch(signal.toLowerCase()){

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

// Task 9: Age Category Checker

let age = Number(prompt("Enter Your Age"));

if(age >= 0 && age <= 12){
    console.log("Child");
}
else if(age >= 13 && age <= 19){
    console.log("Teenager");
}
else if(age >= 20 && age <= 59){
    console.log("Adult");
}
else{
    console.log("Senior Citizen");
}

// Task 10: Employee Attendance

let employeeName = prompt("Enter Employee Name");
let attendance = prompt("Enter Attendance (Present/Absent)");

let status =
attendance.toLowerCase() === "present"
? "Present"
: "Absent";

console.log(`Welcome ${employeeName}`);
console.log(`Attendance : ${status}`);


