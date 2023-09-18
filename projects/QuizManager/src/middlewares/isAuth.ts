import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

import CustomError from "../helper/error";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  let isUserAuthenticated = false;
  try {
    let isUserAuthenticated = false;
    //header -->> get token
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      const err = new CustomError("Not authenticated");
      err.statusCode = 401;
      throw err;
    }

    //get token
    const token = authHeader.split(" ")[1];
    //console.log(token);
    ///jwt -->> decode token using sign
    let decodedToken: { userId: String; iat: Number; exp: Number };
    try {
      decodedToken = <any>jwt.verify(token, 'secretkey');
    } catch (error) {
      const err = new CustomError("Not authenticated");
      err.statusCode = 401;
      throw err;
    }

    if (!decodedToken) {
      const err = new CustomError("Not authenticated");
      err.statusCode = 401;
      throw err;
    }

    //get userId from decoded token
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    next(error);
  }
};

export { isAuthenticated };
