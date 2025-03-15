/* --------------------------------------------------
    Creating an Object using Object Literal Notation
   --------------------------------------------------
   - An object is a collection of properties defined as key-value pairs.
   - A value can be any data type including functions, making it a method.
*/

const mySym = Symbol("key1");

const newObj = new Object(); // singelton

const person = {   // non singelton
    name: "Alice",   
    "full name" : "ALice Chaudhary",     
    age: 30,              
    isStudent: false,    

    // mySym: "mykey1",   --> act as the string if our gonna lo it 
    //for symbol it have different syntaxing 

    [mySym]: "mykey1",

    // Method: A function defined within the object.

    greet: function() {
        console.log("Hello, my name is " + this.name);
        // 'this' refers to the current object (person)
    },

    // ES6 shorthand for defining a method

    celebrateBirthday() {
        this.age += 1;  // Increase age by 1
        console.log("I am now " + this.age + " years old!");
    }
};

console.log("Person object:", person);

//  - Properties can be accessed using dot notation or bracket notation.

console.log("Name (dot notation):", person.name);       // Dot notation
console.log("Age (bracket notation):", person["age"]);   // Bracket notation

// now as you want to log the full name you don't able use 'dot' notation of accesing 
console.log(person["full name"])

console.log(person[mySym]);
console.log(typeof person[mySym]);

person.greet();
person.celebrateBirthday();

// Modifying a property
person.age = 31;
console.log("Updated Age:", person.age);

/* --------------------------------------------------
    Common Object Methods
   --------------------------------------------------
   - Object.keys() returns an array of the object's own enumerable property names.
   - Object.values() returns an array of the object's own enumerable property values.
   - Object.entries() returns an array of [key, value] pairs.
*/
const keys = Object.keys(person);
console.log("Keys of person object:", keys);

const values = Object.values(person);
console.log("Values of person object:", values);

const entries = Object.entries(person);
console.log("Entries of person object:", entries);


// OBJECT INSIDE A OBJECT
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Bajirao",
            lastname: "Singham"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname);



/* --------------------------------------------------
    Freezing an Object (Immutability)
   --------------------------------------------------
   - Object.freeze() makes an object immutable.
   - Once frozen, properties of the object cannot be changed, added, or removed.
*/
const frozenObject = {
    property: "value"
};

Object.freeze(frozenObject);

// Attempting to modify the frozen object (will fail silently or throw error in strict mode)
frozenObject.property = "new value";
console.log("Frozen object:", frozenObject);


/* 
   JavaScript objects are flexible data structures that can hold multiple
   pieces of information in the form of key-value pairs. They are central to
   JavaScript programming for organizing code, enabling inheritance, and more.
*/

