// JavaScript Arrays: Introduction and Methods

// 1. Introduction to Arrays
// An array in JavaScript is a special variable, which can hold more than one value at a time. 
// It allows you to store multiple values in a single variable, and those values can be of different types.

// Example of creating an array:
let fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Mango']

// You can access array elements by index (starting from 0):
console.log(fruits[0]); // Output: Apple
console.log(fruits[3]); // Output: Mango

// 2. Types of Arrays in JavaScript

// a. Simple Array (Single-dimensional Array)
// A single-dimensional array holds elements in a linear fashion.
let colors = ['Red', 'Blue', 'Green'];
console.log(colors); // Output: ['Red', 'Blue', 'Green']

// b. Multidimensional Array (Array of Arrays)
// A multidimensional array is an array of arrays. It holds arrays as its elements.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6 (Element at 2nd row, 3rd column)

// Example of accessing and modifying a multidimensional array:
matrix[0][0] = 10; // Changing the element at position [0][0]
console.log(matrix); // Output: [[10, 2, 3], [4, 5, 6], [7, 8, 9]]

// c. Heterogeneous Array (Array with Different Data Types)
// JavaScript arrays can store elements of various data types (string, number, object, etc.)
let mixedArray = [1, 'Hello', true, { name: 'John' }, [1, 2, 3]];
console.log(mixedArray); // Output: [1, 'Hello', true, { name: 'John' }, [1, 2, 3]]
console.log(mixedArray[3].name); // Output: John
console.log(mixedArray[4][1]); // Output: 2


// making of Arrays
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




