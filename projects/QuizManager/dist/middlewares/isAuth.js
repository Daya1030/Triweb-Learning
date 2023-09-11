"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const error_1 = __importDefault(require("../helper/error"));
const isAuthenticated = (req, res, next) => {
    try {
        //header -->> get token
        const authHeader = req.get("Authorization");
        if (!authHeader) {
            const err = new error_1.default("Not authenticated");
            err.statusCode = 401;
            throw err;
        }
        //get token
        const token = authHeader.split(" ")[1];
        ///jwt -->> decode token using sign
        let decodedToken;
        try {
            decodedToken = jsonwebtoken_1.default.verify(token, "keepsecretmythissecretkey");
        }
        catch (error) {
            const err = new error_1.default("Not authenticated");
            err.statusCode = 401;
            throw err;
        }
        if (!decodedToken) {
            const err = new error_1.default("Not authenticated");
            err.statusCode = 401;
            throw err;
        }
        //get userId from decoded token
        req.userId = decodedToken.userId;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.isAuthenticated = isAuthenticated;
