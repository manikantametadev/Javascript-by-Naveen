// Task 1 - Student Management System

let students = [
{
    name:"Manikanta",
    id:101,
    mark:85
},
{
    name:"Krishna",
    id:102,
    mark:45
},
{
    name:"Rama",
    id:103,
    mark:25
}
];

// Print all students
console.log("All Students");

for(let student of students){
    console.log(student);
}

// Print only names
console.log("Student Names");

for(let student of students){
    console.log(student.name);
}

// Find student ID
let searchId = 102;
let found = false;

for(let student of students){

    if(student.id === searchId){

        console.log("Student Found");
        console.log(student);

        found = true;
    }

}

if(!found){
    console.log("Student Not Found");
}

// Passed Students
console.log("Passed Students");

for(let student of students){

    if(student.mark >= 35){

        console.log(student.name);

    }

}

// Total Students
console.log("Total Students :", students.length);


// Task 2 - Employee Salary System

let employees = [

{
    name:"Manikanta",
    salary:30000
},

{
    name:"Pawan",
    salary:45000
},

{
    name:"Venkat",
    salary:60000
}

];

// Highest Salary

let highest = employees[0];

for(let emp of employees){

    if(emp.salary > highest.salary){
        highest = emp;
    }

}

console.log("Highest Salary :", highest.salary);

// Lowest Salary

let lowest = employees[0];

for(let emp of employees){

    if(emp.salary < lowest.salary){
        lowest = emp;
    }

}

console.log("Lowest Salary :", lowest.salary);

// Add Bonus

console.log("Salary After Bonus");

for(let emp of employees){

    console.log(emp.name, emp.salary + 5000);

}

// Total Salary

let total = 0;

for(let emp of employees){

    total += emp.salary;

}

console.log("Total Salary :", total);

// Salary Above 40000

console.log("Employees Above 40000");

for(let emp of employees){

    if(emp.salary > 40000){

        console.log(emp.name);

    }

}


// Task 3 - Shopping Cart

let products = [

{
    name:"Laptop",
    price:50000
},

{
    name:"Mouse",
    price:500
},

{
    name:"Keyboard",
    price:1500
}

];

// Product Names

console.log("Products");

for(let product of products){

    console.log(product.name);

}

// Total Bill

let totalBill = 0;

for(let product of products){

    totalBill += product.price;

}

console.log("Total Bill :", totalBill);

// Search Product

let search = "Mouse";

let available = false;

for(let product of products){

    if(product.name === search){

        console.log("Product Found");

        console.log(product);

        available = true;

    }

}

if(!available){

    console.log("Product Not Found");

}

// Discount

let discount = totalBill * 0.10;

let finalBill = totalBill - discount;

console.log("Discount :", discount);

console.log("Final Bill :", finalBill);


// Task 4 - Bank Account

let account = {

    name:"Manikanta",

    balance:50000

};

// Deposit

account.balance += 10000;

// Withdraw

account.balance -= 5000;

console.log("Current Balance :", account.balance);

// Check Balance

if(account.balance < 20000){

    console.log("Low Balance");

}

else{

    console.log("Balance is Sufficient");

}

// Account Details

console.log(account);


// Task 5 - Company Login

let username = "admin";

let password = "12345";

let enteredUsername = prompt("Enter Username");

let enteredPassword = prompt("Enter Password");

if(

enteredUsername === username &&

enteredPassword === password

){

    alert("Welcome");

}

else{

    alert("Invalid Username or Password");

}



// Task 6 - Traffic Signal


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


// Task 7 - ATM Machine

// 1 - Balance

// 2 - Deposit

// 3 - Withdraw

// 4 - Exit

let balance = 50000;

let choice = Number(prompt(`
1. Balance
2. Deposit
3. Withdraw
4. Exit
`));

switch(choice){

    case 1:
        console.log("Current Balance : ₹" + balance);
        break;

    case 2:

        let deposit = Number(prompt("Enter Deposit Amount"));

        balance += deposit;

        console.log("Updated Balance : ₹" + balance);

        break;

    case 3:

        let withdraw = Number(prompt("Enter Withdraw Amount"));

        if(withdraw <= balance){

            balance -= withdraw;

            console.log("Withdrawal Successful");

            console.log("Remaining Balance : ₹" + balance);

        }

        else{

            console.log("Insufficient Balance");

        }

        break;

    case 4:

        console.log("Thank You... Visit Again!");

        break;

    default:

        console.log("Invalid Option");
}



