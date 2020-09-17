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

module.exports = router;
