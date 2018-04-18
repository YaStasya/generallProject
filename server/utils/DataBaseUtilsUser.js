import mongoose from 'mongoose';
import '../models/User';
import session from 'express-session';

const User = mongoose.model('User');
export function setUpConnection(){
    mongoose.connect('mongodb://localhost/user')
}

export function logoIn(){
    return User.find()
}

export function createUser(userData) {
    const user = new User({
        email       : userData.email,
        userName   : userData.username,
        password    : userData.password,
        createdAt   : new Date()
    });

    return user.save();
}

export function authUser(nowEmail, nowPass, callback) {
    User.authenticate(nowEmail, nowPass, function (error, user) {
        if (error || !user) {
            var err = new Error('Wrong email or password.');
            err.status = 401;
            return ('Ошибка');
        } else {
            var ret = true;
            callback(ret, user.id);
        }
    });
}
export function profile(data) {
    User.findById(data)
        .exec(function (error, user) {
            if (error) {
                return error;
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return ('Ошибка');
                } else {
                    return res.send('<h1>Name: </h1>' + user.userName + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
                }
            }
        });
}