const express = require("express");
const app = express();
const routes = require("./routing.js");

app.use("/",routes);
app.use(express.static(__dirname + "/public"));

let port = 1927;
const server = app.listen(port, function(){
    console.log(`The server is up and running on port: ${port}`)
});
