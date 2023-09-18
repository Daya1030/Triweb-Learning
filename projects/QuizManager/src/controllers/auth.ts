import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcryptjs';

import CustomError from '../helper/error';
import User from '../models/user';
import jwt from 'jsonwebtoken';

import {validationResult} from "express-validator";

import { ReturnResponse } from "../utils/interfaces";

const registerUser=async (req:Request,res:Response,next:NextFunction)=>{
    let resp:ReturnResponse;
    try {

        const validationError = validationResult(req);

        if(!validationError.isEmpty()){
            const err = new CustomError("Validation failed!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }
        const email=req.body.email;
        const name=req.body.name;
        const password= await bcrypt.hash(req.body.password,12);

        const user=new User({email,name,password});
        const result=await user.save();
        if(!result){
            resp={status:"error",message:"No result found",data:{}};
            res.send(resp);
        }
        else{
            resp={status:"success",message:"Registration Done",data:{userId:result._id}};
            res.send(resp);
        }
        
    } catch (error) {
        next(error);
    }
1 }

const isUserExists = async(email:String) => {
    const user = await User.findOne({email});

    if(!user){
        return false;
    }
    return true;
}

const loginUser = async (req: Request, res: Response,next:NextFunction) => {

    let resp: ReturnResponse;
    try {
        const email = req.body.email;
        const password = req.body.password;

        // find user with email -- 
        const user = await User.findOne({ email });
        if (!user) {
            const err =new CustomError("User not exist");
           err.statusCode = 401;
           throw err;

        } else {

            const status = await bcrypt.compare(password, user.password);

            if (status) {
                const  token = jwt.sign({userId:user._id},"secretkey",{expiresIn: "1h"});
                resp = { status: "success", message: "Logged in", data: {token} };
                res.send(resp);
            } else { 
                const err =new CustomError("credential mismatch");
                err.statusCode = 401;
                throw err;
            }

        }

    } catch (error) {
        next(error);
    }

2}
export {registerUser, loginUser , isUserExists};