const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const upload = multer();
const cookieParser = require("cookie-parser");

const app = express();
const router = require("./src/router/routes.js");
const db = require("./src/db/sql.js");

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(router);

app.listen(3010, () => {
  console.log("listening");
});
