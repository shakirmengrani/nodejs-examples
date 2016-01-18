/// <reference path="../typings/tsd.d.ts"/>
import express = require("express");

var r:express.Router = express.Router();

r.get("/",(req:express.Request,res:express.Response)=>{
	var jObj = {name:"Shakir",email:"shakir.mengrani@gmail.com"};
	res.send(JSON.stringify(jObj));
});
export = r;
