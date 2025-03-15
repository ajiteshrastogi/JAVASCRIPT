let fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];

// . Spread Operator (...)
let moreFruits = [...fruits, 'Grapes', 'Pineapple'];
console.log(moreFruits); // Output: ['Strawberry', 'Banana', 'Peach', 'Mango', 'Grapes', 'Pineapple']

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// Arrays in JavaScript are flexible, allowing you to store elements of different data types and structures.
// From single-dimensional arrays to more complex multidimensional and heterogeneous arrays, JavaScript provides a range of tools for array manipulation. 
// The methods demonstrated above provide powerful tools for manipulating arrays in various ways, making them essential for any JavaScript programmer.