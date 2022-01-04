const Job = require('../job_Model')


const createJob = (req,res) =>{
    let job = new Job({
        position:req.body.position,
        company:req.body.company,
        address:req.body.address,
        job_type:req.body.job_type,
        total_workers:req.body.total_workers,
        post_by_id:req.body.post_by_id,
    })

    job.save((err,doc)=>{
        if(err){
            console.log(err)
        }else {
            res.send(doc)
        }
    })

}


const getAllJob = async (req,res) =>{

    const {position,company,address,post_by_id} = req.query
    const queryObject = {}

    if(position){
        queryObject.position = {$regex:position,$options:'i'}
    }
    if(company){
        queryObject.company = {$regex:company,$options:'i'}
    }

    if(address){
        queryObject.address = {$regex:address,$options:'i'}
    }

    if(post_by_id){
        queryObject.post_by_id = post_by_id
    }
    // console.log(queryObject)
    const job = await Job.find(queryObject)
    res.send(job)
}


// const getAllJob = async (req,res) =>{
//     const job = await Job.find()
//     res.send(job)
// }



const getAllJobById = async (req,res) =>{
    const job = await Job.findById(req.params.id)
    res.send(job)
} 


const deleteJob = async (req,res) =>{
    await Job.findByIdAndDelete(req.params.id)
    res.send("Deleted Successfully ...")
}


const updateJob = async (req,res) =>{
    let job = {
        position:req.body.position,
        company:req.body.company,
        address:req.body.address,
        job_type:req.body.job_type,
        total_workers:req.body.total_workers,
    }

    await Job.findByIdAndUpdate(req.params.id,{$set:job})
    res.send("Updated Successfully..!")
}




module.exports = {
    createJob,
    getAllJob,
    getAllJobById,
    deleteJob,
    updateJob
}