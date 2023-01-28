import mongo from "../database/database.js";
import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';
import { singUpSchema, singInSchema } from "../schema/authSchema.js";

async function singUp(req, res){
    const {name, email, password}= req.body;
    const isValid=singUpSchema.validate({name,email,password});

    if(isValid.error){
        return res.sendStatus(400);
    }

    const hashedPassword=bcrypt.hashSync(password,10);

    try{
        mongo.collection("users").insertOne({name, email, password: hashedPassword});
        return res.sendStatus(201);
    }catch(error){
        console.log(error);
        return res.sendStatus(500);
    }
};

async function singIn(req, res){
    const {email, password}= req.body;
    const isValid=singInSchema.validate({email,password});

    if(isValid.error){
        return res.sendStatus(400);
    }

    try{
        const user=await mongo.collection("users").findOne({email});
        const isValidPassword=bcrypt.compareSync(password, user.password);

        if(!user||!isValidPassword){
            return res.sendStatus(401);
        }

        const Token = await mongo.collection("sessions").findOne({userId: user._id});

        if(!Token){
            const token=uuid();
            mongo.collection("sessions").insertOne({userId: user._id, token});
        }

        return res.status(200).send(Token);
    }catch(error){
        console.log(error);
        return res.sendStatus(500);
    }
};

export {singIn, singUp};