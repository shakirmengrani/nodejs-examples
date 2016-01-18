"use strict";
var express = require("express");
var path = require("path");
var conf = require("./conf/config");
var api = require("./Route/api");
var app = express();
app.set('views', path.join(__dirname, conf.path.view));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, conf.path.staticPath)));
app.get("/", function (req, res) {
    res.render("index");
})
    .use("/api", api);
app.use(function (req, res, next) {
    var err = new Error("Page Not Found");
    res.send(404, "Page Not Found");
});
var server = app.listen(conf.PORT, function () {
    console.log("Server Start on port " + conf.PORT);
});
