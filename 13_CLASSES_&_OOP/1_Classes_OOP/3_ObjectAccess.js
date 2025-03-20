// One thing to know that the parental prototype work as 
// Array -----> object -----> null;
// String -----> object -----> null;
// function() -----> object -----> null;




Object.prototype.superior = function() {
    console.log(`This is superior and present in all objects`);
};

// Adding a method to the Object prototype.
// Every object in JavaScript will have access to the 'superior' method.


Array.prototype.arrayAccess = function() {
    console.log(`Access by arrays only`);
};

// Adding a method to the Array prototype.
// Every array in JavaScript will have access to the 'arrayAccess' method.
// But the string and function will not able to access 


let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        // 'this' refers to the heroPower object in this context.
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

heroPower.superior();       // Inherited from Object.prototype
myHeros.superior();         // Inherited from Object.prototype, as arrays are objects.
myHeros.arrayAccess();      // Custom Array prototype method.
heroPower.arrayAccess();    // Although heroPower is an object, it doesn't have Array methods.
// beacuse the property which is peresent at parent (object) will access by the childrens(array, string, function)
// but the property present at childern is not access by parent 
