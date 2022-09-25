var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var cookieParser = require("cookie-parser");

var app = express();
var router = require("./src/router/routes.js");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

const db = require("./src/db/sql.js");

app.use(router);

app.listen(3010, () => {
  console.log("listening");
});
