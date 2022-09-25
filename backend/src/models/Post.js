const { DataTypes } = require("sequelize");

const Post = (db) => {
  const post = db.define("Post", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    body: DataTypes.STRING,
    date_posted: DataTypes.DATE,
  });
};

module.exports = Post;
