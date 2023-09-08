"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const registerUser = (req, res, next) => {
    try {
        const user = new user_1.default(req.body);
        const result = user.save();
        if (!result) {
            res.send("No result found");
        }
        else {
            res.send("Registeration done");
        }
    }
    catch (error) {
        //console.log(error);
        res.status(500).send("something went wrong");
    }
};
exports.registerUser = registerUser;
