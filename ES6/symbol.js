const person = {
    id: 1223,
    pName: "Daya",
  };
  
  console.log(person); //{id: 1223, pName: 'Daya'}
  
  person.id = 12;
  console.log(person); //{id: 12, pName: 'Daya'}
  
  console.log(Object.getOwnPropertyNames(person)); //(2) ['id', 'pName']
  
  //Symbol
  const xyz = Symbol("xyz");
  person[xyz] = "Hidden Data";
  console.log("With Symbol - ", person); //With Symbol -  {id: 12, pName: 'Daya', Symbol(xyz): 'Hidden Data'}
  console.log("With Symbol - ", Object.getOwnPropertyNames(person)); //With Symbol - (2) ['id', 'pName']
  console.log(person[xyz]); //Hidden Data
  console.log(Object.getOwnPropertySymbols(person)); //[Symbol(xyz)]
  
  // can't create same key
  const iMSmart = Symbol("xyz");
  console.log(person[xyz]); //Hidden Data
  console.log(person[iMSmart]); //undefined
  
  // global Symbol  (different from prevoius symbol)
  const xyz1 = Symbol.for("xyz1");
  person[xyz1] = "Not hidden symbol data";
  
  console.log(person[xyz1]); //Not hidden symbol data
  
  const iKnowThis = Symbol.for("xyz1");
  console.log(person[iKnowThis]); //Not hidden symbol data
  
  console.log(Object.getOwnPropertySymbols(person));