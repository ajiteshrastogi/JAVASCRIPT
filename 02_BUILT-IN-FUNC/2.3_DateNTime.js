// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString);

console.log(typeof myDate); // object

// to insiatlise a date 
let myCreatedDate1 = new Date(2023, 0, 23) ; // here jan is 0 and so on
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
let myCreatedDate3 = new Date("2023-01-14");  // in jan will be 1
let myCreatedDate4 = new Date("01-14-2023");
console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate4.toLocaleString());


let myTimeStamp = Date.now() // time will be in milisec

console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// you can customise local string
newDate.toLocaleString('default', {
    weekday: "long",
    
});