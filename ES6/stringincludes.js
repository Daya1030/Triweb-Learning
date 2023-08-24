// includes()
let str = "This is a good place";

console.log(str.includes("s")); //true
console.log(str.includes("S")); //false
console.log(str.includes("place")); //true
console.log(str.includes("plAce")); //false

// startsWith
console.log(str.startsWith("T")); //true
console.log(str.startsWith("t")); //false
console.log(str.startsWith("This")); //true
console.log(str.startsWith("this")); //false
console.log(str.startsWith("s")); //false

// endsWith
console.log(str.endsWith("e")); //true
console.log(str.endsWith("E")); //false
console.log(str.endsWith("place")); //true
console.log(str.endsWith("Place")); //false
console.log(str.endsWith("c")); //false