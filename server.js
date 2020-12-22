//jshint esversion:6
const express = require("express");
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));

//connect to a new database called informationDB
mongoose.connect("mongodb://localhost:27017/tgproject",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/",(req, res, next) => {
  res.sendFile(__dirname + "/landing.html");
});

app.get("/login",(req, res, next) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/register",(req, res, next) => {
  res.sendFile(__dirname + "/register.html");
});

app.get("/home",(req, res, next) => {
  res.sendFile(__dirname + "/home.html");
});

app.listen(4000, function(){
  console.log("server started on port 4000");
});
