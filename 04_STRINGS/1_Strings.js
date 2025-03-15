// JavaScript String Methods Example

// Creating a string
let str = "Hello, World!";

// 1. length - Returns the length of a string (number of characters including spaces and punctuation)
console.log(str.length); // Output: 13

// 2. toUpperCase() - Converts all characters in a string to uppercase
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"

// 3. toLowerCase() - Converts all characters in a string to lowercase
console.log(str.toLowerCase()); // Output: "hello, world!"

// 4. charAt(index) - Returns the character at a specified index (position starts from 0)
console.log(str.charAt(0)); // Output: "H"

// 5. indexOf(substring) - Finds the index of the first occurrence of a substring (returns -1 if not found)
console.log(str.indexOf("World")); // Output: 7

// 6. lastIndexOf(substring) - Finds the last occurrence of a substring (searches from right to left)
console.log(str.lastIndexOf("o")); // Output: 8

// 7. slice(start, end) - Extracts a section of a string from start to end (end not included)
console.log(str.slice(0, 5)); // Output: "Hello"

// 8. substring(start, end) - Similar to slice but doesn't accept negative indexes
console.log(str.substring(0, 5)); // Output: "Hello"

// 9. substr(start, length) - Extracts a substring based on start index and specified length
console.log(str.substr(7, 5)); // Output: "World"

// 10. replace(old, new) - Replaces first occurrence of a substring with another string
console.log(str.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"

// 11. replaceAll(old, new) - Replaces all occurrences of a substring with another string
console.log("Hello Hello".replaceAll("Hello", "Hi")); // Output: "Hi Hi"

// 12. split(separator) - Splits a string into an array based on a separator
console.log(str.split(", ")); // Output: ["Hello", "World!"]

// 13. trim() - Removes whitespace from both ends of the string
console.log("   Hello   ".trim()); // Output: "Hello"

// 14. startsWith(substring) - Checks if string starts with the specified substring (returns true/false)
console.log(str.startsWith("Hello")); // Output: true

// 15. endsWith(substring) - Checks if string ends with the specified substring (returns true/false)
console.log(str.endsWith("!")); // Output: true

// 16. includes(substring) - Checks if a string contains a substring (returns true/false)
console.log(str.includes("World")); // Output: true

// 17. repeat(count) - Repeats the string the specified number of times
console.log("Hi ".repeat(3)); // Output: "Hi Hi Hi "

// 18. concat(str1, str2, ...) - Joins multiple strings into one
console.log(str.concat(" Welcome!")); // Output: "Hello, World! Welcome!"

// 19. padStart(targetLength, padString) - Pads a string at the beginning to reach the target length
console.log("5".padStart(3, "0")); // Output: "005"

// 20. padEnd(targetLength, padString) - Pads a string at the end to reach the target length
console.log("5".padEnd(3, "0")); // Output: "500"
