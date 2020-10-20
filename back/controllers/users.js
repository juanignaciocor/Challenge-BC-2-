const e = require("express")
const {User,Package}= require("../models/index")
const controller= {}
const Op = require("sequelize").Op


controller.fetchUser= async(req,res,next)=>{
   try{
    const allUser= await User.findAll({
        include: [
            {
                model: Package,
                required:false,
                where:{
                    [Op.or]: [{state: 
                        "reception"}, {state:""}]

                  
                }
               

            }],
            order: [
                ['id', 'ASC'],
            ]

        ,
    })
    res.status(200).json(allUser)
}
   catch(err){
       next(err)
   }
}
controller.postUser= async(req,res,next)=>{
    try{
        let user={
            full_name: req.body.full_name.toLowerCase(),
            flight:req.body.flight.toLowerCase()
        }
     const createUser= await User.create(user)
     res.status(201).json(createUser)
    }
    catch(err){
        next(err)
    }
 }



 module.exports=controller