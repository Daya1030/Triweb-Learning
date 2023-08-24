function updatedAge(age) {
    return new Promise((resolve, reject) => {
      if (age > 0) {
        age += 1;
        resolve(age);
      } else {
        reject("Invalid age");
      }
    });
  }
  
  // resolve case handle
  updatedAge(8).then((updatedAge) => {
    console.log("Updated age is", updatedAge); //Updated age is 9
  });
  
  // reject case handle without catch block
  updatedAge(-8).then(
    (updatedAge) => {
      console.log("Updated age is", updatedAge);
    },
    (rejectMessage) => {
      console.log(rejectMessage);
    }
  );
  
  // handle custome error without catch block
  
  function updatedAge1(age) {
    return new Promise((resolve, reject) => {
      if (age > 0) {
        age += 1;
        resolve(age);
      } else {
        //throw new Error("Invalid Age");
      }
    });
  }
  
  updatedAge1(-7).then(
    (updatedAge) => {
      console.log(updatedAge);
    },
    (rejectMessage) => {
      console.log(rejectMessage);
    }
  );
  
  // handle custome error with catch block
  updatedAge1(-7)
    .then((updatedAge) => {
      console.log(updatedAge);
    })
    .catch((errorMessage) => {
      console.log(errorMessage);
    });