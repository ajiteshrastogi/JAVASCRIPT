let score = "Ram"

console.log(typeof score);

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "string"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "anystring" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//also for comparison
console.log(null > 0); // false 
console.log(null == 0); // false
console.log(null >= 0); // true

// because equality check treat null as null itself
//but the compariosns < , >=,> treat null as 0 
// hence 0>0 false and 0>=0 true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false


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

