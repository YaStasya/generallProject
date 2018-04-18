import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema =  mongoose.Schema;
const UserSchema = new Schema({
    userName       : { type: String, required: true },
    email          : { type: String, required: true },
    password       : { type: String, required: true }
});

UserSchema.statics.authenticate = function (email, password, callback) {
    User.findOne({ email: email }, function (err, user) {
            if (err) {
                return callback(err)
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            } else {
                if (password == user.password) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            }
        });
}

//hashing a password before saving it to the database
UserSchema.pre('save', function () {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            //return next(err);
        }
        user.password = hash;
        //next();
    })
});

const User = mongoose.model('User', UserSchema)