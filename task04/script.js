// Task 1: Employee Management System

let employees = [
    {
        name: "Manikanta",
        id: 101,
        salary: 30000
    },
    {
        name: "Malli karjuna",
        id: 102,
        salary: 60000
    },
    {
        name: "Sravanthi",
        id: 103,
        salary: 45000
    }
];

console.log("===== Employee Details =====");

for(let emp of employees){

    console.log("Name :", emp.name);
    console.log("ID :", emp.id);
    console.log("Salary :", emp.salary);

    if(emp.salary >= 50000){
        console.log("Employee Eligible For Bonus");
    }
    else{
        console.log("Employee Not Eligible For Bonus");
    }

    console.log("------------------------");
}


// Task 2 : Student Result Portal

let studentName = prompt("Enter Student Name");

let m1 = Number(prompt("Enter HTML Marks"));
let m2 = Number(prompt("Enter CSS Marks"));
let m3 = Number(prompt("Enter JavaScript Marks"));

let total = m1 + m2 + m3;
let percentage = total / 3;

console.log("Student :", studentName);
console.log("Total :", total);
console.log("Percentage :", percentage);

if(percentage >= 90){
    console.log("Grade : A+");
}
else if(percentage >= 80){
    console.log("Grade : A");
}
else if(percentage >= 70){
    console.log("Grade : B");
}
else if(percentage >= 60){
    console.log("Grade : C");
}
else{
    console.log("Grade : Fail");
}


// Task 3 : E-Commerce Cart

let products = [
    {
        name:"Laptop",
        price:50000
    },
    {
        name:"Mouse",
        price:1000
    },
    {
        name:"Keyboard",
        price:2000
    }
];

function calculateBill(){

    let total = 0;

    for(let product of products){
        total += product.price;
    }

    console.log("Total Bill :", total);

    if(total > 5000){

        let discount = total * 0.10;
        let finalBill = total - discount;

        console.log("Discount :", discount);
        console.log("Final Bill :", finalBill);
    }
    else{
        console.log("Final Bill :", total);
    }

}

calculateBill();

// Task 4 : Login Authentication

let username = "mani";
let password = "7777";

let enteredUsername = prompt("Enter Username");
let enteredPassword = prompt("Enter Password");

let result =
(
enteredUsername === username &&
enteredPassword === password
)
?
"Login Successful"
:
"Invalid Credentials";

console.log(result);

// Task 5 : Traffic Signal System

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


// Task 6: ATM Withdrawal System


let balance = Number(prompt("Enter Account Balance"));
let withdrawAmount = Number(prompt("Enter Withdrawal Amount"));

if(withdrawAmount <= balance){

    balance -= withdrawAmount;

    console.log("Transaction Successful");
    console.log("Withdraw Amount :", withdrawAmount);
    console.log("Remaining Balance :", balance);

}
else{

    console.log("Insufficient Balance");

}

// Task 7: Online Food Order 


function orderPlaced(callback){

    console.log("Order Received");

    callback();

}

function prepareFood(callback){

    console.log("Food Preparing");

    callback();

}

function deliverFood(){

    console.log("Food Delivered");

}

orderPlaced(function(){

    prepareFood(function(){

        deliverFood();

    });

});

// Task 8: Cashback Generator (Generator Function)

function* cashbackGenerator(){

    yield "10% Cashback";

    yield "20% Cashback";

    yield "50% Cashback";

    yield "Better Luck Next Time";

}

let offers = cashbackGenerator();

console.log(offers.next().value);

console.log(offers.next().value);

console.log(offers.next().value);

console.log(offers.next().value);


// Task 9: Hospital Patient Check (Nested If)

let age = Number(prompt("Enter Age"));

let weight = Number(prompt("Enter Weight"));

if(age > 18){

    if(weight > 50){

        console.log("Eligible For Treatment");

    }
    else{

        console.log("Not Eligible");

    }

}
else{

    console.log("Not Eligible");

}

// Task 10: Mini Employee Portal (CRUD)


let employees = [

    {
        id:101,
        name:"Manikanta",
        salary:30000
    },

    {
        id:102,
        name:"Lakshmi",
        salary:60000
    }

];

// Add Employee

function addEmployee(id,name,salary){

    employees.push({

        id:id,
        name:name,
        salary:salary

    });

}

// View Employees

function viewEmployees(){

    console.log("===== EMPLOYEE LIST =====");

    for(let emp of employees){

        console.log(emp);

    }

}

// Calculate Bonus

function calculateBonus(){

    console.log("===== BONUS STATUS =====");

    for(let emp of employees){

        if(emp.salary >= 50000){

            console.log(emp.name + " Eligible For Bonus");

        }
        else{

            console.log(emp.name + " Not Eligible");

        }

    }

}

// Search Employee

function searchEmployee(id){

    for(let emp of employees){

        if(emp.id === id){

            console.log("Employee Found");

            console.log(emp);

        }

    }

}

// Delete Employee

function deleteEmployee(id){

    employees = employees.filter(

        emp => emp.id !== id

    );

}

// Employee Count

function employeeCount(){

    console.log("Total Employees :", employees.length);

}

// Calling Functions

addEmployee(103,"David",45000);

viewEmployees();

calculateBonus();

searchEmployee(102);

deleteEmployee(101);

employeeCount();

viewEmployees();



