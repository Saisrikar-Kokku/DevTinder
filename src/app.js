// starting point for our application
// here we will intialize our app and write the code

const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
app.use(express.json());
app.post("/signup", async (req, res) => {
  console.log(req.body);

  const user = new User(req.body); // pass directly the data
  try {
    await user.save();
    res.send("User Added Succesfully");
  } catch (err) {
    res.status(400).send("Error saving the user" + err.error);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established successfully ");

    app.listen(3000, () => {
      console.log("Server is succesfully listening on port 3000.......");
    });
  })
  .catch((err) => console.error("Database cannot be connected "));
