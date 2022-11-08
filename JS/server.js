//jsghint esversion:6

const express = require("express");
const app = express();

app.listen(3000, function(){
    console.log("funcionando!");
});

app.get("/", function(req, res){
    console.log(req);
});