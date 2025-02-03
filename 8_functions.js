// A function in JavaScript is a reusable block of code designed to perform a specific task.
// Functions help to modularize code, making it more readable, reusable, and maintainable.

// Example of a simple function:

function greet() {
    console.log("Hello, welcome to JavaScript functions!");
}

greet(); // Output: Hello, welcome to JavaScript functions!

// a. Function Declaration (Named Function)
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15

// b. Function Expression (Anonymous Function assigned to a variable)
const multiply = function (x, y) {
    return x * y;
};
console.log(multiply(4, 6)); // Output: 24

// c. Arrow Function 

// const fuctionName = (parameter1, pareameter2) =>{
        // do some work
// }

// we can store a ARROW function 
// means in js we can store a function .

const subtract = (a, b) => a - b;
console.log((subtract(10, 3))+3); // Output: 10
console.log(subtract); // Output: (a, b) => a - b


// d. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("This function runs immediately!");
})(); // Output: This function runs immediately!

// e. Function Parameters and Default Values
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greetUser(); // Output: Hello, Guest!
greetUser("Alice"); // Output: Hello, Alice!


// f. Callback Functions (Passing functions as arguments)

//we can call a function in the another function in js
function abc(){
    console.log("Hello");
}
function callling(abc){
    return abc
}

function processUserInput(callback) {
    let name = "John";
    callback(name);
}
processUserInput((name) => console.log(`Hello, ${name}!`)); // Output: Hello, John!


//  Conclusion
// Functions are the backbone of JavaScript programming, providing structure and reusability.
// Understanding different function types, scope, closures, and async handling is crucial for effective JavaScript development.
