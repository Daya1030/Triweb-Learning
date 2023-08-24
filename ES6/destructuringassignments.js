//1 Array Matching
//let arr = [1,2,3,4];
//let [a,b] = arr;
//console.log("first element :", a);
//console.log("second element :", b);
//[b,a] = [a,b];
//console.log("arr is :", arr);
//console.log("first element :", a);
//console.log("second element :", b);

//2 object matching, shorthand notation
//function getstudent(){
  //  let student = {
   //     sname: "daya",
  //      age: "23",
  //      level: "batchlor"
 //   }
 //   return student;
//}
//var {sname, age, level} = getstudent();
//console.log(sname, age, level);

//3. object matching, Deep matching
function getdata(){
    let obj = {
        ename: "Ram",
        salary: 10000,
        location: {
            city: "banepa"
        }
    }
    return obj;
}
let {ename: employeename, salary: employeesalary, location: {city: employeecity}} = getdata();
console.log("Ename:", employeename, "salary:", employeesalary, "location:", employeecity);