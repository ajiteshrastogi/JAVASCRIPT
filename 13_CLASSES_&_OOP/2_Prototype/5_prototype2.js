const User = {
    name: "Alice",
    email: "alice@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // Linking TASupport's prototype to TeachingSupport.
}

Teacher.__proto__ = User
// Teacher inherits from User, meaning Teacher will have access to properties of User.


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


// Add a method 'trueLength' to the String prototype.
// This method will output the string itself and its trimmed length.
let anotherUsername = "HelloNamstey     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();