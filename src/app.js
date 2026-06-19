
// starting point for our application
// here we will intialize our app and write the code 

const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.send({ firstname: "Srikar", lastname: "kokku" })
});

app.post("/user", (req, res) => {
    // data is saving to DB
    res.send("Data is Succesfully saved to database")
})

app.delete("/user", (req, res) => {
    // data is saving to DB
    res.send("Data is Succesfully Deleted")
})




app.listen(3000, () => {
    console.log("Server is succesfully listening on port 3000.......");

});
