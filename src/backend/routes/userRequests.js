const Users = require("../models/userSchema");
const express = require("express");

const router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true }));

var qs = require("querystring");

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

// post user given query params
// router.post("/", async (req, res) => {
//   const userId = req.query.userId;
//   const experience = req.query.experience;
//   let newUser = new Users({
//     userId,
//     experience
//   });
//   try {
//     newUser = await newUser.save();
//     res.send(`${userId} added to Users`);
//   } catch (error) {
//     res.status(500).send(error.message);
//     console.log(`error is ${error.message}`);
//   }
// });

// post new user given body
router.post("/", async (req, res) => {
  // var jsonBody = qs.parse(req.body);
  console.log(req.body);
  const {
    userId,
    experience
  } = req.body;
  let newUser = new Users({
    userId,
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