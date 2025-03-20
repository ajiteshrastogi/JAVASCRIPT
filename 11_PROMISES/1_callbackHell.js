// Callback Hell
// In programming, callback hell refers to an ineffective way of writing asynchronous code and overusing callbacks.
// It takes place when you nest functions and create too many levels of nesting. 
// This makes it harder to control access to the specific function and it becomes harder to debug the issues.
//  (pyramid of doom)

function getData1(dataId) {
    setTimeout(()=>{
        console.log("data", dataId);
    },2000);
}

getData1(1);
getData1(2);
getData1(3);

// all three execute simultaneously after 2 ms
// they are not execute one by one after delay of 2sec and that's what we want 

// so to it we have a approach

function getData(dataId, getNextData) {
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

// getData(1, ()=>{
//     getData(2);
// });

getData(1, ()=>{
    getData(2, ()=>{
        getData(3)
    })
});

// in this they will execute one by one with delay of two ms;

