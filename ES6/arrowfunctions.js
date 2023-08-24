//Example 1
//const xyz = () => {
 //   console.log("xyz", this);
//}
//console.log("here", this);
//xyz();

//Example 2
//2 expression bodies
//let arr = [1,2,3,4];
//const arrmap = arr.map(function(element){
 //   return element * 2 ;
//})
//console.log(arrmap);
          //OR
//const arrmap = arr.map(element => element * 2)
//console.log(arrmap);
  // long way
//const retobj = (uname, age) => {
 //   return {uname: uname, age:age};
///}
//console.log(retobj("daya", 23));
    
//Example 3
      // short way
    //  const retobj = (uname, age) => ({uname: uname, age:age})
     // console.log(retobj("daya", 23));

     // Example 4
     //const addTwoNumber = (num1, num2) => num1+num2;
     //console.log(addTwoNumber(2,4));

     //statement Bodies
     Example1
     let arr = [1,2,3,4,5];
     arr.forEach((e) => {
        console.log(e,"");
    })
