// EPSILION
let x = Number.EPSILON;
console.log(x); //2.220446049250313e-16

//MIN_SAFE_INTEGER
let y = Number.MIN_SAFE_INTEGER;
console.log(y); //-9007199254740991

//MAX_SAFE_INTEGER
let z = Number.MAX_SAFE_INTEGER;
console.log(z); //9007199254740991

//isInteger
let a = 133;
console.log(Number.isInteger(a)); //true
console.log(Number.isSafeInteger(a)); //true

// global methods
// 1) isFinite

console.log("isFinite - ", isFinite(44545)); //true
console.log("isFinite - ", isFinite(44545 / 0)); //false

//2) isNaN
console.log("isNan - ", isNaN(2133)); //false
console.log("isNan - ", isNaN(2133 / "e")); //true