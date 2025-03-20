const Promiseone = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Hello", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

Promiseone
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));



const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseTwo(){
    try {
        const response = await promiseTwo
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// consumePromiseFive();