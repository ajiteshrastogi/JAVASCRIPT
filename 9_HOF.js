//*************** This is called as HIGH ORDER FUNCTION OR METHOD
// the function in which an another the funtion act as parameter or the function which return the another function are the HIGH ORDER FUNCTION.
//(Functions that take other functions as arguments or return functions)

function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// Foreach function in array ----------------------

// forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// Performs the specified action for each element in an array.
let fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];

let arr = ["Delhi" ,"Mumbai", "Jaipur", "Lucknow"];

arr.forEach((val, idx)=>{
    console.log(val.toUpperCase(), idx);
});

// another example 
 let brr = [1, 2, 3, 4, 5];
 brr.forEach((val)=>{
    console.log(val*val);
 });

 fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);
});

//  map method in arr ------------------------------
// Creates a new array with the results of some operation. 
// The value its callback returns are used to form new array

let newArr = brr.map((val)=>{
    return val*val*val;
});
console.log(newArr);
let fruitLengths = fruits.map(function(fruit) {
    return fruit.length;
});
console.log(fruitLengths); 

// filter method in Array
// Creates a new array of elements that give true for a condition/filter.

let filterArray = brr.filter((val)=>{
    return val%2==0; // all even nums
});
console.log(filterArray);

let longFruits = fruits.filter(function(fruit) {
    return fruit.length > 6;
});
console.log(longFruits); 

// reduce methid in array
// Performs some operations & reduces the array to a single value. It returns that single value.

const Output = brr.reduce((prev, curr)=>{
    return prev + curr;
});
console.log(Output);
// here in thius method the prev and curr act as pointer in array
// At first prev = brr[0] and curr = brr[1]
// after that prev becomes the (old.prev + old.curr ) = brr[0] + brr[1] and curr = brr[3];

let totalLength = fruits.reduce(function(accumulator, fruit) {
    return accumulator + fruit.length;
}, 0);
console.log(totalLength); 

// n. Some(): Tests whether at least one element in the array passes the test implemented by the provided function.
let hasLongName = fruits.some(function(fruit) {
    return fruit.length > 7;
});
console.log(hasLongName); // Output: false 

// o. Every(): Tests whether all elements in the array pass the test implemented by the provided function.
let allHaveLongNames = fruits.every(function(fruit) {
    return fruit.length > 3;
});
console.log(allHaveLongNames); // Output: true
