const express = require("express");
require("dotenv/config");
const mongoose = require("mongoose");
const router = require("./src/routes/user.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const mongoDb = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use(cookieParser("yourSecretHere"));
//! Connecting to MongoDB
mongoose
  .connect(mongoDb)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//! Handling GET requests to the root URL
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", router); // Using user routes

//! Starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
