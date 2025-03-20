const employee = {
    calTax(){
        console.log("tax is paid for 10% rate");
    }
}
const chandan = {
    salary: 10,
    logSalary(){
        console.log(`the slary of the employee is ${this.salary}`);
    }
}

console.log(chandan.logSalary());

// now as chandan obj will acess to its salary and logsalary func
// but not able to acess the calTax() which is present in employee 

// so access the properties and methods of other object we will make prototype 
chandan.__proto__ =  employee;

// employee is the prototype for the chandan 

console.log(chandan.calTax());  // tax is paid for 10% rate

const mohan = {
    salary:30,
    calTax(){
        console.log("tax is paid for 20% rate");
    }
}
mohan__proto__ = employee;
console.log(mohan.calTax()); //tax is paid for 20% rate

//*If object & prototype have same method, the method which is peresent in the object within self will be used.


