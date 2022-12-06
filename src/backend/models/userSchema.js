const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userId: {
          type: String,
          required: true,
          unique: true,
        },
        experience: Number
    },
    { collection: "Users" }
);

const User = mongoose.model ("user", userSchema);

module.exports = User;