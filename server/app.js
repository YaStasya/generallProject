import express from 'express';
import bodyParser from 'body-parser';
import { serverPort } from '../etc/config.json';

import * as db from './utils/DataBaseUtils.js';
db.setUpConnection()

const app = express();

app.use(bodyParser.json());

var MongoClient = require("mongodb").MongoClient;

app.use(bodyParser.json());

app.get('/', function(req,res){
  db.ListMenu().then(data => res.send(data));
});

app.post('/', (req, res) => {
    db.createMenu(req.body).then(data => res.send(data));
});

app.delete('/menus/:id', (req, res) => {
    db.deleteMenu(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, ()=>{
    console.log('Listening on port ${ serverPort }');
});

//module.exports = app;
