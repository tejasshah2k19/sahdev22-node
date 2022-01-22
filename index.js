var express = require("express")
var apiRoutes = require("./api-routes")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
// const { MongoClient } = require('mongodb');

var app = express()

// app.use(express.urlencoded({extended:true}))
// app.use(express.json())

app.use(bodyParser.urlencoded({extended:false})) //html 
app.use(bodyParser.json()) //angular android -- json 



//local 
// mongoose.connect('mongodb://localhost/certificate',function(err,success){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("mongodb connected");
//     }
// });


//cloud 



const uri = "mongodb+srv://certficateuser:certificatepassword@cluster0.2gdvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri,function(err,success){
    if(err){
        console.log("error");
        console.log(err);
    }else{
        console.log("done");
    }
})

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



app.use("/api",apiRoutes)

app.listen(3000,function(){
    console.log("server started on 3000");
})