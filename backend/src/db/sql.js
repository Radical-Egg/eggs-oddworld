const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "/app/db/posts_db.sqlite",
  logging: false,
});

const models = [require("../models/Post.js")].map((m) => m(sequelize));

sequelize.sync().then(console.log("DB synced"));

module.exports = sequelize;
