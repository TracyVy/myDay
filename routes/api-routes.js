const express = require("express");
const router = express.Router();
const db = require("../models");

console.log(db);

// Postit routes
router.get("/postit", async (req, res) => {
  console.log("XXX - postit");
  console.log(req.query.email);
  const email = req.query.email;
  const getPostit = await db.Postit.find({ email: email });
  res.send(getPostit[getPostit.length - 1]);
});

router.post("/postit", async (req, res) => {
  console.log(req.body);
  const postPostit = await db.Postit.create(req.body);
  res.send(postPostit);
});

// User route
router.get("/user", async (req, res) => {
  const getUser = await db.User.find();
  res.send(getUser);
});

router.post("/user", async (req, res) => {
  console.log(req.body);
  const postUser = await db.user.create(req.body);
  res.send(postUser);
});

module.exports = router;
