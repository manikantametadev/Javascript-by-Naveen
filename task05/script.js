// Task 1: Employee Salary

function yearlySalary(monthlySalary) {

    return monthlySalary * 12;

}

let salary = yearlySalary(45000);

console.log("Yearly Salary : ₹" + salary);

// Task 2: Student Pass or Fail

function checkResult(marks){

    if(marks >= 35){

        return "Pass";

    }
    else{

        return "Fail";

    }

}

console.log(checkResult(72));


// Task 3: Food Bill

function foodBill(price, quantity){

    return price * quantity;

}

let total = foodBill(180,3);

console.log("Total Bill : ₹" + total);


// Task 4: Welcome Employee

function welcomeEmployee(name, department){

    console.log("Welcome " + name);

    console.log("Department : " + department);

}

welcomeEmployee("Manikanta","Development");


// Task 5: Shopping Discount

function finalAmount(price, discount){

    return price - discount;

}

console.log("Final Amount : ₹" + finalAmount(5000,500));


// Task 6: Company Login (Callback Function)

function login(callback){

    console.log("Login Successful");

    callback();

}

function dashboard(){

    console.log("Loading Dashboard...");

}

login(dashboard);


// Task 7: Food Delivery (Higher Order Function)

function order(callback){

    console.log("Order Received");

    callback();

}

function preparing(callback){

    console.log("Preparing Food");

    callback();

}

function delivery(callback){

    console.log("Out for Delivery");

    callback();

}

function delivered(){

    console.log("Delivered");

}

order(function(){

    preparing(function(){

        delivery(function(){

            delivered();

        });

    });

});



// Task 8: Lucky Draw (Generator Function)

function* coupons(){

    yield "10%";

    yield "20%";

    yield "50%";

    yield "Better Luck Next Time";

}

let offer = coupons();

console.log(offer.next().value);

console.log(offer.next().value);

console.log(offer.next().value);

console.log(offer.next().value);


// Task 9: Employee Bonus (Closure Function)

function bonus(salary){

    return function(bonusAmount){

        console.log("Total Salary : " + (salary + bonusAmount));

    }

}

bonus(50000)(5000);



// Task 10: Merge Employee Details (Spread Operator)

let employeePersonal = {

    name : "Manikanta",

    age : 27

};

let employeeOffice = {

    department : "Development",

    salary : 40000

};

let employee = {

    ...employeePersonal,

    ...employeeOffice

};

console.log(employee);



// Task 11: Shopping Cart (Spread Operator)


let cart1 = ["Mobile", "Laptop"];

let cart2 = ["Headphone", "Keyboard"];

let cart = [...cart1, ...cart2];

console.log("Merged Cart :", cart);



// Task 12: Student Marks (Rest Operator)

function student(name, ...marks){

    let total = 0;

    for(let mark of marks){
        total += mark;
    }

    let average = total / marks.length;

    console.log("Student :", name);
    console.log("Total Marks :", total);
    console.log("Average :", average);

}

student("Manikanta",90,85,88,95);



// Task 13: Product Details (Object Destructuring)

let product = {

    name:"Laptop",

    price:65000,

    brand:"Dell",

    stock:20

};

let {name, price} = product;

console.log("Name :", name);

console.log("Price :", price);



// Task 14: Customer Details (Array Destructuring)

let customer = [

    101,

    "Manikanta",

    "Vijayawada",

    9182444088

];

let [id, name, city, mobile] = customer;

console.log("ID :", id);

console.log("Name :", name);

console.log("City :", city);


// Task 15: Add Product (push())

let cart = [

    "Mobile",

    "Laptop"

];

cart.push("Headphone");

console.log(cart);


// Task 16: Remove Last Product (pop())

let cart = [

    "Mobile",

    "Laptop",

    "Headphone"

];

cart.pop();

console.log(cart);


// Task 17: Replace Employee (splice())

let employees = [

    "Rahul",

    "Arun",

    "John",

    "David"

];

employees.splice(2,1,"Manikanta");

