const mongoose = require("mongoose")
const jaguarSchema = mongoose.Schema({
jaguar_color: String,
jaguar_breed: String,
jaguar_price: Number
})
module.exports = mongoose.model("jaguar",jaguarSchema)