// Task 8 - Cricket Score

let score = [10,25,40,60,80,100];

let highestsc = score[0];
let lowestsc = score[0];
let totalsc = 0;

for(let runs of score){

    if(runs > highest){
        highest = runs;
    }

    if(runs < lowest){
        lowest = runs;
    }

    total += runs;

}

let average = total / score.length;

console.log("Highest Score :", highestsc);

console.log("Lowest Score :", lowestsc);

console.log("Total Score :", totalsc);

console.log("Average Score :", average);



// Task 9 - Movie Ticket Booking

let age = Number(prompt("Enter Your Age"));

let booking = confirm("Do you want to book the ticket?");

if(age >= 18){

    if(booking){

        alert("Movie Ticket Booked Successfully");
        console.log("Movie Ticket Booked Successfully");
        

    }

    else{

        alert("Booking Cancelled");

    }

}

else{

    alert("Not Allowed");
    console.log("Not Aloowed to Watch Movie");
    

}



// Task 10 - Hospital Appointment


let token = Number(prompt(`
Enter Token

1. Doctor A
2. Doctor B
3. Doctor C
`));

switch(token){

    case 1:

        console.log("Appointment with Doctor A");

        break;

    case 2:

        console.log("Appointment with Doctor B");

        break;

    case 3:

        console.log("Appointment with Doctor C");

        break;

    default:

        console.log("Invalid Token");
}


// Task 11 - Array Method Practice

let fruits = ["Apple","Orange","Banana"];

console.log("Original Array");
console.log(fruits);

// push()

fruits.push("Mango");
console.log("After push()");
console.log(fruits);

// pop()

fruits.pop();
console.log("After pop()");
console.log(fruits);

// shift()

fruits.shift();
console.log("After shift()");
console.log(fruits);

// unshift()

fruits.unshift("Grapes");
console.log("After unshift()");
console.log(fruits);

// splice()

fruits.splice(1,1,"Pineapple");
console.log("After splice()");
console.log(fruits);

// slice()

let newArray = fruits.slice(0,2);

console.log("After slice()");
console.log(newArray);


// Task 12 - Higher Order Methods

let employeess = [

{name:"A",salary:20000},

{name:"B",salary:35000},

{name:"C",salary:50000},

{name:"D",salary:70000}

];

// map()

let increasedSalary = employeess.map(emp=>{

    return{

        ...emp,

        salary:emp.salary+5000

    }

});

console.log("After Salary Increment");

console.log(increasedSalary);

// filter()

let salaryAbove30000 = employeess.filter(emp=>{

    return emp.salary>30000;

});

console.log("Salary > 30000");

console.log(salaryAbove30000);

// find()

let employee = employeess.find(emp=>{

    return emp.salary===50000;

});

console.log("Salary 50000");

console.log(employee);

// reduce()

let totalSalary = employeess.reduce(

(total,emp)=>{

    return total+emp.salary;

},0

);

console.log("Total Salary");

console.log(totalSalary);

// some()

let checkSome = employeess.some(emp=>{

    return emp.salary>60000;

});

console.log(checkSome);

// every()

let checkEvery = employeess.every(emp=>{

    return emp.salary>15000;

});

console.log(checkEvery);


// Task 13 - String Practice

let company = " Stackly IT ";

console.log(company);

// Uppercase

console.log(company.toUpperCase());

// Lowercase

console.log(company.toLowerCase());

// Trim

console.log(company.trim());

// Replace

console.log(

company.replace("IT","Software")

);

// Includes

console.log(

company.includes("Stackly")

);

// Split

console.log(

company.trim().split(" ")

);

// Task 14 - Digital Clock

let count = 0;

let timer = setInterval(()=>{

    let now = new Date();

    console.log(now.toLocaleTimeString());

    count++;

    if(count===10){

        clearInterval(timer);

        console.log("Clock Stopped");

    }

},1000);


