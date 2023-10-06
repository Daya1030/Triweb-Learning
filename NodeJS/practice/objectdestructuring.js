

const marksOfStudent = [60,90,89,77,96,97,99,90,99];

//object destructuring

[subject1Marks, subject2Marks, subject3Marks, subject4Marks,subject5Marks, ...otherMarks]= marksOfStudent;

console.log("subject1Marks", subject1Marks);
console.log("subject2Marks", subject2Marks);
console.log("subject3Marks", subject3Marks);
console.log("subject4Marks", subject4Marks);
console.log("subject5Marks", subject5Marks);
console.log("other subjects marks", otherMarks);


//object

const student = {
    'uname': "Daya",
    'mobile': 9813333,
    'address': "Nepal"
};

const {uname} = student;
console.log(uname);