const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://shbodke:shbodke19@cluster0.ki9xfzp.mongodb.net/Janata-Garage",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
