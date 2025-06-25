import mongoose from 'mongoose';

const restrauntSchema = new mongoose.Schema({
    name: String,
    deliveryTime: String,
    imageUrl:String,
    cuisines:String,
    rating: Number,
    address:String
});

const RestrauntModel = mongoose.model("Restraunt",restrauntSchema);
export default RestrauntModel;