var router = require("express").Router()
var userController = require("./controller/user-controller")

router.post("/signup",userController.signup)
router.get("/getallusers",userController.getAllUsers)


module.exports = router