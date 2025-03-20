// Promise is for “eventual” completion of task. It is an object in JS.
// It is a solution to callback hell.

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

let promise = new Promise((resolve, reject)=>{
    console.log("I am Promise ");
    resolve("success");
});

function getData(dataId, getNextData) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },2000);
    });
}

console.log(getData(123));

// in above firstly when we print the getData()
// it gave the pending state and then after 2 second when we again print the getData( then it gave success as  it have delay 2ms

let newPromise = function(){
    return new Promise((resolve, reject)=>{
        console.log("I am Promise ");
        resolve("success");
    });
}

// now we see about then and catch

newPromise.then((res)=>{
    console.log("promise fulfilled", res);
});

// if Promise return the resolve then the promise.then will run and 
// if promise return the reject then the promise.catch will run 

 newPromise.catch((err)=>{
    console.log("promise rejected", err);
});