const e = require("express")
const {Package}= require("../models/index")
const controller= {}
 controller.fetchPackageUser= async(req,res,next)=>{
    try{
     const allPackageUser= await Package.findAll({
         where:{
             userId:Number(req.query.userId),
             state:"reception"

         }
     })
     res.status(200).json(allPackageUser)
    }
    catch(err){
        next(err)
    }
 }

 controller.postPackageUser= async(req,res,next)=>{
    try{
        const allPackageUser= await Package.findAll({
            where:{
                userId:req.body.userId,
                state:"reception"
            }
        })
    if(allPackageUser.length<3){
        const newPackageUser= Package.create(req.body)
        res.status(201).json(newPackageUser)
       }
    else{

        res.status(403).send({
            message:"Supero el limite de paquetes"
        })
    }}
   
    catch(err){
        next(err)
    }
 }


 controller.removePackage=async(req,res,next)=>{    
     console.log(req.query.userId,"este es mi user id") 
    try{
        const removeUserPackage= await Package.update(
            {state:'retired'},
            {where:
                {userId:Number(req.query.userId),
                state:"reception"}
            })
            res.sendStatus(200)
    }
    catch(err){
        next(err)
    }

 
 }


 module.exports=controller