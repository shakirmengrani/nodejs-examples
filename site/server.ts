/// <reference path="./typings/tsd.d.ts"/>
import express = require("express");
import path = require("path");
import conf = require("./conf/config");
import api = require("./Route/api");
var app:express.Express = express();

// app using
app.set('views', path.join(__dirname, conf.path.view));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, conf.path.staticPath)));

app.get("/",function(req,res){
  res.render("index");
})

.use("/api",api);

// app 404
app.use(function(req, res, next) {
	var err = new Error("Page Not Found");
  res.send(404,"Page Not Found");
	// next(err);
});

// app listen
var server = app.listen(conf.PORT,function(){
  console.log("Server Start on port " + conf.PORT);
});
