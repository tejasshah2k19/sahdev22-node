const UserModel = require("../model/user.model")


exports.signup = function (req, res) {
    let user = new UserModel({
        firstName: req.body.firstName,
        email:req.body.email,
        password:req.body.password 
    })


    user.save(function(err,data){
        if(err){
            console.log(err);
            res.json({ data: user, msg: "something went wrong!!!!", status: -1 })
        }else{
            res.json({ data: user, msg: "user added", status: 200 })
        }
    })
}


exports.getAllUsers = function (req, res) {
    res.json({ data: users, msg: "users reterived", status: 1 })
}