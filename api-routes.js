var router = require("express").Router()
var userController = require("./controller/user-controller")

router.post("/signup",userController.signup)
router.get("/getallusers",userController.getAllUsers)
router.delete("/deleteuser/:userId",userController.deleteUser)

module.exports = router