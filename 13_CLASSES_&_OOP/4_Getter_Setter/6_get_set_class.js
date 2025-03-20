class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hello`
    }

    set password(value){
        this._password = value
    }
}

const person1 = new User("anyemail@jj.com", "abc")
console.log(person1.email);