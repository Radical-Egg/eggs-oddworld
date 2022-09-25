const express = require("express");
const app = express();

// Single routing
const router = express.Router();

//Require the Router we defined in movies.js
const posts = require("../controllers/Posts.js");

router.get("/posts", async (req, res, next) => {
  let allPosts = await posts.findAll();
  console.log(allPosts);
  res.send(allPosts);
});

router.post("/posts", (req, res, next) => {
  res.send("create post");
});

router.get("/posts/:id", (req, res, next) => {
  res.send(`${req.params}`);
});

router.post("/posts/:id", (req, res, next) => {
  res.send("update post " + req.params);
  console.log("update post " + req.params);
});

router.delete("/posts/:id", (req, res, next) => {
  res.send("delete post " + req.params);
  console.log("delete post " + req.params);
});

module.exports = router;
