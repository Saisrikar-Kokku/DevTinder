
// starting point for our application
// here we will intialize our app and write the code 

const express = require("express");
const connectDB = require("./config/database")
const app = express();
const User = require("./models/user")
app.post("/signup", async (req, res) => {
    const userObj = {
        firstName: "Saisrikar",
        lastName: "Kokku",
        emailId: "Srikar@123",
        password: "123456"
    }
    const user = new User(userObj); // pass directly the data
    try {
        await user.save();
        res.send("User Added Succesfully")
    }
    catch (err) {
        res.status(400).send("Error saving the user" + err.error)
    }
})

connectDB().then(() => {
    console.log("Database connection established successfully ");

    app.listen(3000, () => {
        console.log("Server is succesfully listening on port 3000.......");

    });
}).catch(err => console.error("Database cannot be connected ")
)


