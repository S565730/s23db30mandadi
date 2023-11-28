const mongoose = require("mongoose")
const jaguarSchema = mongoose.Schema({
jaguar_color: String,
jaguar_breed: {type:String,length:15},
jaguar_price: {type:Number,min:1000,max:200000}
})
module.exports = mongoose.model("jaguar",jaguarSchema)