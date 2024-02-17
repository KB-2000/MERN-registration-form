const User = require('../models/User')

const getAllUsers = (req,res)=>{
    // res.send("welcome to get /user route")
    User.find({}).then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json({"message":"error fetching records"})
    })
}

const createAUser = (req,res)=>{
    // res.send("welcome to post /user route")
    // let newObj = new User({
    //     firstName:req.body.fname,
    //     lastName:req.body.lname,
    //     email:req.body.email
    // })
    let newObj = new User(req.body)
    console.log(newObj)
    newObj.save().then((result)=>{
        console.log(result)
        res.send(result)
    }).catch((err)=>{
        res.json({message:err})
    })
}

module.exports = {
    getAllUsers,
    createAUser
}