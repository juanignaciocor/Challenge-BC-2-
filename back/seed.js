const {Package, User}= require('./models/index')

const personas = [
    {
        fullName: "juan ignacio",
        packages:[{
        type:"grande",
        name:"bolso"},
        {type:"chico",
        name:"cartera"},
        {type:"mediano",
        name:"buzo"}],
        flight:1
},]



function addUserPackage ({fullName,flight,packages}){
    Promise.all([
        User.create({
            fullName,
            flight
        })
        .then((data)=>{
            console.log(data.id,"este es mi id")
            packages.map(p=>(
               
                Package.create({
                    userId:data.id,
                    category:p.type,
                    name:p.name
                })      
        ))
          
        })
    ])
}

personas.map(e => {
    addUserPackage(e)
})

