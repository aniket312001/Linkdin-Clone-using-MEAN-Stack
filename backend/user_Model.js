const mongoose = require('mongoose')
const User = mongoose.model('User',{
    name:{type:String},
    age:{type:Number},
    education:{type:String},
    phone:{type:Number},
    email:{type:String},
    password:{type:String},
    skills:{type:String}, 
    location:{type:String},
})

module.exports = User