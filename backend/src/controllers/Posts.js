const db = require("../db/sql.js");

var post = db.models.Post;

const insert = async (post) => {
  var post = db.models.Post;
  const p = await post.create({ title: "hello" });
  console.log("yup");
};

const findAll = async () => {
  const post = db.models.Post;
  const allPosts = await post.findAll();
  console.log(allPosts);
  return await post.findAll();
};

module.exports = { insert, findAll };
