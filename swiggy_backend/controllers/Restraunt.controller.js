import RestrauntModel from "../models/Restraunt.model.js";

export async function createRestraunt(req,res){
    try{
        console.log("req:", req.body);
        
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

export async function updateRestraunt(req,res){
    try{
        const id = req.params.id;
        let {name,cuisine,deliveryTime,rating,address} = req.body;
        // const updatedRestraunt = RestrauntModel.findByIdAndUpdate(id,{name,cuisine,deliveryTime,rating,address});//new this case only old data are passessed to get new data a third argument is used
        const updatedRestraunt =await RestrauntModel.findByIdAndUpdate(id,{name,cuisine,deliveryTime,rating,address},{new:true});
        return res.status(200).json({message: "Restraunt updated", updatedRestraunt});

    }catch(err){
        return res.status(500).json({message:err.message});
    }
}

export async function deleteRestraunt(req,res){
    try{
        const {id} = req.params;
        const findRestraunt = await RestrauntModel.findByIdAndDelete(id);
        res.status(200).json({message:"Restraunt deleted"});
    }catch(err){
        return res.status(500).json({message:err.message});
    }
}


