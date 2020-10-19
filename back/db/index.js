const Sequelize = require("sequelize")
const db = new Sequelize('postgres://postgres:strife2348@localhost:5432/challengeBootcamp',
    { logging: false })


module.exports = db