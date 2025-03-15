/* --------------------------------------------------
    Assign
   --------------------------------------------------
   - if you have more then one object and you want to combined the object 
   - then there are some ways of doing it
*/

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = { obj1, obj2 }; 
const obj3 = Object.assign(obj1, obj2);
/*
 in above , The Object.assign() static method copies all enumerable own properties
  from one or more source objects to a target object.;
 
 in assign there is concept of TARGET & SOURCES
 the obj1 is the target and and obj2 are source

 The target object — what to apply the sources' properties to, which is returned after it is modified.

 source1, …, sourceN
The source object(s) — objects containing the properties you want to apply.

Return value
The target object.

*/

// for more use we take a {} where all prop of all obj stored
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);


const obj5 = {...obj1, ...obj2}
console.log(obj4);