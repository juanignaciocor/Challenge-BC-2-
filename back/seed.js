const {Package, User}= require('./models/index')

const personas = [
    {
        full_name: "juan ignacio",
        packages:[{
        type:"grande",
        name:"bolso"},
        {type:"chico",
        name:"cartera"},
        {type:"mediano",
        name:"buzo"}],
        flight:1
},
{
    full_name: "rober villa",
    packages:[{
    type:"grande",
    name:"bolso"},
    {type:"chico",
    name:"tanga"},
    {type:"mediano",
    name:"mochila"}],
    flight:1
},
{
    full_name: "santino diliscia",
    packages:[{
    type:"grande",
    name:"mochila viajera"},
    {type:"chico",
    name:"buzo"},
    {type:"mediano",
    name:"caja"}],
    flight:1
}]



function addUserPackage ({full_name,flight,packages}){
    Promise.all([
        User.create({
            full_name,
            flight
        })
        .then((data)=>{
            const userCreate= data
            packages.map(p=>(
               
                Package.create({
                    category:p.type,
                    name:p.name
                }) 
                .then((package)=>{
                    userCreate.addPackage(package)
                    package.setUser(userCreate.id)
                })     
        ))
          
        })
    ])
}

personas.map(e => {
    addUserPackage(e)
})

