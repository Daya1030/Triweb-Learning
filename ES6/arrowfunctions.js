//const xyz = () => {
 //   console.log("xyz", this);
//}
//console.log("here", this);
//xyz();


//2 expression bodies
let arr = [1,2,3,4];
const arrmap = arr.map(function(element){
    return element * 2 ;
})
console.log(arrmap);