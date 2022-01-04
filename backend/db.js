const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/User_Auth',err=>{
    if(!err){
        console.log('Db Connected')
    }
    else {
        console.log(err)
    }
})

module.exports = mongoose