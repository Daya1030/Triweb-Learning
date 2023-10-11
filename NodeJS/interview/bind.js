//Change the 'this' for some object
//but call it later

/*

-> The simplest use of bind is to make a function that, no matter how it is called, is called with a particular 'this'
-> In call(), and apply() we bind 'this' and execute function at a time, while 
    in bind() we bind 'this' now and execute it later
*/
let student2 = {
    sname: "Ram",
    mobile: 984140
}


let student = {
    sname: "Daya",
    mobile: 981337,

    getName: function(){
        console.log(this.sname);
    }
}

let sn = student.getName.bind(student);

setTimeout(sn,1000) // Daya after 1 sec

let st2 = student.getName.bind(student2)
setTimeout(st2, 1000);