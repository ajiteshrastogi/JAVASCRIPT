function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

// function createUser(username, email, password){
//     SetUsername(username)
//     this.email = email
//     this.password = password
// }

//OUTPUT
// called
// createUser { email: 'chai@fb.com', password: '123' }

// here as we call a function inside a function and in call stack SetUsername Execution Context is above the createUser Execution context
// so all is ok then why it is not running why not giving username

// ans --> actually it not calling the SetUsername is giving the reference of it  
// internally when you call then internal func then it make excecution context and hold variable but 
// when you call function and go theu it and after execution of intenal function the execution context will remove 
// and hence it loses all values of that func and so we cant use that values in oter func

// so if you do console.log anything in SEtusername it do the log but is doesnt hold variable after executed 

// so js provide some method by which you explicitly call the function and it is (.call)

function createUser(username, email, password){
    SetUsername.call(this, username)  // this will all property of SetUsername to createUser
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);