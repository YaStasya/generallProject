import mongoose from 'mongoose';
import '../models/User';
var ObjectId = require('mongodb').ObjectID;

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
            var ret = false;
            callback(ret, '', err);
        } else {
            var ret = true;
            callback(ret, user.id, '');
        }
    });
}
export function profile(data) {
    return User.find({ "_id": ObjectId(data) })
    /*User.find({ "_id": ObjectId(data) })
        .exec(function (error, user) {
            console.log('Данные из бд' + user)
            if (error) {
                return error;
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return ('Ошибка');
                } else {
                    return user;
                }
            }
        });*/
}