// The setInterval() method of the Window interface repeatedly calls a function or executes a code snippet, 
// with a fixed time delay between each call.

const time = setInterval(function(){
    console.log('Hello!', Date.now());
}, 1000);

const print = function(str){
    console.log(str, Date.now());
}
setInterval(print, 2000, "hi");  

// we can pass the parameter also

// to stop the this repitation

clearInterval(time);
