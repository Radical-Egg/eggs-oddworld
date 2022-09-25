const db = require("../db/sql.js");

var post = db.models.Post;

const insert = async (post) => {
  try {
    let insert = await db.models.Post.create(post);
    return insert;
  } catch (error) {
    return error;
  }
};

const findAll = async () => {
  try {
    let allPosts = await db.models.Post.findAll();
    return allPosts;
  } catch (error) {
    return error;
  }
};

const findByID = async (post_id) => {
  try {
    let find = await db.models.Post.findByPk(post_id);
    return find;
  } catch (error) {
    return error;
  }
};

const deleteRecord = async (post_id) => {
  try {
    let destory = await db.models.Post.destroy({
      where: {
        id: post_id,
      },
    });
    return;
  } catch (error) {
    return error;
  }
};

const updateRecord = async (post_id, post_details) => {
  try {
    let update = await db.models.Post.update(post_details, {
      where: {
        id: post_id,
      },
    });
    return update;
  } catch (error) {
    return error;
  }
};

module.exports = { insert, findAll, deleteRecord, findByID, updateRecord };
