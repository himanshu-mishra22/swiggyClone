import RestrauntModel from "../models/Restraunt.model.js";

export async function createRestraunt(req,res){
    try{
        const newRestraunt = await RestrauntModel.create(req.body);
        return res.status(201).json(newRestraunt);
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}

export async function getRestraunts(req,res){
    try{
        const allRestraunt = await RestrauntModel.find({});
        return res.status(200).json(allRestraunt);
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}


