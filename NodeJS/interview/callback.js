/*
What is a callback?
What is callback hell?
How to avoid callback hell?
*/

/*Asynchronous, equivalent of a function
-> Helps in non-blocking code
-> Helps in performance of single thread NodeJS application
*/

console.log("Hello");
setTimeout(()=>{
    console.log("Here Inside");
},5000)
console.log("Hi");


/*
Callbackhell
*/