const Asyncfunc1 = function (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
            
        }, 2000);
    });
}

const Asyncfunc2 = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
            
        }, 2000);
    });
}

// again we want the output one by one as in file in the callback hell

// console.log("fetching data1......");
// Asyncfunc1.then((res)=>{
//     console.log(res);
// });

// console.log("fetching data1......");
// Asyncfunc2.then((res)=>{
//     console.log(res);
// });
// The above will give the output at once

// now we will do 

console.log("fetching the data1.....");
Asyncfunc1().then((res)=>{
    console.log(res);
    
    console.log("fetching the data2.....");
    Asyncfunc2().then((res)=>{
        console.log(res);

    });
})



// if taking the same example as in callback Hell file

function getData(dataId) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        },5000);
    });
}

// getData(1).then((res)=> {
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//      });
// });


// Actual Promise Chaining 

getData(1).then((res)=> {
    return getData(2);
}).then((res)=>{
    return getData(3);
}).then((res)=>{
    console.log(res);
})


