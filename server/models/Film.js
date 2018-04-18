import mongoose from 'mongoose';
const Schema =  mongoose.Schema;
const FilmSchema = new Schema({
    title       : {type: String},
    decrition   : {type: String},
    urlTitle    : {type: String},
    directedBy  : {type: String},
    country     : {type: String},
    genre       : {type: String},
    roles       : {type: String},
    img         : {type: String},
    time        : {type: String}
});
const Menu = mongoose.model('Film', FilmSchema);