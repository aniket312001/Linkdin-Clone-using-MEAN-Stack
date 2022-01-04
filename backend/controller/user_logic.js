
const User = require('../user_Model')


const createUser = (req,res) =>{
    let user = new User({
        name:req.body.name,
        age:req.body.age,
        education:req.body.education,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password,
        skills:req.body.skills,
        location:req.body.location,
    })

    user.save((err,doc)=>{
        if(err){
            console.log(err)
        }else {
            res.send(doc)
        }
    })

}

const getAllUser = async (req,res) =>{
    const user = await User.find()
    res.send(user)
}


const getAllUserById = async (req,res) =>{
    const user = await User.findById(req.params.id)
    res.send(user)
} 


const logUser = async (req,res) =>{
    
    const {email, password} = req.query
    const queryObject = {}

    if(email){
        queryObject.email = email
    }

    if(password){
        queryObject.password = password
    }

    const user = await User.find(queryObject)
    res.send(user)
}


const updateUser = async (req,res) =>{
    let user = {
        name:req.body.name,
        age:req.body.age,
        education:req.body.education,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password,
        skills:req.body.skills,
        location:req.body.location,
    }

    await User.findByIdAndUpdate(req.params.id,{$set:user})
    res.send("Updated Successfully..!")

   
}

const deleteUser = async (req,res) =>{
    await User.findByIdAndDelete(req.params.id)
    res.send("Deleted Successfully ...")
}


module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
    logUser,
    getAllUserById
}