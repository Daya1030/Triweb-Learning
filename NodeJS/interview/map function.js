// array map

let arr = [1,2,3,4,5,6,7,8,9];

//map()
//Double each element of array and create a new array
let newArr2 = []

for(let i=0; i<arr.length; i++){
    //newArr2[i] = arr[i]*2;
    newArr2.push(arr[i]*2);
}
console.log(newArr2);

//using map()
//any operation on each element of array
//and return same size of array
console.log("Using MAP()");
// let newArrM = arr.map(); // TypeError: undefined is not a function

let newArrM = arr.map((element)=>element*2); 
console.log(newArrM);


/*
->the map method calls the provided function once for each element in array
->map() does not execute the function for array elements without values

*/
