// a function's scope is determined by its location within the source code, 
// allowing inner functions to access variables declared in their outer (parent) function's scope, 
// but not the other way around. 


function outer(){
    let username = "person@1"
    // console.log("OUTER", secret); // gave error as secret is in scope of inner only
    function inner(){
        let secret = "my123"
        console.log("inner", username);  // give answer as username can be access by innerclass
        // this is the lexical SCoping
    }
    function innerTwo(){
        console.log("innerTwo", username);
        // console.log(secret); // give error as agin 
    }
    inner()
    innerTwo()

}
outer()
// console.log("TOO OUTER", username); // gave error as username is not in global scope