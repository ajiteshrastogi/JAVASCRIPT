// async function always returns a promise 
// async function myFunc( ) { .... }

// await pauses the execution of its surrounding async function until the promise is settled. 

function getData(dataId) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        },3000);
    });
}

async function getAllDAta(){
    console.log("getting data1........");
    const response1 = await getData(1);
    console.log(response1);
    
    console.log("getting data12........");
    const response2 = await getData(2);
    console.log(response2);

    console.log("getting data3........");
    const response3 = await getData(3);
    console.log(response3);
}
getAllDAta();