// Task 15 - Fake Store API

fetch("https://fakestoreapi.com/products")

.then(response=>response.json())

.then(products=>{

    console.log("All Product Titles");

    products.forEach(product=>{

        console.log(product.title);

    });

    console.log("Prices");

    products.forEach(product=>{

        console.log(product.price);

    });

    console.log("Price Greater Than 100");

    products.forEach(product=>{

        if(product.price>100){

            console.log(product.title);

        }

    });

    console.log("Total Products");

    console.log(products.length);

    console.log("Categories");

    products.forEach(product=>{

        console.log(product.category);

    });

});


// Final Mini Project
// EMPLOYEE PAYROLL SYSTEM


let employees_mini = [
    {
        id: 101,
        name: "Manikanta",
        department: "Development",
        salary: 30000
    },
    {
        id: 102,
        name: "Sathish",
        department: "Testing",
        salary: 60000
    },
    {
        id: 103,
        name: "Yamini",
        department: "HR",
        salary: 45000
    },
    {
        id: 104,
        name: "Anil Kumar",
        department: "Support",
        salary: 55000
    }
];

// View Employees

function viewEmployees(){

    console.log("EMPLOYEE LIST");

    for(let employee of employees_mini){

        console.log(employee);

    }

}

// Search Employee By ID

function searchEmployee(id){

    let employee = employees_mini.find(emp => emp.id === id);

    if(employee){

        console.log("Employee Found");

        console.log(employee);

    }

    else{

        console.log("Employee Not Found");

    }

}

// Highest Salary

function highestSalary(){

    let highest = employees_mini[0];

    for(let employee of employees_mini){

        if(employee.salary > highest.salary){

            highest = employee;

        }

    }

    console.log("Highest Salary");

    console.log(highest);

}

// Lowest Salary

function lowestSalary(){

    let lowest = employees_mini[0];

    for(let employee of employees_mini){

        if(employee.salary < lowest.salary){

            lowest = employee;

        }

    }

    console.log("Lowest Salary");

    console.log(lowest);

}

// Total Salary

function totalSalary_mini(){

    let total = 0;

    for(let employee of employees_mini){

        total += employee.salary;

    }

    console.log("Total Salary : ₹" + total);

}

// Employees Above 40000

function salaryAbove40000(){

    console.log("Employees Salary > 40000");

    let result = employees_mini.filter(

        employee => employee.salary > 40000

    );

    console.log(result);

}


viewEmployees();

searchEmployee(102);

highestSalary();

lowestSalary();

totalSalary_mini();

salaryAbove40000();


// Add Bonus

function addBonus(bonus){

    console.log("BONUS DETAILS");

    let updatedEmployees = employees_mini.map(employee =>{

        return{

            ...employee,

            salary: employee.salary + bonus

        }

    });

    updatedEmployees.forEach(employee=>{

        console.log(`${employee.name} : ₹${employee.salary}`);

    });

}

// Employee Report

function employeeReport(){

    console.log("EMPLOYEE REPORT");

    employees_mini.forEach(employee=>{

        console.log(`

Employee ID    : ${employee.id}

Employee Name  : ${employee.name}

Department     : ${employee.department}

Salary         : ₹${employee.salary}

`);

    });

}

// Current Date & Time

function currentDateTime(){

    let today = new Date();

    console.log("Current Date : " + today.toLocaleDateString());

    console.log("Current Time : " + today.toLocaleTimeString());

}

// Callback Function

function login(callback){

    console.log("Login Successful");

    callback();

}

function dashboard(){

    console.log("Opening Employee Dashboard...");

}

login(dashboard);

// Total Salary using reduce()

function totalSalaryReduce(){

    let total = employees_mini.reduce(

        (sum,employee)=>sum+employee.salary,

        0

    );

    console.log("Total Salary (Reduce) : ₹" + total);

}

// Average Salary

function averageSalary(){

    let total = employees_mini.reduce(

        (sum,employee)=>sum+employee.salary,

        0

    );

    let average = total / employees_mini.length;

    console.log("Average Salary : ₹" + average);

}

// Search Employee by Name

