"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const registerUser = (req, res, next) => {
    console.log("Registration done");
    res.send("Registeration done");
};
exports.registerUser = registerUser;
