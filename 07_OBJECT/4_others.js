/* --------------------------------------------------
    Using a Constructor Function
   --------------------------------------------------
   - Constructor functions allow us to create multiple similar objects.
   - The 'new' keyword creates a new instance of an object.
*/
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    // A method defined in the constructor
    this.getInfo = function() {
        return `${this.year} ${this.make} ${this.model}`;
    };
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log("My Car:", myCar.getInfo());

/* --------------------------------------------------
    Prototypes and Inheritance
   --------------------------------------------------
   - Every JavaScript object has a prototype.
   - Prototypes allow objects to share properties and methods.
   - Adding methods to the prototype makes them available to all instances.
*/
Car.prototype.honk = function() {
    console.log("Beep beep!");
};

myCar.honk();

/* --------------------------------------------------
    Using ES6 Classes (Modern Syntax)
   --------------------------------------------------
   - ES6 classes provide a cleaner and more intuitive syntax to create objects.
   - Under the hood, they still use prototypes.
*/
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    // Method of the class
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

const dog = new Animal("Buddy", "Dog");
dog.speak();
