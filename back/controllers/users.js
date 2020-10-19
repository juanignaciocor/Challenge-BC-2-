const {User}= require("../models/index")
const controller= {}

controller.fetchUser= async(req,res,next)=>{
   try{
    const allUser= await User.findAll()
    res.status(200).json(allUser)
   }
   catch(err){
       next(err)
   }
}
controller.postUser= async(req,res,next)=>{
    try{
     const createUser= await User.create(req.body)
     res.status(201).json(createUser)
    }
    catch(err){
        next(err)
    }
 }



 module.exports=controller