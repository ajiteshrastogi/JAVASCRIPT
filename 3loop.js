//loop
// for...of Loop
// Purpose: Used to iterate over iterable objects (like arrays, strings, maps, sets, and more).
// Use case: Ideal for working with values directly in iterable collections.

// just like for each loop

const numbers = [10, 20, 30];
for (let num of numbers) {
    console.log(num);
}
// Output:
// 10
// 20
// 30



// for...in Loop
// Purpose: Used to iterate over the enumerable properties of an object.
// Use case: Ideal for objects or when you need to iterate over keys (property names).
// it iterates over the indexing.

const arr = [10, 20, 30];
for (let index in arr) {
    console.log(index, arr[index]);
}

// Output:
// 0 10
// 1 20
// 2 30

// On object 
let Student = {
    naam : "Pta nahi",
    age: 14,
    add: "Lapta",
    ispass: false,
};
for (let key in Student){
    console.log(key, "=" ,Student[key]);
}
// Output
// naam = Pta nahi
// age = 14
// add = Lapta
// ispass = false