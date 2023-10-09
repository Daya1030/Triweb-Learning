//Arrow Function
const addTwoNumber=(num1, num2) => {
    return num1+num2;
}

const addHiToName=uname => {
    return "Hi" +uname;
}
const addHelloToName=uname => "Hello" +uname;

const result = addTwoNumber(2,3);
console.log("Result= ", result);

const hiname = addHiToName("Ram");
console.log(hiname);

const helloName = addHelloToName("Daya");
console.log(helloName);

const isThis = () => {
    console.log(this);
}
console.log(this);
isThis();


