const mongoose = require('mongoose')
const Job = mongoose.model('Job',{
    position:{type:String},
    company:{type:String},
    address:{type:String},
    date:{type: Date, default: Date.now},
    job_type:{type:String},
    total_workers : {type:Number},
    post_by_id:{type:String}
})

 
module.exports = Job