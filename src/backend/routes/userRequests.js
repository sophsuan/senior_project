const Users = require("../models/userSchema");
const express = require("express");

const router = express.Router();

// get user by userId
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const user = await Users.find(
    {
      userId : userId
    }
  );

  res.send(user);
});

// get experience by userId
router.get("/exp", async (req, res) => {
  const userId = req.query.userId;
  const user = await Users.find(
    {
      userId : userId
    }
  );

  res.send(user.experience);
});

// post new user given body
router.post("/", async (req, res) => {
  const {
    userId,
    googleAuthToken,
    experience
  } = req.body;
  let newUser = new Users({
    userId,
    googleAuthToken,
    experience
  });
  try {
    newUser = await newUser.save();
    res.send(`${userId} added to Users`);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

// update experience of user by userId
router.put("/exp", async (req, res) => {
  const userId = req.query.userId;
  const experience = req.query.experience;

  try {
    const user = await Users.findOne(
      {
        userId: userId
      }
    );

    user.experience = experience;
    await user.save();
    res.send(`${userId} experience updated to ${experience}`);  
  } catch (error) {
    res.status(500).send(error.message);
    console.log(`error is ${error.message}`);
  }
});

module.exports = router;