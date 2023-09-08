//send/receive data to/form database via model
import {Request, Response, NextFunction} from 'express';

import User from '../models/user';

const registerUser = (req:Request, res:Response, next:NextFunction) => {
    
    try{
        const user = new User(req.body);
        const result = user.save();
        if(!result){
            res.send("No result found")
        }else{
            res.send("Registeration done");
        }
    } catch (error){
        //console.log(error);
        res.status(500).send("something went wrong");
    }
        
    }
    

export{registerUser}