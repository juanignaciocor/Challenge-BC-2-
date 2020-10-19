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
     const createUser= await User.create(req.body)
     res.status(201).json(createUser)
    }
    catch(err){
        next(err)
    }
 }



 module.exports=controller