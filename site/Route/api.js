"use strict";
var express = require("express");
var r = express.Router();
r.get("/", function (req, res) {
    var jObj = { name: "Shakir", email: "shakir.mengrani@gmail.com" };
    res.send(JSON.stringify(jObj));
});
module.exports = r;
