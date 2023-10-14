/*
How to convert object to string and vice versa
*/

let student = {
    sname:"Ram",
    friend:"Daya",
    class:"Bit",
    mobile:1234
}


console.log(student);
//console.log(student.sname);


//Convert object to string

let stringFromObject = JSON.stringify(student);

console.log(stringFromObject);
console.log(stringFromObject.sname);//undefined

//convert string to object
let objectFromString = JSON.parse(stringFromObject);
console.log(objectFromString);
console.log(objectFromString.sname);