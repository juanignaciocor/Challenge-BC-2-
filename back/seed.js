const {Package, User}= require('./models/index')

const personas = [
    {
        full_name: "juan ignacio",
        packages:[{
        type:"big",
        name:"bolso"},
        {type:"small",
        name:"cartera"},
        {type:"small",
        name:"buzo"}],
        flight:"asloipdk234"
},
{
    full_name: "rober villa",
    packages:[{
    type:"big",
    name:"bolso"},
    {type:"small",
    name:"tanga"},
    {type:"medium",
    name:"mochila"}],
    flight:"asloipdk234"
},
{
    full_name: "santino diliscia",
    packages:[{
    type:"big",
    name:"mochila viajera"},
    {type:"small",
    name:"buzo"},
    {type:"medium",
    name:"caja"}],
    flight:"asloipdk234"
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

