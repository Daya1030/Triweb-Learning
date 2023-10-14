const { myEventEmitter, LOGIN_EVENT} = require("./eventFile");

module.exports.loginsuccessful = (userName) => {
    setInterval(() => {
        myEventEmitter.emit(LOGIN_EVENT, "daya");
    }, 2000);  
};