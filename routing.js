const express = require("express");
const shopRoutes = express.Router();
let items = require("./items.js");

shopRoutes.get("/items", (req, res)=>{
    //res.send("It's working!!!");
    res.json(items);
}); 

shopRoutes.post("/items", (req, res)=>{
    res.send("It's working!!!");
}); 

shopRoutes.get("/home", (req, res)=>{
    res.send("It's working homie!!!");
}); 

shopRoutes.get("/about", (req, res)=>{
    res.send("It's about my homie!!!");
}); 

module.exports = shopRoutes;