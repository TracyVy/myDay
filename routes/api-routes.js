const express = require("express");
const router = express.Router();
const db = require("../models");

console.log(db);

// Replace the following routes with postit routes.
router.get("/postit", async (req, res) => {
  const getPostit = await db.Postit.find();
  res.send(getPostit);
});

router.post("/postit", async (req, res) => {
  console.log(req.body);
  const postPostit = await db.Postit.create(req.body);
  res.send(postPostit);
});

module.exports = router;
