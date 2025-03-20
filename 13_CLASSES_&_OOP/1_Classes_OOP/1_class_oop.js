// A class is a blueprint for creating objects. 
// The constructor method is a special method for creating and initializing an instance of that class.

class Person {
    // The constructor method is called when a new instance is created.
    constructor(name, age) {
      this.name = name; // 'this' refers to the instance being created.
      this.age = age;
    }
  
    
    // This is an instance method that can be called on any Person object.
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Create an instance of the Person class.
  const person1 = new Person('Alice', 30);
  person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  

  //  Inheritance
  
  // The 'Student' class inherits from the 'Person' class using the 'extends' keyword.
  // This means that Student inherits the properties and methods from Person.
  class Student extends Person {
    constructor(name, age, studentId) {
      // Call the parent class's constructor with super()
      super(name, age);
      this.studentId = studentId;
    }
  
    //  Method Overriding
    
    // Overriding the greet method to add more information specific to Student

    greet() {
      // Call the parent class's greet method to reuse its functionality.
      super.greet();
      console.log(`I am a student with ID: ${this.studentId}.`);
    }
  }
  
  // Create an instance of the Student class.
  const student1 = new Student('Bob', 20, 'S12345');
  student1.greet();
  /* 
  Output:
  Hello, my name is Bob and I am 20 years old.
  I am a student with ID: S12345.
  */
  
  //  Static Methods

  
  // Static methods are defined on the class itself and not on the instances.
  class Calculator {
    // Static method for adding two numbers.
    static add(a, b) {
      return a + b;
    }
  }
  
  // Static methods can be called without creating an instance of the class.
  console.log(Calculator.add(5, 7)); // Output: 12