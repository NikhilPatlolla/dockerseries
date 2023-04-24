const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose
    .connect("mongodb://sanjeev:mypassword@mongo/?authSource=admin")
    .then(()=> console.log("successfully connected to Database"))
    .catch((e)=> console.log(e));

app.get("/", (req, res)=> {
    res.send("<h2>Hello There yellow</h2>");
})

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`))

