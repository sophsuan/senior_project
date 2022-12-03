const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
  next();
});

const connection_url =
  "mongodb+srv://admin-1:qqbKs8Xbf8WMr2pC@main.xestrn2.mongodb.net/test";
mongoose
  .connect(connection_url)
  .then(() => console.log("Successful connection to MongoDB"))
  .catch(error => console.log("Failed connection to MongoDB: ", error.message));

const logEndpoints = require("./routes/logRequests.js");
const userEndpoints = require("./routes/userRequests.js");
const promptEndpoints = require("./routes/promptRequests.js");

app.use("/api/log", logEndpoints);
app.use("/api/user", userEndpoints);
app.use("/api/prompt", promptEndpoints);

app.listen(3001);