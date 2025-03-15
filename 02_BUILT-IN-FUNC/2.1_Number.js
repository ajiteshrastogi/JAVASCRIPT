// Number Methods
let num = 123.456;

// toFixed(n) - Rounds to 'n' decimal places (returns a string)
console.log(num.toFixed(2)); // "123.46"

// toPrecision(n) - Formats number to 'n' significant digits
console.log(num.toPrecision(4)); // "123.5"

// Checking if a value is NaN (Not-a-Number)
console.log(Number.isNaN("Hello" * 5)); // true

// Parsing a string to a float
console.log(parseFloat("3.14")); // 3.14

// Parsing a string to an integer with a specified base
console.log(parseInt("101", 2)); // 5 (binary to decimal)
