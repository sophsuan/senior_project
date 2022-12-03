const Logs = require("../models/logSchema");
const express = require("express");

const router = express.Router();

// get all logs with no query, or get log by name and date
router.get("/", async (req, res) => {
  if (req.query) {
    const userId = req.query.userId;
    const date = req.query.date;
    const log = await Logs.findOne({
        userId: userId,
        date: date
    });
    res.send(log);
    return;
  }
  const logs = await Logs.find({});
  res.send(logs);
});

// create new log given a body
router.post("/", async (req, res) => {
    const {
        userId,
        date,
        response,
        mood
    } = req.body;
    let newLog = new Logs({
        userId,
        date,
        response,
        mood
    });
    try {
        newLog = await newLog.save();
        res.send(`${userId} added new log for ${date}`);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(`error is ${error.message}`);
    }
});

// add a mood to an existing log
router.put("/mood", async (req, res) => {
  const userId = req.query.userId;
  const date = req.query.userId;
  const mood = req.query.mood;

  try {
    const log = await Logs.findOne(
      {
        userId : userId,
        date : date
      }
    );
    log.mood = mood;
    await log.save();
    res.send(`${mood} added to log for ${userId} ${date}`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

// add a response to an existing log
router.put("/mood", async (req, res) => {
  const userId = req.query.userId;
  const date = req.query.userId;
  const response = req.query.response;

  try {
    const log = await Logs.findOne(
      {
        userId : userId,
        date : date
      }
    );
    log.response = response;
    await log.save();
    res.send(`${response} added to log for ${userId} ${date}`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

module.exports = router;