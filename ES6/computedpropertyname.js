let key = "new_key"
function ret(){
    return "somemorevalues";
}
let obj = {
sname: "daya",
[key+2+ret()] : "yes"
}

console.log(obj);