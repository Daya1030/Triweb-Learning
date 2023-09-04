"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.addUSerToDB = void 0;
const addUSerToDB = (userName, password, age) => {
    console.log(userName, password, age);
    return "User Registration done";
};
exports.addUSerToDB = addUSerToDB;
const updateUserData = (objUser) => {
    console.log(objUser.uName);
    return "Update done";
};
exports.updateUserData = updateUserData;
