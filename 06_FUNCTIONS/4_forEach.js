//****************************** ForEach function in array ----------------------

// forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// Performs the specified action for each element in an array.

let fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];

let arr = ["Delhi" ,"Mumbai", "Jaipur", "Lucknow"];

// using arrrow function
arr.forEach((val, idx)=>{
    console.log(val.toUpperCase(), idx);
});

// here in function we were not wrote name of function as it is a callback func
// another example 

 let brr = [1, 2, 3, 4, 5];

 brr.forEach((val)=>{
    console.log(val*val);
 });

// also we can take normal funtion

fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);
});

// here using with OBJECT   

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

myCoding.forEach( (item) => {
    console.log(item.languageName);
} );