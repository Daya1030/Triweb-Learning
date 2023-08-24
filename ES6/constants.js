// constants 
//var a = 5;
//console.log(a);
//a = 7
//console.log(a);

// Example2
// const a = 5;
// console.log(a);
//a=7 // TypeError: Assignment to constant variable.
//console.log(a);



//Example2
const obj = {name:"daya", age:23};
console.log("Before", obj);
// Is the below line will work???
//obj = {name:"Ram", age:23};// TypeError: Assignment to constant variable.
//console.log("After", obj);

//Then how to change the content?
obj.name = "Ram";
obj.age = 24;
console.log("After", obj);


