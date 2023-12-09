import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

require('dotenv').config({path:'../../.env'})

const JWT_SECRET = process.env.JWT_SECRET

console.log(JWT_SECRET);

const authUser = (req:Request,res:Response,next:NextFunction) => {

    try {
        const token = req.header("auth-token");

        if(JWT_SECRET === undefined){
            return res.status(403).send("Invalid token");
        }

        if(!token) {
            return res.status(400).send("Invalid token");
         }

        
        const data:string | JwtPayload = jwt.verify(token!,JWT_SECRET);

        if (typeof data === 'string' || !data.user) {
            console.error('Invalid token');
            return res.status(401).send({ error: 'Invalid token' });
          }
        
        req.user = data.user;
        next();

    } catch (error) {
        console.error("Internal Server error :: "+ error );
    }

    

}

export default authUser;