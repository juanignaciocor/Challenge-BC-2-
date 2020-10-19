const User= require("./user")
const Package= require('./package')


User.hasMany(Package)


module.exports={
    User,
    Package
}