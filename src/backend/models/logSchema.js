const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
    {
        userId: String,
        date: Date,
        prompt: String,
        response: String,
        mood: String
    },
    { collection: "Logs" }
);

const Log = mongoose.model ("log", logSchema);

module.exports = Log;