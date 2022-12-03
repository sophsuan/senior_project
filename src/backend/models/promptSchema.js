const mongoose = require("mongoose");

const promptSchema = new mongoose.Schema(
    {
        prompt: String,
        date: Date
    },
    { collection: "Prompts" }
);

const Prompt = mongoose.model ("prompt", promptSchema);

module.exports = Prompt;