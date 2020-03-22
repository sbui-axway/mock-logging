//import  { NextFunction, Request, Response} from 'express';
const express = require('express');
//import bodyParser from 'body-parser';
const path = require('path');
const  fs = require("fs");

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.get('/circuitpath', (req ,res , next)=>{
  const content = fs.readFileSync("db.json",'utf8');
  let parsed = JSON.parse(content);

  res.send(parsed);
});
app.listen(process.env.PORT || 8080);  
