const router = require("express").Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { User } = db;

router.post("/", async (req, res) => {
  let { password, ...rest } = req.body
  const user = await User.create({ 
    ...rest,
    role: 'reviewer',
    passwordDigest: bcrypt.hashSync(password, 10)
  });

  res.json(user);
});

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;