//map & weakmap

let user = {
    uname: "Daya",
    mobile: 981337
}


let key1 = {};
let key2 = {uname:"Ram"};

let weakMapExample = {

    [key1]: "Some data",
    [key2]: "New Data"
}

console.log(weakMapExample);

/*
-> A Weakmap accept only object as keys
-> Map accepts premetive datatype as keys
-> There is no size property exist in weakmap
*/