const router = require("express").Router()
const User= require("./user")
const Package= require("./package")

router.use('/user',User)
router.use('/package',Package)



module.exports = router