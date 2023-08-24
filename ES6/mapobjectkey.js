// Being able to use an object as a key is an important Map feature

const stu1 = { name: "Daya" };
const stu2 = { name: "Ram" };

const studentMap = new Map();

studentMap.set("key", 12);

//object as a key

studentMap.set(stu1, "He is an average person");
studentMap.set(stu2, "He is an good person");

console.log(studentMap); //Map(3) {'key' => 12, {…} => 'He is an average person', {…} => 'He is an good person'}