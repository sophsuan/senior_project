const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userId: String,
        googleAuthToken: String,
        experience: Number
    },
    { collection: "Users" }
);

const User = mongoose.model ("user", userSchema);

module.exports = User;