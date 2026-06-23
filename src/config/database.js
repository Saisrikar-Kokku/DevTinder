const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect(
    "mongodb+srv://saisrikarpersonal_db_user:bdJB7TJ9hn2LnfNJ@namastenode.8at4hhg.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
