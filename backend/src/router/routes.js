const express = require("express");
const app = express();

// Single routing
const router = express.Router();

const posts = require("../controllers/Posts.js");

router.get("/posts", async (req, res, next) => {
  try {
    let allPosts = await posts.findAll();
    res.send(allPosts);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});

router.post("/posts", async (req, res, next) => {
  try {
    let insert = await posts.insert(req.body);
    res.send(insert);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});

router.get("/posts/:id", async (req, res, next) => {
  try {
    let find = await posts.findByID(req.params.id);

    if (find === null) {
      res.status(404).send({ status: "No record by this ID", statusCode: 404 });
    }
    res.send(find);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});

router.delete("/posts/:id", async (req, res, next) => {
  try {
    let destroy = await posts.deleteRecord(req.params.id);

    res.status(200).send({ status: "Record deleted", statusCode: 200 });
  } catch (error) {
    res.status(404).send({ status: error, statusCode: 404 });
  }
});

router.post("/posts/:id", async (req, res, next) => {
  try {
    let update = await posts.updateRecord(req.params.id, req.body);
    if (update == 1) {
      res.status(200).send({ status: "Record updated", statusCode: 200 });
    } else {
      res.status(404).send({ status: "Record not found", statusCode: 404 });
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});

module.exports = router;
