//  Extended Parameter handling

function addTwoNumber(n1, n2) {
    return n1 + n2;
  }
  
  let sum1 = addTwoNumber(2, 4);
  console.log("sum=",sum1);
  
  //1) Default Parameter values
  
  function addTwoNumberDefault(n1, n2 = 0) {
    return n1 + n2;
  }
  let sum2 = addTwoNumberDefault(2);
  console.log("sum=", sum2);