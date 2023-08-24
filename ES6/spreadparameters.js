// Spread Parameter

//1) Array case
let arr0 = [1, 2, 3, 4, 5, 6, 7];

let arr1 = [8, 9, 10];

let combined_arr = [...arr0, ...arr1];
console.log(combined_arr); //(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2) Object case

let obj1 = { name: "daya", age: 23 };
let obj2 = { ...obj1 };

console.log("Before update OBJ1 - ", obj1); //Before update OBJ1 -  {name: 'daya', age: 23}
console.log("Before update OBJ2 - ", obj2); //Before update OBJ2 -  {name: 'daya', age: 23}

obj2.name = "Ram";
obj2.age = 24;

console.log("After update OBJ1 - ", obj1); //After update OBJ1 -  {name: 'daya', age: 23}
console.log("After update OBJ2 - ", obj2); //After update OBJ2 -  {name: 'Ram', age: 24}

let obj3 = { ...obj1, city: "banepa" };
console.log("OBJ3 - ", obj3); //OBJ3 -  {name: 'daya', age: 23, city: 'banepa'}