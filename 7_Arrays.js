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

// 3. Array Methods and Operations

// a. Push(): Adds one or more elements to the end of an array.
fruits.push('Orange');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange']

// b. Pop(): Removes the last element from an array and returns it.
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: Orange
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Mango']

// c. Shift(): Removes the first element from an array and returns it.
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: Apple
console.log(fruits); // Output: ['Banana', 'Cherry', 'Mango']

// d. Unshift(): Adds one or more elements to the beginning of an array.
fruits.unshift('Strawberry');
console.log(fruits); // Output: ['Strawberry', 'Banana', 'Cherry', 'Mango']

// e. Length: Returns the number of elements in the array.
console.log(fruits.length); // Output: 4

// f. IndexOf(): Returns the first index of a given element, or -1 if it's not found.
console.log(fruits.indexOf('Mango')); // Output: 3
console.log(fruits.indexOf('Grapes')); // Output: -1

// g. Slice(): Returns a shallow copy of a portion of an array into a new array object.
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['Banana', 'Cherry']

// h. Splice(): Adds or removes elements from an array. It can also be used to replace existing elements.
// Splice( ) : change original array (add, remove, replace)
// splice( startIdx, delCount, newEl1... )
fruits.splice(2, 1, 'Peach'); // Removes 'Cherry' and adds 'Peach'
console.log(fruits); // Output: ['Strawberry', 'Banana', 'Peach', 'Mango']

// i. Join(): Joins all elements of an array into a single string, separated by a specified delimiter.
let fruitString = fruits.join(', ');
console.log(fruitString); // Output: 'Strawberry, Banana, Peach, Mango'

// 4. Destructuring Arrays (ES6)
// Destructuring allows you to unpack values from arrays.
let [first, second, third] = fruits;
console.log(first); // Output: Strawberry
console.log(second); // Output: Banana
console.log(third); // Output: Peach

// 5. Spread Operator (...)
let moreFruits = [...fruits, 'Grapes', 'Pineapple'];
console.log(moreFruits); // Output: ['Strawberry', 'Banana', 'Peach', 'Mango', 'Grapes', 'Pineapple']

// 6. Conclusion
// Arrays in JavaScript are flexible, allowing you to store elements of different data types and structures.
// From single-dimensional arrays to more complex multidimensional and heterogeneous arrays, JavaScript provides a range of tools for array manipulation. 
// The methods demonstrated above provide powerful tools for manipulating arrays in various ways, making them essential for any JavaScript programmer.
