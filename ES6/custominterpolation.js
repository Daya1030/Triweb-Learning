// custom interpolation
function something(string, name, age) {
    console.log("STRING", string);
    console.log("NAME", name);
    console.log("AGE", age);
  }
  
  let s1Name = "Ram";
  let s1Age = 23;
  something`Student's name is ${s1Name} and age is ${s1Age}`;
  
  //(3) ["Student's name is ", ' and age is ', '', raw: Array(3)]
  //NAME Ram
  //AGE 23
