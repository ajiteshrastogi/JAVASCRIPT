// Template Literals
// A way to have embedded expression String.

let naam = "John";
let age = 25;

// They are inside the backward single inverted comma [ `` ];

console.log("Hello, my name is", naam, "and I am", age, "year old.")// Normal direct print
let greeting = `Hello, my name is ${naam} and I am ${age} years old.`; // Whole is a String
// Printing all the things as String
console.log(greeting);

let multiline = `This is a string
that spans multiple
lines.`;
console.log(multiline);

//Expression Interpolation
// in Temelate literal we can perform a airthmetic operations.
let sum = `The sum of 2 and 3 is ${2 + 3}.`;
console.log(sum);

// AS we embedded some expression and created strings by doing substitution of placeholders (= ${expression}).
// and the value is calculated as runtime and this all phenomenon is called as the STRING INTERPOLATION.
