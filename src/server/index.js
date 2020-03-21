//import  { NextFunction, Request, Response} from 'express';
const express = require('express');
//import bodyParser from 'body-parser';
const path = require('path');
const  fs = require("fs");

const app = express();

app.use(express.static(path.join(__dirname, 'build')));


app.get('/circuitpath', (req ,res , next)=>{
  const content = fs.readFileSync("db.json",'utf8');
  let parsed = JSON.parse(content);

  res.send(parsed);
});
app.listen(process.env.PORT || 8080);  
