// Arithmetic Operators
console.log("Arithmetic Operators:");
console.log(5 + 3);    // Addition -> 8
console.log(5 - 3);    // Subtraction -> 2
console.log(5 * 3);    // Multiplication -> 15
console.log(5 / 3);    // Division -> 1.666...
console.log(5 % 3);    // Modulus (Remainder) -> 2
console.log(5 ** 3);   // Exponentiation -> 125

// Assignment Operators
console.log("\nAssignment Operators:");
let x = 10;
console.log(x);        // Assignment -> 10
x += 5;                // x = x + 5
console.log(x);        // 15
x -= 3;                // x = x - 3
console.log(x);        // 12
x *= 2;                // x = x * 2
console.log(x);        // 24
x /= 4;                // x = x / 4
console.log(x);        // 6
x %= 5;                // x = x % 5
console.log(x);        // 1

// Comparison Operators
console.log("\nComparison Operators:");
console.log(5 == "5");   // Equal (type conversion) -> true
// special
console.log(5 === "5");  // Strict equal (no type conversion) -> false
console.log(5 != "5");   // Not equal (type conversion) -> false
//special
console.log(5 !== "5");  // Strict not equal -> true
console.log(5 > 3);      // Greater than -> true
console.log(5 < 3);      // Less than -> false
console.log(5 >= 5);     // Greater than or equal -> true
console.log(5 <= 3);     // Less than or equal -> false

// Logical Operators
console.log("\nLogical Operators:");
console.log(true && false); // Logical AND -> false
console.log(true || false); // Logical OR -> true
console.log(!true);         // Logical NOT -> false

// Bitwise Operators
console.log("\nBitwise Operators:");
console.log(5 & 3);    // AND -> 1 (0101 & 0011 = 0001)
console.log(5 | 3);    // OR -> 7 (0101 | 0011 = 0111)
console.log(5 ^ 3);    // XOR -> 6 (0101 ^ 0011 = 0110)
console.log(~5);       // NOT -> -6 (~0101 = ...11111010)
console.log(5 << 1);   // Left shift -> 10 (0101 << 1 = 1010)
console.log(5 >> 1);   // Right shift -> 2 (0101 >> 1 = 0010)

// Ternary Operator
console.log("\nTernary Operator:");
let age = 18;
console.log(age >= 18 ? "Adult" : "Minor"); // "Adult"

// Typeof and Instanceof
console.log("\nTypeof and Instanceof:");
console.log(typeof 123);            // "number"
console.log(typeof "Hello");        // "string"
console.log([] instanceof Array);   // true

// String Operators
console.log("\nString Operators:");
console.log("Hello" + " " + "World!");  // Concatenation -> "Hello World!"
console.log("Hello".length);           // Length property -> 5

// Unary Operators
console.log("\nUnary Operators:");
let y = 10;
console.log(+y);    // Unary plus -> 10
console.log(-y);    // Unary minus -> -10
console.log(++y);   // Pre-increment -> 11
console.log(y++);   // Post-increment -> 11, then y = 12
console.log(--y);   // Pre-decrement -> 11
console.log(y--);   // Post-decrement -> 11, then y = 10

// Spread and Rest Operators
console.log("\nSpread and Rest Operators:");
const arr = [1, 2, 3];
console.log(...arr);  // Spread -> 1 2 3
const [a, ...rest] = arr;
console.log(a);       // 1
console.log(rest);    // [2, 3]

// Optional Chaining Operator
console.log("\nOptional Chaining:");
const obj = { name: "Alice", address: { city: "Wonderland" } };
console.log(obj?.address?.city);  // "Wonderland"
console.log(obj?.phone?.number); // undefined
