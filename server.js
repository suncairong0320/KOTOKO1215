var express = require("express");
var server = express();

server.use(express.static(__dirname + "/KOTOKO"));

var DB = require("nedb-promises");
var profolio = DB.create(__dirname+"/profolio.db");


profolio.insert([
    
])

server.get("/portfolio-data", (req,res)=>{
    //DB
    profolio.find({}).then(results=>{
      if(results != null){
           res.send(results);
      }else{
          res.send("Error!");
      }
    })
})



server.listen(80, () => {
    console.log("Server is running at port 80.");
});