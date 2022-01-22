const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.ObjectId

const UserSchema = new mongoose.Schema({
    
    firstName:String,
    email:String,
    password:String 
})

module.exports = mongoose.model("user",UserSchema)//users 