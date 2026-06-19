
// starting point for our application
// here we will intialize our app and write the code 

const express = require("express");

const app = express();

app.use("/f", (req, res) => {
    res.send("Hi this me !!!!!!!!!")
})

app.use((req, res) => {
    res.send("Hi this is from express js")
})

app.listen(3000, () => {
    console.log("Server is succesfully listening on port 3000.......");

});
