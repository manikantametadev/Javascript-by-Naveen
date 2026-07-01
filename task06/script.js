// Task 1 - Find the Highest Salary

let employees = [
    {
        name: "Manikanta",
        id: 101,
        salary: 30000
    },
    {
        name: "Srinivas",
        id: 102,
        salary: 60000
    },
    {
        name: "Govind",
        id: 103,
        salary: 45000
    }
];

let highest = employees[0];

for(let emp of employees){

    if(emp.salary > highest.salary){
        highest = emp;
    }

}

console.log("Highest Salary :", highest.salary);
console.log("Employee Name :", highest.name);


// Task 2 - Find Employee by ID

let employees = [
    {
        name: "Manikanta",
        id: 101,
        salary: 30000
    },
    {
        name: "Raju",
        id: 102,
        salary: 60000
    },
    {
        name: "Anil",
        id: 103,
        salary: 45000
    }
];

let searchId = 103;

let found = false;

for(let emp of employees){

    if(emp.id === searchId){

        console.log("Employee Found");
        console.log("Name :", emp.name);
        console.log("Salary :", emp.salary);

        found = true;
    }

}

if(!found){
    console.log("Employee Not Found");
}

// Task 3 - Calculate Salary with Bonus

let employees = [
    {
        name: "Manikanta",
        salary: 30000
    },
    {
        name: "Jagadeesh",
        salary: 60000
    },
    {
        name: "Sathish",
        salary: 45000
    }
];

let bonus = 5000;

for(let emp of employees){

    let totalSalary = emp.salary + bonus;

    console.log(emp.name + " : " + totalSalary);

}


// Task 4 - Experience Check


let employees = [

{
    name:"Manikanta",
    experience:2
},

{
    name:"Mallikarjuna",
    experience:7
},

{
    name:"Arjun",
    experience:5
}

];

for(let emp of employees){

    if(emp.experience >= 5){

        console.log(emp.name + " - Senior Employee");

    }

    else{

        console.log(emp.name + " - Junior Employee");

    }

}


// Task 5 - Display Only Employee Names

let employees = [

{
    name:"Manikanta"
},

{
    name:"Govind"
},

{
    name:"Kalyan"
}

];

for(let emp of employees){

    console.log(emp.name);

}


// Task 6 - Display Employee IDs


let employees = [

{
    id:101
},

{
    id:102
},

{
    id:103
}

];

for(let emp of employees){

    console.log(emp.id);

}


// Task 7 - Find Total Salary

let employees = [

{
    salary:30000
},

{
    salary:60000
},

{
    salary:45000
}

];

let totalSalary = 0;

for(let emp of employees){

    totalSalary += emp.salary;

}

console.log("Total Salary :", totalSalary);


// Task 8 - Employees Earning More Than ₹40,000

let employees = [

{
    name:"Manikanta",
    salary:30000
},

{
    name:"Pawan Kalyan",
    salary:60000
},

{
    name:"Omni",
    salary:45000
}

];

for(let emp of employees){

    if(emp.salary > 40000){

        console.log(emp.name);

    }

}


// Task 9 - Increase Salary

let employees = [

{
    name:"Manikanta",
    salary:30000
},

{
    name:"Tharun",
    salary:60000
},

{
    name:"Mallikarjuna",
    salary:45000
}

];

for(let emp of employees){

    emp.salary += 5000;

    console.log(emp.name + " : " + emp.salary);

}


// Task 10 - Employee Report

let employees = [

{
    name:"Manikanta",
    id:101,
    salary:30000
},

{
    name:"Venkatesh",
    id:102,
    salary:60000
},

{
    name:"Srikanth",
    id:103,
    salary:45000
}

];

for(let emp of employees){

console.log(`

Employee Name : ${emp.name}

Employee ID : ${emp.id}

Salary : ${emp.salary}

`);

}


// Challenge Task

let employees = [
{
    name:"Manikanta",
    id:101,
    salary:30000
},
{
    name:"Srikanth",
    id:102,
    salary:60000
},
{
    name:"Ram",
    id:103,
    salary:45000
}
];


console.log("Total Employees :", employees.length);


let highestSalary = employees[0];

for(let emp of employees){

    if(emp.salary > highestSalary.salary){
        highestSalary = emp;
    }

}

console.log("Highest Salary :", highestSalary.salary);


let lowestSalary = employees[0];

for(let emp of employees){

    if(emp.salary < lowestSalary.salary){
        lowestSalary = emp;
    }

}

console.log("Lowest Salary :", lowestSalary.salary);


let totalSalary = 0;

for(let emp of employees){

    totalSalary += emp.salary;

}

console.log("Total Salary :", totalSalary);


console.log("Highest Salary Employee :", highestSalary.name);


console.log("Lowest Salary Employee :", lowestSalary.name);


console.log("Employees Earning More Than ₹40,000");

for(let emp of employees){

    if(emp.salary > 40000){

        console.log(emp.name);

    }

}


let searchId = 102;

let found = false;

for(let emp of employees){

    if(emp.id === searchId){

        console.log("Employee Found");

        console.log(emp);

        found = true;

    }

}

if(!found){

    console.log("Employee Not Found");

}


let bonus = 5000;

console.log("Salary After Bonus");

for(let emp of employees){

    let newSalary = emp.salary + bonus;

    console.log(emp.name + " : ₹" + newSalary);

}


for(let emp of employees){

console.log(`

Employee Name : ${emp.name}

Employee ID   : ${emp.id}

Salary        : ₹${emp.salary}

`);

}


