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

// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// NON PRIMITIVE : array, function, object  

// Arrays  =>  object
// Function  =>  function
// Object  =>  object
 
//  TYPES OF THE DATATYPE
// var : Variable can be re-declared & updated. A global scope variable.
// let : Variable cannot be re-declared but can be updated. A block scope variable.  [GENERALLY WE USE 'let' keyword]
// const : Variable cannot be re-declared or updated. A block scope variable.`

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

/*
datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memorY
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.

*/ 
