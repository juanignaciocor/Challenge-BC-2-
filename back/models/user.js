const S = require('sequelize')
const db = require("../db/index.js")

class User extends S.Model { }

User.init({
    fullName: {
        type: S.STRING,
        allowNull: false,
        unique:true

    },
    flight:{
        type:S.INTEGER,

    }
   
  

}, { sequelize: db, modelName: 'user' })

User.search = async function (name) {
    return User.findAll({
        where: {
            nombre: {
                [S.Op.like]: `%${name}%`,
            }
        }
    })
}

module.exports= User