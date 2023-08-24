//1.  parameter context matching
//function printdatatype1([name, age]){
 //   console.log("Name is", name);
 //   console.log("Age is", age);
//}
//printdatatype1(["daya", 23]);

//function printdatatype2([name, age]){
  //console.log("Name is", name);
  // console.log("Age is", age);
//}
//printdatatype2(["daya", 23]);

function printdatatype3({name: ename, age: eage}){
    console.log("Name is", ename);
     console.log("Age is", eage);
  }
  printdatatype3({name:"daya", age:23});