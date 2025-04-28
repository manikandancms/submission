const express = require("express");

//Created a Http Server
const app = express();

//Basic route
app.get("/", (req, res) => {
    res.send("hello express.!");
});

app.get("/bus", (req, res) =>{
    res.send("hello Bus-1")
})

app.listen(3000)
