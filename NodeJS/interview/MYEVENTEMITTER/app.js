const dbfile = require("./dbfile");
const {loginsuccessful} = require("./login");
const { myEventEmitter, LOGIN_EVENT} = require("./eventFile");

myEventEmitter.on(LOGIN_EVENT, (userName)=>{
    console.log("Sending email to user:", userName);
});


loginsuccessful("daya");
