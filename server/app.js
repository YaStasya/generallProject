import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';
var MongoStore = require('connect-mongo')(session);
import { serverPort } from '../etc/config.json';
var cookieParser = require('cookie-parser');
//import React from 'react';
import path from 'path';


import * as db from './utils/DataBaseUtils.js';
db.setUpConnection()

import * as dbUser from './utils/DataBaseUtilsUser.js';
dbUser.setUpConnection()

import * as dbFilm from './utils/DataBaseUtilsFilm.js';
dbFilm.setUpConnection()

import * as dbOrder from './utils/DataBaseUtilsOrder.js';
dbOrder.setUpConnection()

const app = express();

var userId = '';

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({orgin:'*'}));

var morgan = require('morgan')

app.use(morgan('combined'))

var sessionStore = new MongoStore({
    host: '127.0.0.1',
    port: '27017',
    db: 'session',
    url: 'mongodb://localhost:27017/session'
});

app.use(session({
    cookie: {
        path    : '/',
        httpOnly: false,
        maxAge  : 24*60*60*1000,
        proxy: true,
        resave: true,
        saveUninitialized: true
    },
    secret: '1234567890QWERT'
}));
app.use(session({
    secret: 'session_cookie_secret',
    name: 'session_cookie_secret',
    store: sessionStore,
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.get('/', function(req,res){
    if(userId != ''){
        req.session.userId = userId;
        res.status(200)
    } else {
        res.status(401)
    }
    /**/
});


app.get('/menu', function(req,res){
  db.ListMenu().then(data => res.send(data));
});

app.post('/menu', (req, res) => {
    db.createMenu(req.body).then(data => res.send(data));
});

app.delete('/menus/:id', (req, res) => {
    db.deleteMenu(req.params.id).then(data => res.send(data));
});


app.get('/films', function(req,res){
    dbFilm.ListFilm().then(data => res.send(data));
});

app.post('/films', (req, res) => {
    dbFilm.createFilm(req.body).then(data => res.send(data));
});

app.delete('/films/:id', (req, res) => {
    dbFilm.deleteFilm(req.params.id).then(data => res.send(data));

});

app.post('/orderShow', function(req,res){
    dbOrder.ListOrder(req.body).then(data => res.send(data));
});

app.post('/order', (req, res) => {
    dbOrder.createOrder(req.body).then(data => res.send(data));
});


app.get('/user', (req, res) => {
    if(userId != ''){
        dbUser.logoIn(req.body).then(data => res.send(data));
        req.session.userId = userId;
        res.status(200)
    } else {
        res.status(401)
    }
});
app.post('/user', (req, res) => {
    if (req.body.email &&
        req.body.userName &&
        req.body.password) {

        var userData = {
            email: req.body.email,
            username: req.body.userName,
            password: req.body.password,
        }
        dbUser.createUser(userData);
    } else if (req.body.email && req.body.password) {
        dbUser.authUser(req.body.email, req.body.password, function(ret, id){
            if(ret == true) {
                userId = id;
                res.status(200)
            } else {
                userId = id;
                res.status(401);
            }
            res.redirect('/');
            data => res.send(data);
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return ('Ошибка2');
    }
});

app.get('/logout', (req, res) => {
    if(userId != ''){
        userId='';
        req.session.userId = userId;
        res.status(401)
    } else {
        res.status(401)
    }
    res.redirect('/');
});

app.post('/profile', function (req, res) {
    dbUser.profile(userId).then(data => res.send(data));
});


const server = app.listen(serverPort, ()=>{
    console.log('Listening on port ${ serverPort }');
});
module.exports = app;