console.log(employees);



// Task 18: Search Product (includes())

let products = [

    "Mouse",

    "Keyboard",

    "Monitor",

    "Laptop"

];

let available = products.includes("Laptop");

console.log("Laptop Available :", available);


// Task 19: Employee Ranking (sort())

let salaries = [

    25000,

    45000,

    30000,

    70000

];

salaries.sort(function(a,b){

    return a-b;

});

console.log(salaries);



// Task 20: Reverse Chat Messages

let messages = [

    "Hi",

    "Hello",

    "How are you?",

    "Good Morning"

];

messages.reverse();

console.log(messages);



// Bonus Team Challenge (Real-Time)
// Mini Project: Employee Management System


let employees = [

    {
        id: 101,
        name: "Ramu",
        department: "Development",
        salary: 50000,
        experience: 3
    },

    {
        id: 102,
        name: "Krishna",
        department: "Testing",
        salary: 35000,
        experience: 2
    },

    {
        id: 103,
        name: "Sweatha",
        department: "HR",
        salary: 65000,
        experience: 5
    }

];




function viewEmployees(){

    console.log(" EMPLOYEES ");

    for(let emp of employees){

        let {id,name,department,salary,experience} = emp;

        console.log(`
ID          : ${id}
Name        : ${name}
Department  : ${department}
Salary      : ₹${salary}
Experience  : ${experience} Years

`);

    }

}



function addEmployee(id,name,department,salary,experience){

    employees.push({

        id,
        name,
        department,
        salary,
        experience

    });

    console.log(name + " Added Successfully");

}




function searchEmployee(id){

    let found = employees.find(emp => emp.id === id);

    if(found){

        console.log("Employee Found");

        console.log(found);

    }

    else{

        console.log("Employee Not Found");

    }

}



function searchByName(name){

    let employee = employees.find(

        emp => emp.name.toLowerCase() === name.toLowerCase()

    );

    if(employee){

        console.log(employee);

    }

    else{

        console.log("Employee Not Found");

    }

}



function calculateBonus(){

    console.log("BONUS DETAILS");

    for(let emp of employees){

        let bonus =
        emp.salary >= 50000
        ? 5000
        : 2000;

        console.log(`
${emp.name}

Salary : ₹${emp.salary}

Bonus : ₹${bonus}

Final Salary : ₹${emp.salary + bonus}

`);

    }

}



function updateSalary(id,newSalary){

    let employee = employees.find(

        emp => emp.id === id

    );

    if(employee){

        employee.salary = newSalary;

        console.log("Salary Updated");

    }

    else{

        console.log("Employee Not Found");

    }

}



function deleteEmployee(id){

    employees = employees.filter(

        emp => emp.id !== id

    );

    console.log("Employee Deleted");

}



function sortBySalary(){

    employees.sort(

        (a,b)=>a.salary-b.salary

    );

    console.log("Employees Sorted");

}



function employeeCount(){

    console.log(

        "Total Employees :",

        employees.length

    );

}



function highestSalary(){

    let highest = employees[0];

    for(let emp of employees){

        if(emp.salary > highest.salary){

            highest = emp;

        }

    }

    console.log("Highest Salary Employee");

    console.log(highest);

}



function employeeSkills(name,...skills){

    console.log(name);

    console.log(skills.join(", "));

}



const personal = {

    bloodGroup:"O+",

    city:"Hyderabad"

};

const office = {

    department:"Development",

    shift:"Morning"

};

const profile = {

    ...personal,

    ...office

};

console.log(profile);



viewEmployees();

addEmployee(

104,

"Rahul",

"Support",

40000,

2

);

viewEmployees();

searchEmployee(102);

searchByName("David");

calculateBonus();

updateSalary(102,55000);

viewEmployees();

sortBySalary();

viewEmployees();

highestSalary();

employeeCount();

employeeSkills(

"Naveen",

"HTML",

"CSS",

"JavaScript",

"React",

"Node.js"

);

deleteEmployee(103);

employeeCount();

viewEmployees();




