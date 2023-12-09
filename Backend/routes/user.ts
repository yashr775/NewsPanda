import express ,{Request,Response} from 'express';
import {string, z} from 'zod';
import { PrismaClient } from '@prisma/client';
import { fromZodError } from 'zod-validation-error';
require('dotenv').config({path:'../.env'})
import jwt from 'jsonwebtoken';
import authUser from '../middleware/authuser';

const router = express.Router();
const prisma = new PrismaClient();

const createUserSchema = z.object({
    name:string().min(3,"Minimum 3 characters required"),
    email:string().email("wrong email format"),
    password:string()
})

const loginUserSchema =z.object({
    email:string().email("Wrong email format"),
    password:string()
})

const JWT_SECRET:string|undefined= process.env.JWT_SECRET

router.post('/createUser',async (req:Request,res:Response) =>{
    try {
        let success =false;
         const {name ,email,password} = req.body;
         const signUpdata ={name,email,password}

         const validationResult = createUserSchema.safeParse(signUpdata);

         if(!validationResult.success){
            res.status(400).send(fromZodError(validationResult.error))
         }

         const user =await prisma.user.findUnique({
            where:
            {email}
        })

        if(user){
            return res.status(203).send("User with the given email already exist");
        }

        const createdUser = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })
        
         const userId = createdUser.id;
         const data = { user: {_id: userId } };

         const token =jwt.sign(data,JWT_SECRET!)

        if(token)
        success=true;
       
        return res.status(200).json({success,token});
      

    } catch (error) {
        console.log("Internal server error")
        console.error("Some error occures "+error);
        return res.status(500).send("Internal server error");
    }finally{
        await prisma.$disconnect();
    }
})

router.post('/login',async (req:Request,res:Response)=>{

try {
    let success =false;

    const{email,password} =req.body;

    const validationData ={email,password}
    
    const validationResult = loginUserSchema.safeParse(validationData);

    if(!validationResult.success){
        res.status(403).send("Wrong data entered")
    }

    const loginUser = await prisma.user.findUnique({where:{email}});

    if(loginUser && loginUser.password !== password){
     return res.status(403).send("Wrong password");
    }

    const data ={user:{id:loginUser?.id}}
    let token='';

    if(typeof JWT_SECRET ==="string"){
        token =jwt.sign(data,JWT_SECRET);
        success = true;
    }

    return res.status(200).json({success,token});


} catch (error) {
    console.error("Internal server error :: "+error)

}
})

module.exports =router