function searchByName(name){

    let employee = employees_mini.find(

        emp=>emp.name.toLowerCase()===name.toLowerCase()

    );

    if(employee){

        console.log(employee);

    }

    else{

        console.log("Employee Not Found");

    }

}

// Sort Salary

    function sortSalary(){

        let sortedEmployees=[...employees_mini];

        sortedEmployees.sort(

            (a,b)=>a.salary-b.salary

        );

        console.log("Salary Sorted");

        console.log(sortedEmployees);

    }

// Menu using Switch

function menu(choice){

    switch(choice){

        case 1:

            viewEmployees();

            break;

        case 2:

            searchEmployee(102);

            break;

        case 3:

            highestSalary();

            break;

        case 4:

            lowestSalary();

            break;

        case 5:

            totalSalary();

            break;

        case 6:

            salaryAbove40000();

            break;

        case 7:

            employeeReport();

            break;

        case 8:

            currentDateTime();

            break;

        default:

            console.log("Exit");

    }

}

// Function Calls

addBonus(5000);

employeeReport();

currentDateTime();

totalSalaryReduce();

averageSalary();

searchByName("John");

sortSalary();

menu(1);

menu(3);

menu(8);

// Fetch Employee Data (Promise)

function fetchEmployees() {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(response => response.json())

        .then(data => {

            console.log("EMPLOYEES FROM API");

            data.forEach(employee => {

                console.log(`
ID      : ${employee.id}
Name    : ${employee.name}
Email   : ${employee.email}
Company : ${employee.company.name}
`);

            });

        })

        .catch(error => {

            console.log("Error :", error);

        });

}


async function fetchEmployeesAsync() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const employees = await response.json();

        console.log("ASYNC EMPLOYEES");

        console.table(employees);

    }

    catch(error){

        console.log(error);

    }

}

// Employee Statistics

function employeeStatistics(){

    console.log("EMPLOYEE STATISTICS");

    console.log("Total Employees :", employees_mini.length);

    let total = employees.reduce(
        (sum,emp)=>sum+emp.salary,
        0
    );

    console.log("Total Salary : ₹" + total);

    console.log(
        "Average Salary : ₹" +
        (total/employees.length).toFixed(2)
    );

}

// Highest Paid Department

function highestPaidDepartment(){

    let highest = employees_mini[0];

    for(let emp of employees_mini){

        if(emp.salary > highest.salary){

            highest = emp;

        }

    }

    console.log(
        "Highest Paid Department :",
        highest.department
    );

}

// Employee Bonus Report

function bonusReport(){

    console.log("BONUS REPORT");

    employees_mini.forEach(employee=>{

        let bonus =
        employee.salary >= 50000
        ? 5000
        : 3000;

        console.log(
`${employee.name}

Salary : ₹${employee.salary}

Bonus : ₹${bonus}

Final Salary : ₹${employee.salary+bonus}
`
);

    });

}

// Company Payroll Summary

function payrollSummary(){

    console.log(`

         COMPANY PAYROLL


Company Name : Stackly IT

Location : Coimbatore

Total Employees : ${employees_mini.length}

`);

    let total = employees_mini.reduce(

        (sum,emp)=>sum+emp.salary,

        0

    );

    console.log("Total Salary : ₹"+total);

    console.log("Generated On :");

    console.log(new Date().toLocaleString());

}

// Console Menu

function payrollMenu(option){

    switch(option){

        case 1:

            viewEmployees();
            break;

        case 2:

            searchEmployee(103);
            break;

        case 3:

            highestSalary();
            break;

        case 4:

            lowestSalary();
            break;

        case 5:

            totalSalary();
            break;

        case 6:

            addBonus(5000);
            break;

        case 7:

            employeeReport();
            break;

        case 8:

            employeeStatistics();
            break;

        case 9:

            payrollSummary();
            break;

        case 10:

            fetchEmployees();
            break;

        default:

            console.log("Thank You");

    }

}

// Calling Functions

employeeStatistics();

highestPaidDepartment();

bonusReport();

payrollSummary();

fetchEmployees();


payrollMenu(1);

payrollMenu(8);

payrollMenu(9);

