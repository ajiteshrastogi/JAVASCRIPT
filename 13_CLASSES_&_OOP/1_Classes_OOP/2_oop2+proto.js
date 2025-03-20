function multipleBy5(num) {
    return num * 5;
  }
  
  // Functions in JavaScript are first-class objects,
  // which means they can have properties just like any other object.
  // Here we assign a custom property "power" to the function.
  multipleBy5.power = 2;
  
  console.log(multipleBy5(5));    // Output: 25 (5 * 5)
  console.log(multipleBy5.power); // Output: 2
  
  // When you check a function's prototype property, you see the object that will be
  // linked to any instances created using this function as a constructor.
  // Even though multipleBy5 is just a normal function, it still has a prototype.


  console.log(multipleBy5.prototype); // Output: { constructor: f multipleBy5(...) }
  
  function createUser(username, score) {
    this.username = username;
    this.score = score;
  }
  
  // We can add methods to the createUser's prototype.
  // All objects created with 'new createUser' will have access to these methods.

  createUser.prototype.increment = function() {
    this.score++;
  };
  
  createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
  };
  
  // When using the new keyword, the following happens behind the scenes:
  //
  // 1. A new empty object is created.
  // 2. The new object's prototype is linked to createUser.prototype.
  // 3. The createUser constructor function is called with 'this' set to the new object,
  //    initializing its properties (username and score).
  // 4. If the constructor does not return an object explicitly, the new object is returned.
  

  const chai = new createUser("chai", 25);
  
  // This line calls createUser as a normal function (without new).
  // In non-strict mode, this would set properties on the global object, which is unintended.
  // In strict mode, it would throw an error because 'this' would be undefined.

  const tea = createUser("tea", 250);
  

  chai.printMe(); // Output: score is 25
  
  /* 
  Explanation of what happens with 'new createUser()':
  
  - A new object is created.
  - The new object is linked to the createUser.prototype so that it inherits methods like increment and printMe.
  - The createUser constructor is executed with 'this' pointing to the new object, setting the username and score.
  - The new object (with its prototype link) is returned, allowing us to call its inherited methods.
  */
  
  // Note: The variable 'tea' is assigned the result of calling createUser without new.
  // This does not create a new object in the intended way and can lead to unexpected behavior.
  // It's a good reminder always to use the 'new' keyword when calling a constructor function.
  