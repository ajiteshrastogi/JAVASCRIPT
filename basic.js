console.log("Hello World");

//normal variable setting 

naam = "Ajitesh Rastogi";
age = 19;
height = 31.34;
is_male = true;
a= null;
x = undefined;
console.log("name =" , naam, "\n" + "age =" , age , "\n"+ "height=", height);
console.log(typeof naam, typeof age, typeof height, typeof is_male, typeof a, typeof x);

//value updation
one = 293;
two = "Hello"
console.log(one+ "\n"+ two);
one = "Two hundered and ninty three String";
two = 74;
console.log(one+ "\n"+ two);
//hence we use 'let' datatype

//TYPES OF VARIABLE
// Primitive Types : Number, String, Boolean, Undefined, Null==OBJECT, BigInt, Symbol
 
//  TYPES OF THE DATATYPE
// var : Variable can be re-declared & updated. A global scope variable.
// let : Variable cannot be re-declared but can be updated. A block scope variable.  [GENERALLY WE USE 'let' keyword]
// const : Variable cannot be re-declared or updated. A block scope variable.

// operation facts
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
a = "37" - 7; // 30
b = "37" * 7; // 259
console.log(x + "\n" + y+ "\n" +z + "\n" +a + "\n" +b);
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.


// In JavaScript, the + operator has two roles:
// String concatenation if either operand is a string.
// Arithmetic addition if both operands are numbers.
// The - operator in JavaScript is strictly for arithmetic operations. It does not perform string concatenation.
// The * operator also performs arithmetic operations only.
// The + operator prioritizes string concatenation if one operand is a string,
// unlike the - or * operators which strictly perform arithmetic.

m = Number("37") + 7 // 44
n = + "37" + 7 // 44
console.log(m + "\n" + n);

//Object Datatype 
// collection of values
const Student = {
    naam:"Lallulal",
    age : "1",
    add : "LaptaGanj",
    cgpa: 10.1,
};
console.log(Student.naam +"\n" + Student.age);
console.log(Student["add"] , Student["cgpa"]);


//loop
// for...of Loop
// Purpose: Used to iterate over iterable objects (like arrays, strings, maps, sets, and more).
// Use case: Ideal for working with values directly in iterable collections.

// just like for each loop

const numbers = [10, 20, 30];
for (let num of numbers) {
    console.log(num);
}
// Output:
// 10
// 20
// 30

// for...in Loop
// Purpose: Used to iterate over the enumerable properties of an object.
// Use case: Ideal for objects or when you need to iterate over keys (property names).
// it iterates over the indexing.

const arr = [10, 20, 30];
for (let index in arr) {
    console.log(index, arr[index]);
}

// Output:
// 0 10
// 1 20
// 2 30
