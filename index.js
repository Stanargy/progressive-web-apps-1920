const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const fs = require("fs");
const path = require("path");
const router = require("./router/router");
const cors = require("cors");

const PORT = 3000;

// setup template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/pages"));

// access static file path
app.use(express.static("public"));

// allow cors
app.use(cors());
// use bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use router to handle  all requests
app.use("/", router);

// listen to port
console.log(`PORT ${PORT} | Server Started`);
app.listen(PORT);
