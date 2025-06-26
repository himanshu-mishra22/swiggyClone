import userModel from "../models/User.model.js";
import bcrypt from 'bcryptjs'

export async function login(req,res){
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            res.status(401).json({message:"User not exist"});
        }
        const matchPassword = bcrypt.compareSync(password,user.password);
        if(!matchPassword){
            res.status(401).json({message:"Invalid password"});
        }
        res.status(200).json({message:"Logged in successfully"});
        
    } catch (err) {
        return res.status(500).json({message:err.message});
    }
}

export async function register(req,res){
    try {
        const {fullname,email,password} = req.body;
        const existEmail = await userModel.findOne({email});
        if(existEmail){
            res.status(401).json({message:"email alreaady exist"});
        }
        const hashedPassword = bcrypt.hashSync(password,10);

        const newUser =await  userModel.create({fullname,password: hashedPassword,email})
        res.status(201).json(newUser);
    } catch (err) {
        return res.status(500).json({message:err.message});
    }
}