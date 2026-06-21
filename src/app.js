
// starting point for our application
// here we will intialize our app and write the code 

const express = require("express");
const { adminAuth, UserAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth)

app.get("/user", UserAuth, (req, res) => {
    // chek if the request is authorized
    res.send(" user 767475data sent succesfully");
})
app.get("/user/data", (req, res) => {
    // chek if the request is authorized
    res.send(" user data sent succesfully");
})

app.get("/admin/getAllData", (req, res) => {
    // chek if the request is authorized
    res.send("All data sent succesfully");
})

app.get("/admin/DeleteUser", (req, res) => {
    res.send("Deleted a user  succesfully");
})



app.listen(3000, () => {
    console.log("Server is succesfully listening on port 3000.......");

});
