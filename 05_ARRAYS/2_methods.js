let fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];

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



//// ************************Importatnt***************************************** ////
// g. Slice(): Returns a shallow copy of a portion of an array into a new array object.
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['Banana', 'Cherry']


// h. Splice(): Adds or removes elements from an array. It can also be used to replace existing elements.
// Splice( ) : change original array (add, remove, replace)
// splice( startIdx, delCount, newEl1... )
fruits.splice(2, 1, 'Peach'); // Removes 'Cherry' and adds 'Peach'
console.log(fruits); // Output: ['Strawberry', 'Banana', 'Peach', 'Mango']


/////----------------------------------------------------------------------------------------------



// i. Join(): Joins all elements of an array into a single string, separated by a specified delimiter.
let fruitString = fruits.join(', ');
console.log(fruitString); // Output: 'Strawberry, Banana, Peach, Mango'