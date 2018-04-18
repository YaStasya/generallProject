import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';
var MongoStore = require('connect-mongo')(session);
import { serverPort } from '../etc/config.json';
//const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');

import * as db from './utils/DataBaseUtils.js';
db.setUpConnection()

import * as dbUser from './utils/DataBaseUtilsUser.js';
dbUser.setUpConnection()

import * as dbFilm from './utils/DataBaseUtilsFilm.js';
dbFilm.setUpConnection()

const app = express();

app.use(bodyParser.json());
//app.use(express.session());
app.use(cookieParser());
app.use(cors({orgin:'*'}));

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
    console.log(req.cookies.userId);
    if(req.session.userId){
        console.log(11111)
    } else {
        console.log(22222)
    }
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



app.get('/user', (req, res) => {
    dbUser.logoIn(req.body).then(data => res.send(data));
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
                req.session.userId = id;
                req.cookies.userId=id
                req.session.save();
                console.log(req.cookies.userId);
                console.log('---------------------------------------------------------------------------------------------------------');
                res.redirect('/');
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return ('Ошибка2');
    }
});

app.get('/profile', function (req, res) {
    console.log(req.session.userId)
    dbUser.profile(req.session.userId);
});


const server = app.listen(serverPort, ()=>{
    console.log('Listening on port ${ serverPort }');
});

//module.exports = app;
