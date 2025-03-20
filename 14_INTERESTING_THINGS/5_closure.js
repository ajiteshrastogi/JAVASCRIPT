function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();


/*

As we the if call a function it makes its executional context in call stack;
And the property of the function is vanished as function executed or return 
so Once makeFunc() finishes executing, we might expect that the name variable would no longer be accessible
but here it is not the case;  as name is printing 

The reason is that functions in JavaScript form closures.
A closure is the combination of a function and the lexical environment within which that function was declared. 
This environment consists of any variables that were in-scope at the time the closure was created.

In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run.
The instance of displayName maintains a reference to its lexical environment, 
within which the variable name exists. For this reason, when myFunc is invoked, 
the variable name remains available for use, and "Mozilla" is passed to console.log


*/