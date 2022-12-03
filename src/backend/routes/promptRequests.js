const Prompts = require("../models/promptSchema");
const express = require("express");

const router = express.Router();

// get prompt by date
router.get("/", async (req, res) => {
  const date = req.query.date;
  const user = await Prompts.find(
    {
      date : date
    }
  );

  res.send(user);
});

// create new prompt given body
router.post("/", async (req, res) => {
  const {
    prompt,
    date
  } = req.body;
  let newPrompt = new Prompts({
    prompt,
    date
  });
  try {
    newPrompt = await newPrompt.save();
    res.send(`${date} prompt added to Prompts`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

module.exports = router;