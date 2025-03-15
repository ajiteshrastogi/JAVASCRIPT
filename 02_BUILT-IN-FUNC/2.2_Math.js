// Math Functions

// Absolute value
console.log(Math.abs(-10)); // 10

// Ceiling: Rounds up to the nearest integer
console.log(Math.ceil(4.3)); // 5

// Floor: Rounds down to the nearest integer
console.log(Math.floor(4.9)); // 4

// Rounding to the nearest integer
console.log(Math.round(4.5)); // 5

// Square root
console.log(Math.sqrt(25)); // 5

// Power function: base^exponent
console.log(Math.pow(2, 3)); // 8

// Random number between 0 and 1
console.log(Math.random()); 

// Random integer between a given range (1 to 10)
console.log(Math.floor(Math.random() * 10) + 1);

// ---------------------- Finding a random number between the range (min, max) --------------------------------

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Trigonometric functions (sin, cos, tan)
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1