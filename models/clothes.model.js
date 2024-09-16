const mongoose = require("mongoose");

const ClothesSchema = mongoose.Schema (
{ 
    name: String,
    color:String,
    size: Number,
    age:String
},
);


const Clothes = mongoose.model("Clothes", ClothesSchema)
module.exports = Clothes;