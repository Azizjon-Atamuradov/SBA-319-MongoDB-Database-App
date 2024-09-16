
const mongoose = require("mongoose");

const carSchema = mongoose.Schema (
{
    brand: String,
    model: String,
    color: String,
    price: Number
},

{
    timestamp: true
}
)

const Car = mongoose.model("Car", carSchema)
module.exports = Car;

